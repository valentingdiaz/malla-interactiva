import { Component } from "react";
import CoursesContext from "../coursesContext";
import CategoriesContext from "../categoriesContext";
import {PrerequisitesProps} from "../types";



class Prerequisites extends Component<PrerequisitesProps> {

    private radius: number
    private fontSize: number

    constructor(props:PrerequisitesProps) {
        super(props);
        this.radius = 10
        this.fontSize = 12
    }

    componentDidMount() {

    }

    renderPrers() {
        const {x = 12, y = 12, abbrev = "IMI-101"} = this.props
        let prers = this.context[abbrev].prers
        if (prers.length > 4){
            this.radius = 8
            this.fontSize = 10
        } else {
            this.radius = 10
            this.fontSize = 12
        }
        let dx = 0
        return prers.map((prer: string) => {
            if (this.context[prer] === undefined)
                return <></>
            return <CategoriesContext.Consumer key={this.context[prer].id}>
                {categories => <g transform={`translate(${x}, ${y})`}>
                    <circle cx={this.radius * 2 * dx} cy={0} r={this.radius}
                            stroke={'white'} fill={categories[this.context[prer].category].color}/>
                    <text x={this.radius * 2 * dx++} y={0} dominantBaseline={'central'} textAnchor={'middle'}
                          fontSize={this.fontSize}
                          fill={categories[this.context[prer].category].whiteText ? 'white' : 'black'}>{this.context[prer].id}</text>
                </g>
                }
            </CategoriesContext.Consumer>
        }        )
    }
    render() {
        return (
            <>
                {this.renderPrers()}

            </>
        );
    }
}

Prerequisites.contextType = CoursesContext

export default Prerequisites