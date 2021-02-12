import {Component} from "react";
import {CategoryInfoProps, OptionalCategoryInfoProps} from "../types";
import CategoriesContext from "../categoriesContext";
import {Card} from "react-bootstrap"

export default class CategoryInfo extends Component<CategoryInfoProps> {
    static defaultProps: OptionalCategoryInfoProps = {
        onClick: () => {},
    }

    render() {
        const {name, color} = this.props.category
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
