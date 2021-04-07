import {Component} from "react";
import {OptionalProgressProps, ProgressProps} from "../types";

export default class Progress  extends Component<ProgressProps> {
    static defaultProps: OptionalProgressProps = {
        style: {width: "100%"},
        min: 0,
        max: 100,
        now: 0,
        text: "<percentage>",
        variant: "primary"

    }
    render() {
        const {style, text, max, min, now, variant} = this.props
        const percentage = Math.round((now - min) / (max - min) * 100)
        let formattedText = text.split("<percentage>").join(percentage.toString())
        return (
            <div style={{...style}} className={"progress"}>
                <div style={{clipPath: `inset(0 ${100 - percentage}% 0 0)`}} className={`progress-left bg-${variant}`}>
                    <span>{formattedText}</span>
                </div>
                <div style={{clipPath: `inset(0 0 0 ${percentage}%)`}} className={`progress-right text-${variant}`}>
                    <span >{formattedText}</span>
                </div>
            </div>
        );
    }
}
