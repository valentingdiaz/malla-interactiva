import {CourseData, SemestersDict} from "./interfaces";

// Curriculum Component

export type CurriculumProps = {
    semesters: SemestersDict
}

export type CurriculumState = {
    semesters: SemesterArray
}

// Semester Component

export type SemesterProps = {
    number: number,
    courses: string[],
    x?: number,
    y?: number,
}

// Course Component

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

// misc

export type SemesterArray = string[][]