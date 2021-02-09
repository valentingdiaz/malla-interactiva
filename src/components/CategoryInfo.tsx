import {Component} from "react";
import {CategoryInfoProps, CategoryInfoState} from "../types";
import CategoriesContext from "../categoriesContext";
import {Card} from "react-bootstrap"

export default class CategoryInfo extends Component<CategoryInfoProps, CategoryInfoState> {
    constructor(props: CategoryInfoProps) {
        super(props);

        this.state = {
            name: "Sin categoría",
            color: "#000"
        }
    }

    componentDidMount() {
        const category = this.context[this.props.category]
        if( typeof category === 'object')
            this.setState({name: category.name, color: category.color})
    }

    componentDidUpdate(prevProps: Readonly<CategoryInfoProps>, prevState: Readonly<CategoryInfoState>, snapshot?: any) {
        const {name, color} = this.context[this.props.category]

        if (name !== this.state.name || color !== this.state.color)
            this.setState({name, color})
        }



    render() {
        const {name, color} = this.state
        return (
            <div className={"p-2"}>
                <Card className={'d-flex flex-row '}>
                    <div className={"rounded-left"} style={{ width: 50, backgroundColor: color}} />
                    <Card.Body className={'flex-grow-0 p-2'} >
                        <p className={'m-0'}>{name}</p>
                    </Card.Body>
                </Card>
            </div>



        );
    }
}

CategoryInfo.contextType = CategoriesContext