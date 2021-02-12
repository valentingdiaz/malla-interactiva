import { Component } from "react";
import CoursesContext from "../coursesContext";
import CategoriesContext from "../categoriesContext";
import {OptionalPrerequisitesProps, PrerequisitesProps} from "../types";



class Prerequisites extends Component<PrerequisitesProps> {
    static defaultProps: OptionalPrerequisitesProps = {
        x: 12,
        y: 12,
        width: 120 * 0.7,
        height: 24,
        categories: {},
        custom: false
    }

    private radius: number
    private fontSize: number

    constructor(props:PrerequisitesProps) {
        super(props);
        this.radius = 10
        this.fontSize = 12
    }


    render() {
        const {x, y, prers} = this.props
        if (prers.length > 4){
            this.radius = 8
            this.fontSize = 10
        } else {
            this.radius = 10
            this.fontSize = 12
        }
        let dx = 0
        if (this.props.custom) {
            let { categories } = this.props
            return this.props.prers.map(prer =>
                <g transform={`translate(${x}, ${y})`} key={this.context[prer].id}>
                    <circle cx={this.radius * 2 * dx} cy={0} r={this.radius} stroke={'white'} fill={categories[prer].color}/>
                    <text x={this.radius * 2 * dx++} y={0} dominantBaseline={'central'} textAnchor={'middle'} fontSize={this.fontSize} fill={categories[prer].whiteText ? 'white' : 'black'}>{categories[prer].id}</text>
                </g>
            )
        }
        return (
            <CategoriesContext.Consumer>
                {categories => prers.map((prer: string) =>
                    <g transform={`translate(${x}, ${y})`} key={this.context[prer].id}>
                        <circle cx={this.radius * 2 * dx} cy={0} r={this.radius} stroke={'white'} fill={categories[this.context[prer].category].color}/>
                        <text x={this.radius * 2 * dx++} y={0} dominantBaseline={'central'} textAnchor={'middle'} fontSize={this.fontSize} fill={categories[this.context[prer].category].whiteText ? 'white' : 'black'}>{this.context[prer].id}</text>
                    </g>
                )}
            </CategoriesContext.Consumer>
        );
    }
}

Prerequisites.contextType = CoursesContext

export default Prerequisites