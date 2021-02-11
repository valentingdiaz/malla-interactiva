import {Component} from "react";
import {SemesterRowProps} from "../types";
import SemesterBar from "./SemesterBar";

export default class SemesterRow extends Component<SemesterRowProps> {

    render() {

        const { x = 0, y = 0, height = 20, courseWidth = 120, xSeparator = 10 ,semesters = [] } = this.props
        const courseInfo = {height, courseWidth, xSeparator}
        return (
            <g transform={`translate(${x}, ${y})`}>
                <rect x={0} y={0} height={height} width={courseWidth * semesters.length + xSeparator * (semesters.length - 1)} className={"courseBars"} />
                {semesters.map((semester, index) =>
                    <SemesterBar x={((courseWidth + xSeparator) * index)} y={0} key={index} number={index + 1} {...courseInfo}/>
                )}
            </g>
        );
    }
}
