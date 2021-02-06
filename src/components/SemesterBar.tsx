import {Component} from "react";
import {SemesterBarProps} from "../types";
import SemesterIndicator from "./SemesterIndicator";

export default class SemesterBar extends Component<SemesterBarProps> {

    constructor(props: SemesterBarProps) {
        super(props);
    }

    render() {
        const { x = 0, y = 0, semesters = [] } = this.props
        return (
            <g>
                <rect x={x} y={x} height={20} width={130 * semesters.length} className={"courseBars"} />
                {semesters.map((semester, index) =>
                    <SemesterIndicator x={x + (130 * index) } y={y} key={index} number={index + 1}/>
                )}
            </g>
        );
    }
}
