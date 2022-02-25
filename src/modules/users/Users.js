/* eslint-disable */
import React from "react";
import {Filter, Table} from "./components";

const Users = () => {
    return (
        <div>
            <h1>List of users</h1>
            <Filter/>
            <div>
                <Table />
            </div>
        </div>
    )
}

export default Users;