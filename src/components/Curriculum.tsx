import { Component } from "react";
import {CurriculumProps, CurriculumState} from "../types";
import Semester from "./Semester";

export default class Curriculum extends Component<CurriculumProps, CurriculumState> {
    constructor(props:CurriculumProps) {
        super(props);

        const semestersIndex = Object.keys(props.semesters).sort()
        let semesters: string[][] = []
        for (const index of semestersIndex) {
            semesters.push(props.semesters[index])
        }
        this.state = {
            semesters: semesters
        }
    }

    componentDidUpdate(prevProps: Readonly<CurriculumProps>, prevState: Readonly<CurriculumState>, snapshot?: any) {
        const semestersIndex = Object.keys(this.props.semesters).sort()
        let semesters: string[][] = []
        let isDifferent = false
        for (const index in semestersIndex) {
            if (!isDifferent){
                if (prevState.semesters[index].length != this.props.semesters[index].length) {
                    isDifferent = true

                } else {
                    for (let i = 0; i++; i < prevState.semesters[index].length) {
                        if (prevState.semesters[index][i] != this.props.semesters[index][i]) {
                            isDifferent = true
                            break
                        }
                    }
                }
            }
            semesters.push(this.props.semesters[index])
        }
        if (isDifferent) {
            this.setState({semesters})
        }
    }

    render() {
        const semesters = this.state.semesters
        return (
            semesters.map((semester, index) => {
                console.log(index, semester)
                return <Semester x={130 * index} number={index + 1} key={index} courses={semester}/>
            })
        );
    }
}
