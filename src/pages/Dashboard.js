import React from "react";
import { withRouter } from "react-router-dom";

class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
        }
    }
    render() {
        return (
            <div class="wrapper">
                <header>Todo App</header>
            </div>
        )
    }
}

export default withRouter(Login);