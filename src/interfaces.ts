
// Curriculum

export interface SemestersDict {
    [key: string]: string[],
}

// Courses Context

export interface CourseData {
    id: number,
    name: string,
    abbrev: string,
    dictatedIn: DictatedIn,
    category: string,
    creditsUSM: number,
    creditsSCT: number,
    prers: string[]
}

export interface CoursesDict {
    [key: string]: CourseData
}

// Categories Context

export interface CategoryData {
    name: string,
    color: string,
    whiteText?: boolean
}

export interface CategoriesDict {
    [key : string]: CategoryData
}

// misc

export interface CustomCategories {
    [key: string]: { id: number, color: string, whiteText?: boolean }
}

export enum DictatedIn {
    UNKNOWN = "",
    BOTH = "A",
    EVEN = "P",
    ODD = "I"
}