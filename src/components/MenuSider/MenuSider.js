import React from "react";
import { Link } from "react-router-dom";
import { Layout, Menu } from "antd";
import {HomeOutlined, MenuOutlined} from "@ant-design/icons"
import "./MenuSider.scss";

export default function MenuSider(props){
    const {menuCollapsed} = props;
    const { Sider} = Layout;

    return(
        <Sider className="admin-sider" collapsed={menuCollapsed}>
            <Menu theme="dark" mode='inline' defaultSelectedKeys={["/admin"]}>
                <Menu.Item key="1">
                    <Link to={"/admin"}>
                        <HomeOutlined/>
                        <span className="nav-text">HOME</span>
                    </Link>
                </Menu.Item>
                <Menu.Item key="2">
                    <Link to={"/admin/menu-web"}>
                        <MenuOutlined/>
                        <span className="nav-text">Menu Web</span>
                    </Link>
                </Menu.Item>
            </Menu>
        </Sider>
    );
}