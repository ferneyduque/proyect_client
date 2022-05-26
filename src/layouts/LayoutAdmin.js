import React from "react";
import MenuTop from "../components/MenuTop/MenuTop";
import { Layout } from "antd";
import "./LayoutAdmin.scss";

export default function LayoutAdmin(props){
    const {children} = props;
    const {Header, Content, Footer} = Layout;
    return(
        <Layout>
            <Layout className="layout-admin">
                <Header className="layout-admin__header">
                    <MenuTop></MenuTop>
                </Header>
                <Content className="layout-admin__content">
                    {children}
                </Content>
                <Footer className="layout-admin__footer">React Project 2022 - MERN React</Footer>
            </Layout>
        </Layout>
    );
}