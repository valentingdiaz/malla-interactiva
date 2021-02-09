import {Component} from "react";
import {YearRowProps} from "../types";
import YearBar from "./YearBar";

export default class YearRow extends Component<YearRowProps> {
    render() {
        const {x = 0, y = 0, height = 20, courseWidth = 120, xSeparator = 10, semesters} = this.props
        let year = 1
        return (
            <g transform={`translate(${x}, ${y})`}>
                {semesters.map((semester, index) => {
                    if ((index + 1) % 2 == 0){
                        // Full Year
                        return <YearBar x={x + (courseWidth + xSeparator ) * 2 * Math.floor(index / 2)} key={year} y={y} xSeparator={xSeparator} height={height} courseWidth={courseWidth} number={year++}/>
                    } else {
                        if (index + 1 == semesters.length)
                            // Half Year
                            return <YearBar x={x + (courseWidth + xSeparator ) * 2 * Math.floor(index / 2)} y={y} key={year} number={year} height={height} xSeparator={xSeparator} courseWidth={courseWidth} halfYear={true}/>
                    }
                    return true
                    }
                )}
            </g>
        );
    }
}
