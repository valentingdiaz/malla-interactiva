import { Component } from "react";
import SvgText from "./svgText";
import CategoriesContext from "../categoriesContext";
import Prerequisites from "./Prerequisites";
import {CourseProps, CourseState, OptionalCourseProps} from "../types";
import {DictatedIn} from "../interfaces";



class Course extends Component<CourseProps> {
    static defaultProps: OptionalCourseProps = {
        courseHeight: 120,
        courseWidth: 120,
        x: 5,
        y: 5,
        onClick: () => {},
        customCategories: {},
        custom: false
    }

    selectPrer(prers: string[]): JSX.Element {
        const { courseHeight, courseWidth} = this.props
        if (this.props.custom)
            return <Prerequisites x={courseWidth * 0.12} y={courseHeight * 0.9} prers={prers} categories={this.props.customCategories} custom={true}/>
        else
            return <Prerequisites x={courseWidth * 0.12} y={courseHeight * 0.9} prers={prers}/>
    }

    paintCourse(courseWidth: number, courseHeight: number): JSX.Element {
        const {name, category , abbrev} = this.props
        if (this.props.custom) {
            const { customCategories:categories } = this.props
            return (
                <>
                    // Cuadrilátero de color correspondiente a categoría del ramo
                    <rect x={0} y={courseHeight * 0.2} width={courseWidth} className={"multiply"}
                          height={courseHeight * 0.6}
                          fill={categories[abbrev].color}/>


                    // Nombre del ramo
                    <SvgText x={courseWidth * 0.5} y={courseHeight * 0.5} width={courseWidth * 0.9}
                             height={courseHeight * 0.6} className="ramo-label"
                             fill={categories[abbrev].whiteText ? 'white' : 'black'}
                             textAnchor="middle"
                             dominantBaseline="central">{name}</SvgText>
                </>

            )
        }        else
            return (
                <CategoriesContext.Consumer>
                    {categories => <>

                        // Cuadrilátero de color correspondiente a categoría del ramo
                        <rect x={0} y={courseHeight * 0.2} width={courseWidth} className={"multiply"} height={courseHeight * 0.6}
                              fill={categories[category].color}/>


                        // Nombre del ramo
                        <SvgText x={courseWidth * 0.5} y={courseHeight * 0.5} width={courseWidth * 0.9}
                                 height={courseHeight * 0.6} className="ramo-label"
                                 fill={categories[category].whiteText ? 'white' : 'black'}
                                 textAnchor="middle"
                                 dominantBaseline="central">{name}</SvgText>
                    </>
                    }
                </CategoriesContext.Consumer>
            )
    }

    render() {
        const {x, y, courseHeight, courseWidth, id, abbrev, dictatedIn, name , category, creditsUSM, creditsSCT, prers} = this.props
        const semesterDictated = {
            [DictatedIn.UNKNOWN]: "",
            [DictatedIn.BOTH]: "",
            [DictatedIn.EVEN]: "P",
            [DictatedIn.ODD]: "I"
        }
        const semesterDictatedString = {
            [DictatedIn.UNKNOWN]: "¿ambos semestres?",
            [DictatedIn.BOTH]: "ambos semestres",
            [DictatedIn.EVEN]: "semestres pares",
            [DictatedIn.ODD]: "semesters impares"
        }
        let prersString: string
        switch (prers.length) {
            case 0:
                prersString = "no tiene prerrequisitos"
                break
            case 1:
                prersString = `tiene como prerrequisito a ${prers[0]}`
                break
            default:
                let copyPrers = [...prers]
                const lastPrer = copyPrers.pop()
                prersString = "tiene como prerrequisitos a " + copyPrers.join(", ") + ` y ${lastPrer}`
                break
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
                <title>Ramo {abbrev}, {name}. Este ramo
                    tiene {creditsUSM} créditos USM y {creditsSCT} créditos SCT. Se dicta en {semesterDictatedString[dictatedIn]} y {prersString}.</title>
                <rect x={0} y={0} width={courseWidth} height={courseHeight}
                      className={"multiply"} fill={"url(#Gradient01)"}/>

                {this.paintCourse(courseWidth, courseHeight)}

                {/* Barra Superior */}
                <rect x={0} y={0} width={courseWidth} height={courseHeight * 0.2}
                      className="multiply courseBars" />
                {/* Barra inferior */}
                <rect x={0} y={courseHeight * 0.8} width={courseWidth} height={courseHeight * 0.2}
                      className="courseBars multiply"/>

                {/* Sigla del ramo */}
                <text x={5} y={courseHeight * 0.1} dominantBaseline="central" fontWeight="bold" fill="white"
                      fontSize="15">{abbrev}</text>

                {/* Semestres en que se dicta */}
                <text x={courseWidth * 0.67} y={courseHeight * 0.1} fontWeight={"bold"} fontSize={15} dominantBaseline="central" fill={'yellow'}>{semesterDictated[dictatedIn]}</text>

                {/* Identificador del ramo */}
                <circle cx={courseWidth * 0.9} cy={courseHeight * 0.1} fill="white"
                        r={(courseHeight < courseWidth ? courseHeight : courseWidth) * 0.08}/>
                <text x={courseWidth * 0.9} y={courseHeight * 0.1} dominantBaseline="central"
                      textAnchor="middle"
                      fill="black"
                      fontSize="13">{id}</text>

                {/* Prerrequisitos */}
                {this.selectPrer(prers)}

                {/* Créditos */}
                <rect x={courseWidth * 0.73} y={courseHeight * 0.8} width={courseWidth * 0.25}
                      height={courseHeight * 0.2} className={'isolate'} fill="white"/>
                      {/* USM */}
                <text x={courseWidth * 0.75} y={courseHeight * 0.82} fontWeight="regular" fill="black"
                      dominantBaseline="hanging" textAnchor={"start"}
                      fontSize="13">{creditsUSM}
                </text>
                      {/* SCT */}
                <text x={courseWidth * 0.96} y={courseHeight * 0.98} fontWeight="regular" fill="black"
                      dominantBaseline="auto" textAnchor={"end"}
                      fontSize="13">{creditsSCT}
                </text>

            </g>
        );
    }
}


export default Course;