import { Component } from "react";
import SvgText from "./svgText";
import CoursesContext from "../coursesContext";
import CategoriesContext from "../categoriesContext";
import Prerequisites from "./prerequisites";
import {CourseProps, CourseState} from "../types";
import {CourseData} from "../interfaces";



class Course extends Component<CourseProps, CourseState> {
    private readonly height: number;
    private readonly width: number;
    private readonly emptyCourse: CourseData

    constructor(props: CourseProps) {
        super(props);
        this.height = 120;
        this.width = 120;
        this.emptyCourse = {
            id:0,
            abbrev: "",
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
            if (key == 'prers'){
                const coursePrers = course[key]
                const contextCoursePrers= contextCourse[key]
                if (coursePrers.length != contextCoursePrers.length)
                    return false
                for (let i = 0; i < coursePrers.length; i++) {
                    if (coursePrers[i] != contextCoursePrers[i])
                        return false
                }
            } else {
                if (course[key] != contextCourse[key])
                    return false
            }
        }
        return true
    }

    render() {
        const {x = 5, y = 5, abbrev = "IMI-101"} = this.props
        const course = this.state.course
        if (this.coursesAreEqual(course, this.emptyCourse)) {
            return <></>
        }
        return (
            <g cursor="pointer" role="img" transform={`translate(${x}, ${y})`}>
                {/* Descripción (debería esto ser otro componente(?)) */}
                <title>Ramo IWI-131, Programación. Este ramo
                    tiene 3 créditos USM y 5 créditos SCT. Se dicta en ambos semestres y no tiene
                    prerrequisitos.</title>

                <CategoriesContext.Consumer>
                    {categories =>
                        // Cuadrilátero de color correspondiente a categoría del ramo
                        <rect x={0} y={0} width={this.width} height={this.height}
                              fill={categories[course.category].color}/>
                    }
                </CategoriesContext.Consumer>
                {/* Barra Superior */}
                <rect x={0} y={0} width={this.width} height={this.height * 0.2} fill={"#6D6E71"}
                      className="bars"/>
                <CategoriesContext.Consumer>
                    {categories =>
                        // Nombre del ramo
                        <SvgText x={this.width * 0.5} y={this.height * 0.5} width={this.width * 0.9}
                                 height={this.height * 0.6} className="ramo-label"
                                 fill={categories[course.category].whiteText ? 'white' : 'black'}
                                 textAnchor="middle"
                                 dominantBaseline="central">{course.name}</SvgText>
                    }
                </CategoriesContext.Consumer>
                {/* Barra inferior */}
                <rect x={0} y={this.height * 0.8} width={this.width} height={this.height * 0.2}
                      fill={"#6D6E71"}
                      className="bars"/>

                {/* Sigla del ramo */}
                <text x={5} y={this.height * 0.1} dominantBaseline="central" fontWeight="bold" fill="white"
                      fontSize="15">{course.abbrev}</text>

                {/* Identificador del ramo */}
                <circle cx={this.width * 0.9} cy={this.height * 0.1} fill="white"
                        r={(this.height < this.width ? this.height : this.width) * 0.08}/>
                <text x={this.width * 0.9} y={this.height * 0.1} dominantBaseline="central"
                      textAnchor="middle"
                      fill="black"
                      fontSize="13">{course.id}</text>

                {/* Prerrequisitos */}
                <Prerequisites x={this.width * 0.12} y={this.height * 0.9} abbrev={abbrev}
                               width={this.width * 0.74}/>

                {/* Créditos */}
                <rect x={this.width * 0.73} y={this.height * 0.8} width={this.width * 0.25}
                      height={this.height * 0.2} fill="white"/>
                      {/* USM */}
                <text x={this.width * 0.75} y={this.height * 0.82} fontWeight="regular" fill="black"
                      dominantBaseline="hanging" textAnchor={"start"}
                      fontSize="13">{course.creditsUSM}
                </text>
                      {/* SCT */}
                <text x={this.width * 0.96} y={this.height * 0.98} fontWeight="regular" fill="black"
                      dominantBaseline="auto" textAnchor={"end"}
                      fontSize="13">{course.creditsSCT}
                </text>

            </g>
            // <g  className="subject" id="IWI-131">
            // <rect x="5" y="80" width="100" height="100" fill="#2E58A7"></rect>
            // <g className="cross" opacity="0">
            // <path d="M5,80L105,180" stroke="#550000" stroke-width="9"></path>
            // </g>

            // </g>
        );
    }
}

Course.contextType = CoursesContext

export default Course;