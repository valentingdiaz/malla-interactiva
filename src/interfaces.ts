
// Curriculum

export interface SemestersDict {
    [key: string]: string[],
    [key: number]: string[],
}

// Courses Context

export interface CourseData {
    id: number,
    name: string,
    abbrev: string,
    dictatedIn: "" | "A" | "P" | "I",
    creditsUSM: number,
    creditsSCT: number,
    category: string,
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