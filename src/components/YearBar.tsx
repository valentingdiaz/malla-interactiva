import { Component } from "react";
import {YearBarProps} from "../types";

export default class YearBar extends Component<YearBarProps> {
    render() {
        const { x = 0, y = 0, courseWidth = 120, height = 20 ,xSeparator = 10, number = 2, halfYear = false} = this.props
        if (halfYear)
            return (
                <g transform={`translate(${x}, ${y})`}>
                    <rect x={0} y={0} width={courseWidth} height={height} className={"courseBars"} />
                    <text x={courseWidth / 2} y={height / 2} fontWeight={'bold'} dominantBaseline="central"
                    textAnchor="middle" fill={'white'}>Año {number - 1} 1/2</text>
                </g>
            );
        else 
            return (
                <g transform={`translate(${x}, ${y})`}>
                    <rect x={0} y={0} width={courseWidth * 2 + xSeparator} height={height} className={"courseBars"} />
                    <text x={(courseWidth * 2 + xSeparator) / 2} y={height / 2} fontWeight={'bold'} dominantBaseline="central"
                          textAnchor="middle" fill={'white'}>Año {number}</text>
                </g>
            )
    }
}
