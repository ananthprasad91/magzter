import React from "react";
import TextInput from "../common/TextInput";
import Button from "../common/Button";
import { withRouter } from "react-router-dom";

class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
        }
    }
    componentDidMount = () => {
        
    }

    handleUsernameChange = (e) => {
        this.setState({email: e.target.value})
    }
    handlePasswordChange = (e) => {
        this.setState({password: e.target.value})
    }
    redirectToRegister = () => {
        this.props.history.push("/register")
    }
    setAuthSts = () => {
        const user = JSON.parse(localStorage.getItem("user"));
        console.log("in login",user);
        if(user.email === this.state.email && user.password === this.state.password) {
            console.log("passed");
            localStorage.setItem("isAuthenticated", true);
        }
    }
    render() {
        return (
            <div class="main">
                <p class="sign" align="center">Sign in</p>
                <form class="form1">
                    <TextInput 
                        placeholder="Email"
                        onChange={this.handleUsernameChange}
                        value={this.state.email}
                    />
                    <TextInput 
                        placeholder="Password"
                        onChange={this.handlePasswordChange}
                        value={this.state.password}
                        type="password"
                    />
                    <Button 
                        btnType="btn-primary" 
                        value="Submit"
                        onClick={() => { this.setAuthSts();this.props.history.push("/dashboard")}}
                    />
                    {/* <p class="forgot" align="center">New User <a href="#">Register Here</a></p> */}
                    <Button 
                        btnType="btn-secondary" 
                        value="Register"
                        onClick={this.redirectToRegister}
                    />
                </form>
            </div>
        )
    }
}

export default withRouter(Login);