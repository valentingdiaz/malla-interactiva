import {CourseData, SemestersDict} from "./interfaces";

// Curriculum Component

export type CurriculumProps = {
    semesters: SemestersDict
    courseWidth?: number,
    courseHeight?: number,
    xSeparator?: number,
    ySeparator?: number,
}

export type CurriculumState = {
    semesters: SemesterArray
}

// SemesterBar Component

export type SemesterBarProps = {
    x?: number,
    y?: number,
    xSeparator?: number,
    courseWidth?: number,
    height?: number,
    semesters: SemesterArray
}


// SemesterIndicator Component

export type SemesterIndicatorProps = {
    x: number,
    y: number,
    courseWidth?: number,
    height?: number,
    number: number,
}

// Semester Component

export type SemesterProps = {
    number: number,
    courses: string[],
    x?: number,
    y?: number,
    courseWidth?: number,
    courseHeight?: number,
    ySeparator?: number,
}

// Course Component

export type CourseProps = {
    x?: number,
    y?: number,
    courseWidth?: number,
    courseHeight?: number,
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