import { Component } from "react";
import {SemesterProps} from "../types";
import Course from "./Course";


export default class Semester extends Component<SemesterProps> {


    render() {
        const {x = 0, y = 0, number = 1, courses = [] } = this.props
        return (
            <g textAnchor={`translate(${x}, ${y})`} >
                {courses.map((course, i) => {
                    return <Course x={x} y={y + (130 * i)} abbrev={course} key={course}/>
                })}
            </g>
        );
    }
}


