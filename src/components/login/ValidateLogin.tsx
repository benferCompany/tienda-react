import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import Login from "./Login";
import React from "react";
import Connected from "./connected/connected";

const ValidateLogin = () => {
    const {auth } = useContext(AuthContext);

    if (auth) {
        return <Connected />

    }
    return <Login />


}

export default ValidateLogin;