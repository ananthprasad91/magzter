import React from "react";
import TextInput from "../common/TextInput";
import Button from "../common/Button";
import { withRouter } from "react-router-dom";

class Register extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            name: '',
            email: '',
            password: '',
        }
    }
    handleChangeName = (e) => {
        this.setState({name: e.target.value})
    }
    handleChangeEmail = (e) => {
        this.setState({email: e.target.value})
    }
    handleChangePwd = (e) => {
        this.setState({password: e.target.value})
    }
    redirectToLogin = () => {
        localStorage.setItem("user", JSON.stringify({
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
        }))
        this.props.history.push("/")
    }
    render() {
        return (
            <div class="main">
                <p class="sign" align="center">Register</p>
                <form class="form1">
                    <TextInput
                        placeholder="Name"
                        onChange={this.handleChangeName}
                        value={this.state.name}
                    />
                    <TextInput
                        placeholder="Email"
                        onChange={this.handleChangeEmail}
                        value={this.state.email}
                    />
                    <TextInput
                        placeholder="Password"
                        onChange={this.handleChangePwd}
                        value={this.state.password}
                        type="password"
                    />
                    <Button
                        btnType="btn-primary"
                        value="Submit"
                        onClick={this.redirectToLogin}
                    />
                    <Button 
                        btnType="btn-secondary" 
                        value="Cancel"
                        onClick={this.redirectToLogin}
                    />
                </form>
            </div>
        )
    }
}
export default withRouter(Register);