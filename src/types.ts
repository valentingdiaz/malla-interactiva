import {CategoryData, CourseData, SemestersDict} from "./interfaces";


// CurriculumRow Component

export type CurriculumRowProps = {
    semesters: SemestersDict,
    courseWidth?: number,
    height?: number,
    xSeparator?: number,
    ySeparator?: number,
}

export type CurriculumRowState = {
    semesters: SemesterArray,
    width: number,
    height: number,
}

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

// YearRow Component

export type YearRowProps = {
    x?: number,
    y?: number,
    xSeparator?: number,
    courseWidth?: number,
    height?: number,
    semesters: SemesterArray
}

// YearBar Component

export type YearBarProps = {
    x?: number,
    y?: number,
    courseWidth?: number,
    height?: number,
    xSeparator?: number,
    number: number,
    halfYear?: Boolean,
}


// SemesterRow Component

export type SemesterRowProps = {
    x?: number,
    y?: number,
    xSeparator?: number,
    courseWidth?: number,
    height?: number,
    semesters: SemesterArray
}


// SemesterBar Component

export type SemesterBarProps = {
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
// CategoriesContainer component

export type CategoriesContainerProps = {

}

export type CategoriesContainerState = {
    categories: string[]
}

// CategoryInfo component

export type CategoryInfoProps = {
    category: string
}

export type CategoryInfoState = CategoryData;


// misc


export type SemesterArray = string[][]