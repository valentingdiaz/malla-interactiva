import { Component } from "react";
import SvgText from "./svgText";
import CoursesContext from "../coursesContext";
import CategoriesContext from "../categoriesContext";
import Prerequisites from "./Prerequisites";
import {CourseProps, CourseState} from "../types";
import {CourseData} from "../interfaces";



class Course extends Component<CourseProps, CourseState> {
    private readonly emptyCourse: CourseData

    constructor(props: CourseProps) {
        super(props);
        this.emptyCourse = {
            id:0,
            abbrev: "",
            dictatedIn: "",
            category: "",
            creditsSCT: 0,
            creditsUSM: 0,
            name: "",
            prers: []
        }
        this.state = {
            course: this.emptyCourse        }
    }

    componentDidMount() {
        const {abbrev = "IMI-101"} = this.props
        const contextCourse = this.context[abbrev]
        if (!this.coursesAreEqual(this.state.course, contextCourse))
            this.setState({course: contextCourse})
    }

    componentDidUpdate(prevProps: Readonly<CourseProps>, prevState: Readonly<{}>, snapshot?: any) {
        const {abbrev = "IMI-101"} = this.props
        const contextCourse = this.context[abbrev]
        if (!this.coursesAreEqual(this.state.course, contextCourse))
            this.setState({course: contextCourse})
    }

    coursesAreEqual(course: CourseData, contextCourse: CourseData) :boolean {
        let key: keyof CourseData
        for (key in course) {
            if (key === 'prers'){
                const coursePrers = course[key]
                const contextCoursePrers= contextCourse[key]
                if (coursePrers.length !== contextCoursePrers.length)
                    return false
                for (let i = 0; i < coursePrers.length; i++) {
                    if (coursePrers[i] !== contextCoursePrers[i])
                        return false
                }
            } else {
                if (course[key] !== contextCourse[key])
                    return false
            }
        }
        return true
    }

    render() {
        const {x = 5, y = 5, courseHeight = 120, courseWidth = 120, abbrev = "IMI-101"} = this.props
        const course = this.state.course
        const semesterDictated = {
            '': "",
            "A": "",
            "P": "P",
            "I": "I"
        }
        const semesterDictatedString = {
            '': "¿ambos semestres?",
            "A": "ambos semestres",
            "P": "semestres pares",
            "I": "semesters impares"
        }
        let prersString: string
        switch (course.prers.length) {
            case 0:
                prersString = "no tiene prerrequisitos"
                break
            case 1:
                prersString = `tiene como prerrequisito a ${course.prers[0]}`
                break
            default:
                let prers = [...course.prers]
                const lastPrer = prers.pop()
                prersString = "tiene como prerrequisitos a " + prers.join(", ") + ` y ${lastPrer}`
                break
        }
        if (this.coursesAreEqual(course, this.emptyCourse)) {
            return <></>
        }
        return (
            <g cursor="pointer" className={'isolate course'} role="img" transform={`translate(${x}, ${y})`}>
                <defs>
                    <linearGradient gradientTransform="rotate(90)" id="Gradient01">
                        <stop offset="0%" stopColor="#AAA" />
                        <stop offset="100%" stopColor="#444" />
                    </linearGradient>
                </defs>
                {/* Descripción (debería esto ser otro componente(?)) */}
                <title>Ramo {course.abbrev}, {course.name}. Este ramo
                    tiene {course.creditsUSM} créditos USM y {course.creditsSCT} créditos SCT. Se dicta en {semesterDictatedString[course.dictatedIn]} y {prersString}.</title>
                <rect x={0} y={0} width={courseWidth} height={courseHeight}
                      className={"multiply"} fill={"url(#Gradient01)"}/>
                <CategoriesContext.Consumer>
                    {categories =>
                        // Cuadrilátero de color correspondiente a categoría del ramo
                        <rect x={0} y={courseHeight * 0.2} width={courseWidth} className={"multiply"} height={courseHeight * 0.6}
                              fill={categories[course.category].color}/>
                    }
                </CategoriesContext.Consumer>
                {/* Barra Superior */}
                <rect x={0} y={0} width={courseWidth} height={courseHeight * 0.2}
                      className="multiply courseBars" />
                <CategoriesContext.Consumer>
                    {categories =>
                        // Nombre del ramo
                        <SvgText x={courseWidth * 0.5} y={courseHeight * 0.5} width={courseWidth * 0.9}
                                 height={courseHeight * 0.6} className="ramo-label"
                                 fill={categories[course.category].whiteText ? 'white' : 'black'}
                                 textAnchor="middle"
                                 dominantBaseline="central">{course.name}</SvgText>
                    }
                </CategoriesContext.Consumer>
                {/* Barra inferior */}
                <rect x={0} y={courseHeight * 0.8} width={courseWidth} height={courseHeight * 0.2}
                      className="courseBars multiply"/>

                {/* Sigla del ramo */}
                <text x={5} y={courseHeight * 0.1} dominantBaseline="central" fontWeight="bold" fill="white"
                      fontSize="15">{course.abbrev}</text>

                {/* Semestres en que se dicta */}
                <text x={courseWidth * 0.67} y={courseHeight * 0.1} fontWeight={"bold"} fontSize={15} dominantBaseline="central" fill={'yellow'}>{semesterDictated[course.dictatedIn]}</text>

                {/* Identificador del ramo */}
                <circle cx={courseWidth * 0.9} cy={courseHeight * 0.1} fill="white"
                        r={(courseHeight < courseWidth ? courseHeight : courseWidth) * 0.08}/>
                <text x={courseWidth * 0.9} y={courseHeight * 0.1} dominantBaseline="central"
                      textAnchor="middle"
                      fill="black"
                      fontSize="13">{course.id}</text>

                {/* Prerrequisitos */}
                <Prerequisites x={courseWidth * 0.12} y={courseHeight * 0.9} abbrev={abbrev}
                               width={courseWidth * 0.74}/>

                {/* Créditos */}
                <rect x={courseWidth * 0.73} y={courseHeight * 0.8} width={courseWidth * 0.25}
                      height={courseHeight * 0.2} className={'isolate'} fill="white"/>
                      {/* USM */}
                <text x={courseWidth * 0.75} y={courseHeight * 0.82} fontWeight="regular" fill="black"
                      dominantBaseline="hanging" textAnchor={"start"}
                      fontSize="13">{course.creditsUSM}
                </text>
                      {/* SCT */}
                <text x={courseWidth * 0.96} y={courseHeight * 0.98} fontWeight="regular" fill="black"
                      dominantBaseline="auto" textAnchor={"end"}
                      fontSize="13">{course.creditsSCT}
                </text>

            </g>
        );
    }
}

Course.contextType = CoursesContext

export default Course;