import {CategoriesDict, CategoryData, CourseData, CustomCategories, SemestersDict} from "./interfaces";


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
    number: number,
} & OptionalYearBarProps

export type OptionalYearBarProps = {
    height: number,
    halfYear: Boolean,
    courseWidth: number,
    xSeparator: number,
} & Position & OnClick


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
    number: number,
} & OptionalSemesterBarProps

export type OptionalSemesterBarProps = {
    courseWidth: number,
    height: number,
} & Position & OnClick

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

export type CourseProps = Required<CourseData> & OptionalCourseProps

export type OptionalCourseProps = DefaultCourseSize & Position & OnClick & { customCategories: CustomCategories, custom: boolean }

export type CourseState = {
    course: CourseData,
}

// Prerequisite component
export type PrerequisitesProps = {
    prers: string[],
} & OptionalPrerequisitesProps

export type OptionalPrerequisitesProps = Position & { height: number, width: number, categories: CustomCategories, custom: boolean }

// CategoriesContainer component

export type CategoriesContainerProps = {

}

export type CategoriesContainerState = {
    categories: string[]
}

// CategoryInfo component

export type CategoryInfoProps = {
    category: CategoryData
} & OptionalCategoryInfoProps

export type OptionalCategoryInfoProps = OnClick

// Progress

export type ProgressProps = {

} & OptionalProgressProps

export type OptionalProgressProps = {
    text: string,
    min: number,
    max: number,
    now: number,
    style: {},
    variant: string,
}

// misc


export type SemesterArray = string[][]

type DefaultCourseSize = {
    courseWidth: number,
    courseHeight: number,
}

type OnClick = {
    onClick: () => void
}

type Position = {
    x: number,
    y: number
}

