import React, {Fragment} from "react"
import Input from "./components/input"
import Button from "./components/button"

class Search extends React.Component {
    constructor(){
        super();
        this.state = {
            input: ''
        }
    }

    handleChange = (value) => {
        this.setState({input: value})
    }

    render = () => {
        const {input} = this.state;
        const {search} = this.props;
        return (
            <Fragment>
                <Input onChange={event => this.handleChange(event.target.value)}></Input>
                <Button search={()=> search(input)} />
            </Fragment>
        )
    }
}

export default Search;