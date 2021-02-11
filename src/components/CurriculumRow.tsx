import {Component} from "react";
import YearRow from "./YearRow";
import SemesterRow from "./SemesterRow";
import {CurriculumRowProps, CurriculumRowState, SemesterArray} from "../types";
import {SemestersDict} from "../interfaces";

export default class CurriculumRow extends Component<CurriculumRowProps, CurriculumRowState> {

    constructor(props: CurriculumRowProps) {
        super(props);
        const { courseWidth = 120, xSeparator = 10, height: barHeight = 20, ySeparator = 10} = props
        const width = Object.keys(props.semesters).length * (courseWidth + xSeparator) - xSeparator
        const height = barHeight * 2 + ySeparator
        const semesters = this.createArray(props.semesters)
        this.state = {
            semesters,
            width,
            height
        }
    }

    createArray(semesters: Readonly<SemestersDict>): SemesterArray {
        const semKeys = Object.keys(semesters)
        let numKeys: number[] = []
        for (const semKey of semKeys) {
            numKeys.push(parseInt(semKey.slice(1)))
        }
        numKeys = numKeys.sort()
        const semesterArray: SemesterArray = []
        for (const numKey of numKeys) {
            semesterArray.push(semesters['s' + numKey])
        }
        return semesterArray

    }

    componentDidUpdate(prevProps: Readonly<CurriculumRowProps>, prevState: Readonly<CurriculumRowState>, snapshot?: any) {
        let needUpdate = false
        const { courseWidth = 120, xSeparator = 10, height: barHeight = 20, ySeparator = 10, semesters: propSemester} = this.props

        const propsWidth = Object.keys(propSemester).length * (courseWidth + xSeparator) - xSeparator
        const propsHeight= barHeight * 2 + ySeparator
        const propsSemesters = this.createArray(propSemester)
        let semesters: SemesterArray, width: number, height: number

        let areSemestersEqual = (propsSemesters.length != this.state.semesters.length),
            areWidthsEqual = (propsWidth != this.state.width),
            areHeightEqual = (propsHeight != this.state.height)

        semesters = (areSemestersEqual) ? propsSemesters : this.state.semesters
        width = (areWidthsEqual) ? propsWidth : this.state.width
        height = (areHeightEqual) ? propsHeight : this.state.height

        if (areHeightEqual || areWidthsEqual || areHeightEqual)
            this.setState({semesters, width, height})
    }

    render() {
        const { ySeparator = 10, height = 20, xSeparator = 10, courseWidth= 120 } = this.props
        const {semesters, ...svgSize} = this.state
        const props = {xSeparator, courseWidth, height, semesters}
        return (
            <svg className={'curriculumRow'} {...svgSize} >
                <YearRow x={0} y={0} {...props}/>
                <SemesterRow x={0} y={height + ySeparator} {...props}/>
            </svg>
        );
    }
}
