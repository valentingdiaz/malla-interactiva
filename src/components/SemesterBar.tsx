import {Component} from "react";
import {SemesterBarProps} from "../types";
import SemesterIndicator from "./SemesterIndicator";

export default class SemesterBar extends Component<SemesterBarProps> {

    render() {

        const { x = 0, y = 0, height = 20, courseWidth = 120, xSeparator = 10 ,semesters = [] } = this.props
        const courseInfo = {height, courseWidth, xSeparator}
        return (
            <g>
                <rect x={x} y={x} height={height} width={(courseWidth + xSeparator) * semesters.length} className={"courseBars"} />
                {semesters.map((semester, index) =>
                    <SemesterIndicator x={x + ((courseWidth + xSeparator) * index)} y={y} key={index} number={index + 1} {...courseInfo}/>
                )}
            </g>
        );
    }
}
