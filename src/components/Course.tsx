import { Component } from "react";
import SvgText from "./svgText";
type Props = typeof Course.defaultProps & {
    x: number,
    y: number,
    id: number,
    credits: number,
    name: string,
    sigla: string,
    color?: string,
}

class Course extends Component<Props> {
    private readonly height: number;
    private readonly width: number;

    static defaultProps = {
        x: 5,
        y: 5,
        id: 1,
        credits: 1,
        name: "Introducción a la malla interactiva",
        sigla: "INF-101",
        color: "#2E58A7"
    }

    constructor(props: Props) {
        super(props);
        this.height = 100;
        this.width = 100;
    }

    render() {
        return (
            <g cursor="pointer" role="img" transform={`translate(${this.props.x}, ${this.props.y})`}>
                <title>Ramo IWI-131, Programación. Este ramo
                    tiene 3 créditos USM y 5 créditos SCT. Se dicta en ambos semestres y no tiene
                    prerrequisitos.</title>
                <rect x={0} y={0} width={this.width} height={this.height} fill={"#2E58A7"}/>
                <rect x={0} y={0} width={this.width} height={this.height * 0.2} fill={"#6D6E71"} className="bars"/>
                <SvgText x={this.width * 0.5} y={this.height * 0.5} width={this.width * 0.9} height={this.height * 0.7} className="ramo-label" fill="white" textAnchor="middle"
                         dominantBaseline="central">{this.props.name}</SvgText>
                <rect x={0} y={this.height * 0.8} width={this.width} height={this.height * 0.2} fill={"#6D6E71"} className="bars"/>

                <text x={2} y={this.height * 0.1} dominantBaseline="central" fontWeight="bold" fill="white"
                      fontSize="13">{this.props.sigla}</text>
                <circle cx={this.width * 0.9} cy={this.height * 0.1} fill="white" r="8"/>
                <text x={this.width * 0.9} y={this.height * 0.1} dominantBaseline="central" textAnchor="middle" fill="black"
                      fontSize="10">{this.props.id}</text>
                <rect x={this.width * 0.78} y={this.height * 0.8} width={this.width * 0.2} height={this.height * 0.2} fill="white"/>
                <text x={this.width * 0.88} y={this.height * 0.92} fontWeight="regular" fill="black" dominantBaseline="middle" textAnchor={"middle"}
                      fontSize="12">{this.props.credits}
                </text>


            </g>
            // <g  className="subject" id="IWI-131">
            // <rect x="5" y="80" width="100" height="100" fill="#2E58A7"></rect>
            // <g className="cross" opacity="0">
            // <path d="M5,80L105,180" stroke="#550000" stroke-width="9"></path>
            // </g>

            // </g>
        );
    }
}

export default Course;