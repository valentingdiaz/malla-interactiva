import React from "react";

// Componente modificado del original para que ajuste tamaño de la fuente y posicionamiento de lineas
// https://codepen.io/techniq/pen/rLXwJJ?editors=1011
class SvgText extends React.Component {

    static defaultProps = {
        lineHeight: 1,
        capHeight: 0.71,
        fontSize: 16
    };

    constructor(props) {
        super(props);
        this.initialFontSize = this.props.fontSize
        this.state = {
            lines: [],
            fontSize: this.initialFontSize
        }
    }

    componentWillMount() {
        let { wordsWithComputedWidth, spaceWidth, fontSize } = this.calculateWordWidths();
        let textHeight = this.props.height
        while (textHeight > parseInt(this.props.height) - 5) {
            console.log(this.props.heigth, "height tre")
            let lines = this.calculateLines(wordsWithComputedWidth, spaceWidth, this.props.width);
            textHeight = this.checkHeight(lines)
            if (textHeight > parseInt(this.props.height) - 5) {
                fontSize = (parseInt(fontSize) - 1).toString();
                ({wordsWithComputedWidth, spaceWidth, fontSize} = this.calculateWordWidths(fontSize));
            } else
                break

        }
        this.wordsWithComputedWidth = wordsWithComputedWidth;
        this.spaceWidth = spaceWidth;
        this.fontSize = fontSize

        const lines = this.calculateLines(this.wordsWithComputedWidth, this.spaceWidth, this.props.width);
        this.setState({ lines, fontSize });
    }

    render() {
        // TODO: determine lineHeight and dy dynamically (using passed in props)
        const { lineHeight, capHeight, ...props } = this.props;
        const dy = capHeight;
        const { x, y } = props;

        return (
            <text {...props} fontSize={this.state.fontSize} dy={`${dy}em`}>
                {this.state.lines.map((word, index, lines) => {
                    if (lines.length !== 1)
                        if (index === 0)
                            return <tspan x={x}  dominantBaseline="central" dy={`${-(lineHeight * lines.length / 2 - lineHeight / 2)}em`}>
                                {word}
                            </tspan>
                        else
                            return <tspan x={x}  dominantBaseline="central" dy={`${lineHeight}em`}>
                                {word}
                            </tspan>
                    else
                        return <tspan x={x} dominantBaseline="central" dy={`${0}em`}>
                            {word}
                        </tspan>
                })}
            </text>
        )
    }

    componentDidUpdate(nextProps, nextState) {
        let needFontSizeUpdate = this.wordsWithComputedWidth.reduce((result, {_, width}) => {
                return result || (width > nextProps.width)
            }, false
        );
        if (nextProps.width < this.props.width && this.state.fontSize !== this.initialFontSize)
            needFontSizeUpdate = true
        this.fontSize = this.state.fontSize
        if (this.props.children != nextProps.children || needFontSizeUpdate) {
            let { wordsWithComputedWidth, spaceWidth, fontSize } = this.calculateWordWidths();
            let textHeight = this.props.height
            console.log(this.props.heigth, "height")
            while (textHeight > this.props.height - 5) {
                let lines = this.calculateLines(wordsWithComputedWidth, spaceWidth, this.props.width);
                textHeight = this.checkHeight(lines)
                if (textHeight > this.props.height - 5) {
                    fontSize = (parseInt(fontSize) - 1).toString();
                    ({wordsWithComputedWidth, spaceWidth, fontSize} = this.calculateWordWidths(fontSize));
                } else
                    break

            }
            this.wordsWithComputedWidth = wordsWithComputedWidth;
            this.spaceWidth = spaceWidth;
            this.fontSize = fontSize
        }
        const lines = this.calculateLines(this.wordsWithComputedWidth, this.spaceWidth, this.props.width);
        const newLineAdded = this.state.lines.length !== lines.length;
        const wordMoved = this.state.lines.some((line, index) => line.length !== lines[index].length);
        const fontSizeChanged = this.state.fontSize !== this.fontSize
        // Only update if number of lines or length of any lines change
        if (newLineAdded || wordMoved || fontSizeChanged) {
            const fontSize = this.fontSize
            this.setState({ lines, fontSize })
        }
    }

    calculateWordWidths(fontSize = this.initialFontSize) {
        // Calculate length of each word to be used to determine number of words per line
        // if there is a word that doesn't fit on area, the font size gets smaller until it fits
        const words = this.props.children.split(/\s+/);
        const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        Object.assign(text.style, this.props.style);
        text.style.textAnchor = "middle"
        text.style.dominantBaseline = "central"
        text.style.fontSize = fontSize
        svg.appendChild(text);
        document.body.appendChild(svg);


        let wordsWithComputedWidth = words.map(word => {
            text.textContent = word;
            console.log(text.getComputedTextLength())
            return {word, width: text.getComputedTextLength()}
        });
        while (wordsWithComputedWidth.reduce((result, {_, width}) => {
            return result || (width > this.props.width - 5)}, false
        )) {
            // if a word doesn't fit, the font size gets smaller and word width are recomputed
            fontSize--
            text.style.fontSize = `${parseInt(fontSize)}`
            wordsWithComputedWidth = words.map(word => {
                text.textContent = word;
                text.getComputedTextLength()
                return { word, width: text.getComputedTextLength() }
            })
        }

        text.textContent = '\u00A0'; // Unicode space
        const spaceWidth = text.getComputedTextLength();

        document.body.removeChild(svg);
        return { wordsWithComputedWidth, spaceWidth, fontSize }
    }

    calculateLines(wordsWithComputedWidth, spaceWidth, lineWidth) {
        const wordsByLines = wordsWithComputedWidth.reduce((result, { word, width}) => {
            const lastLine = result[result.length - 1] || { words: [], width: 0 };

            if (lastLine.words.length === 0) {
                // First word on line
                const newLine = { words: [word], width };
                result.push(newLine);
            } else if (lastLine.width + width + (lastLine.words.length * spaceWidth) < lineWidth - 5) {
                // Word can be added to an existing line
                lastLine.words.push(word);
                lastLine.width += width;
            } else {
                // Word too long to fit on existing line
                const newLine = { words: [word], width };
                result.push(newLine);
            }

            return result;
        }, []);
        return wordsByLines.map(line => line.words.join(' '));
    }

    checkHeight(wordsByLines) {
        // Retrieves height occupied by wrapped text
        const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
        Object.assign(text.style, this.props.style)
        wordsByLines.forEach((line, index) => {
            let tspan = document.createElementNS("http://www.w3.org/2000/svg", "tspan")
            tspan.textContent = line
            tspan.setAttribute('dy', `${index ? this.props.lineHeight : 0}em`)
            text.appendChild(tspan)
        })
        svg.appendChild(text)
        document.body.appendChild(svg)
        const wrappedTextLength = text.getBoundingClientRect().height
        document.body.removeChild(svg)
        return wrappedTextLength
    }
}


export default SvgText