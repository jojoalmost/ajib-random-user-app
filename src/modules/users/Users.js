import React, {useState} from "react";
import api from "../../utils/api/api";
import Filter from "./components/Filter";
import {reformatUserData} from "../../utils/helper";
import Table from "./components/Table";

const Users = () => {
    const [users, setUsers] = useState([]);
    const [usersTemp, setUsersTemp] = useState([]);
    const [search, setSearch] = useState('');
    const [gender, setGender] = useState('');
    const [page, setPage] = useState(1);
    const [info, setInfo] = useState({
        page: 0,
    });
    const [isLoading, setIsLoading] = useState(false);

    const fetchData = () => {
        setIsLoading(true);
        api.get('/', {
            params: {
                results: 10,
                page,
                inc: ['cell', 'login', 'name', 'email', 'gender', 'registered'].join(','),
                ...(gender && {gender}),
            }
        }).then(res => {
            const {results, info} = res;
            const reformatUsers = reformatUserData(results);
            setUsers(reformatUsers);
            setUsersTemp(reformatUsers);
            setInfo(info);
            setPage(info.page);
        }).finally(() => {
            setIsLoading(false);
        });
    }

    React.useEffect(() => {
        fetchData();
    }, [page, gender]);


    const handleChangeGender = (gender) => {
        setGender(gender);
    }

    const handleChangeSearch = (search = '') => {
        if (search.trim()) {
            const key = search.toLowerCase();
            const filter = usersTemp.filter(user => String(user.username).toLowerCase().indexOf(key) !== -1 ||
                String(user.name).toLowerCase().indexOf(key) !== -1 ||
                String(user.email).toLowerCase().indexOf(key) !== -1);
            setUsers(filter);
        } else {
            setUsers(usersTemp)
        }
    }

    return (
        <div>
            <h1>List of users</h1>
            <Filter onChangeSearch={handleChangeSearch} onChangeGender={handleChangeGender}/>
            <div>
                <Table
                    page={info.page}
                    data={users}
                    changePage={(to) => setPage(to)}
                    isLoading={isLoading}
                />
            </div>
        </div>
    )
}

export default Users;