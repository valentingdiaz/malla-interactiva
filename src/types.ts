
// Course Component
import {CourseData} from "./interfaces";

export type CourseProps = {
    x?: number,
    y?: number,
    abbrev?: string,
}

export type CourseState = {
    course: CourseData,
}

// Prerequisite component
export type PrerequisitesProps = {
    abbrev?: string,
    height?: number,
    width?: number,
    x?: number,
    y?: number,
}
