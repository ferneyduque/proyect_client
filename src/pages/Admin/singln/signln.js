import React from "react";
import { Layout, Tabs } from "antd";
import Login from "../../../components/AdminComponents/Login";
import Register from "../../../components/AdminComponents/Register";
import Logo from "../../../assets/png/logobanco.png";
import "./SigIn.scss";

export default function SingIn(){
  const { Content } = Layout;
  const { TabPane } = Tabs;
    return(

        <div className="form">
        <form>
          <h1 className="sign-in__content-logo">
            <img src={Logo} alt=""/>
          </h1>
          <div className="input-container">
            <label>Username </label>
            <input type="text" name="uname" required />
          </div>
          <div className="input-container">
            <label>Password </label>
            <input type="password" name="pass" required />
          </div>
          <div className="button-container">
            <input type="submit" />
          </div>
        </form>
      </div>
    )
}