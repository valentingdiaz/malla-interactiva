import {Component} from "react";
import {SemesterRowProps} from "../types";
import SemesterBar from "./SemesterBar";

export default class SemesterRow extends Component<SemesterRowProps> {

    render() {

        const { x = 0, y = 0, height = 20, courseWidth = 120, xSeparator = 10 ,semesters = [] } = this.props
        const courseInfo = {height, courseWidth, xSeparator}
        return (
            <g>
                <rect x={x} y={x} height={height} width={(courseWidth + xSeparator) * semesters.length} className={"courseBars"} />
                {semesters.map((semester, index) =>
                    <SemesterBar x={x + ((courseWidth + xSeparator) * index)} y={y} key={index} number={index + 1} {...courseInfo}/>
                )}
            </g>
        );
    }
}
