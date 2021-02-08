import { Component } from "react";
import {SemesterProps} from "../types";
import Course from "./Course";


export default class Semester extends Component<SemesterProps> {


    render() {
        const {x = 0, y = 0, number = 1, courses = [], ySeparator = 10, courseWidth = 120, courseHeight = 120 } = this.props
        const courseSize = { courseWidth, courseHeight }
        return (
            <g textAnchor={`translate(${x}, ${y})`} >
                {courses.map((course, i) => {
                    return <Course x={x} y={y +(courseHeight + ySeparator) * i} {...courseSize} abbrev={course} key={course}/>
                })}
            </g>
        );
    }
}


