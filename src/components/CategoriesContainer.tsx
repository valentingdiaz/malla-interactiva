import {Component} from "react";
import CategoriesContext from "../categoriesContext";
import {CategoriesContainerProps, CategoriesContainerState} from "../types";
import {CategoryData} from "../interfaces";
import CategoryInfo from "./CategoryInfo";

export default class CategoriesContainer extends Component<CategoriesContainerProps, CategoriesContainerState> {

    constructor(props: CategoriesContainerProps) {
        super(props);

        this.state = {
            categories: []
        }
    }

    componentDidMount() {
        const categories = Object.keys(this.context)

        this.setState({categories})
    }

    componentDidUpdate(prevProps: Readonly<CategoriesContainerProps>, prevState: Readonly<CategoriesContainerState>, snapshot?: any) {
        const categories = Object.keys(this.context)
        const stateCategories = this.state.categories
        if (categories.length === stateCategories.length){
            for (let i = 0; i < categories.length; i++) {
                if (categories[i] !== stateCategories[i])
                    this.setState({categories})
            }
        } else
            this.setState({categories})
    }

    render() {
        const categories = this.state.categories
        return (
            <div className={"d-flex flex-column flex-md-row flex-wrap justify-content-left justify-content-md-center p-3"}>
                {categories.map((category) =>
                <CategoryInfo category={category} key={category}/>
                )}
            </div>
        );
    }
}

CategoriesContainer.contextType = CategoriesContext