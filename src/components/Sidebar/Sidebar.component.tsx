import React from "react";
import { User, Form } from "../index";

import styles from "./Sidebar.module.css"

import UserData from "~/data/userData.json"

const Sidebar = () => {

    const handleLogout = () => {
        console.log("logout");
    }

    return (
        <div className={styles.root}>
            <div className={styles.top}>
                <User name={UserData.name} email={UserData.email} image={UserData.url} logout={handleLogout}/>
            </div>
            <div className={styles.center}>
                <Form />
            </div>
        </div>
    )
}

export default Sidebar;