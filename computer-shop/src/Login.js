import React from "react";
import { Input } from "antd";
function Login(){

    return(
        <div className="login">
            <div className="login__container">
                <h1> Sign In </h1>
                <form>
                    <h5> Email Address </h5>
                    <Input type ="email"/>
                </form>
            </div>
        </div>

    );
} 

export default Login;