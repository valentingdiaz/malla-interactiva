import { Component } from "react";
import CoursesContext from "../coursesContext";
import CategoriesContext from "../categoriesContext";
import {PrerequisitesProps} from "../types";



class Prerequisites extends Component<PrerequisitesProps> {
    // Default props
    // {
    //     x: 12,
    //     y: 12,
    //     abbrev: "IMI-101",
    //     height: 24,
    //     width: 90
    // }
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
            if (this.context[prer] == undefined)
                return <></>
            return <CategoriesContext.Consumer>
                {categories => <>
                    <circle key={this.context[prer].id} cx={x + this.radius * 2 * dx} cy={y} r={this.radius}
                            stroke={'white'} fill={categories[this.context[prer].category].color}/>
                    <text x={x + this.radius * 2 * dx++} y={y} dominantBaseline={'central'} textAnchor={'middle'}
                          fontSize={this.fontSize}
                          fill={categories[this.context[prer].category].whiteText ? 'white' : 'black'}>{this.context[prer].id}</text>
                </>
                }
            </CategoriesContext.Consumer>
        }        )
    }
    render() {
        const {x = 14, y = 12, abbrev = "IMI-101", height = 24, width = 90} = this.props
        return (
            <>
                {this.renderPrers()}

            </>
        );
    }
}

Prerequisites.contextType = CoursesContext

export default Prerequisites