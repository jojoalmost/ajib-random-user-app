import React, {useState} from "react";
import api from "../../utils/api/api";
import styled from "styled-components";
import Button from "../../components/button/Button";
import {COLUMNS_NAME} from "../../utils/types";
import Filter from "./components/Filter";
import {reformatUserData} from "../../utils/helper";

const Users = () => {
    const [users, setUsers] = useState([]);
    const [usersTemp, setUsersTemp] = useState([]);
    const [page, setPage] = useState(1);
    const [info, setInfo] = useState({
        page: 0,
    });
    const [isLoading, setIsLoading] = useState(false);
    const [sortBy, setSortBy] = useState('');

    const fetchData = (params = {}) => {
        setIsLoading(true);
        api.get('/', {
            params: {
                results: 10,
                page,
                inc: ['cell', 'login', 'name', 'email', 'gender', 'registered'].join(','),
                ...(params.hasOwnProperty('gender') && {gender: params.gender}),
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
    }, [page]);


    const handleClickSortBy = (sortBy) => {
        console.log(sortBy);
        let sortedUser = [];
        switch (sortBy) {
            case COLUMNS_NAME.USERNAME: {
                sortedUser = users.sort((a, b) => {

                })
            }
                break;
            default: {

            }
                break;
        }
        setSortBy(sortBy);
        setUsers(sortedUser);
    }

    const handleChangeGender = (gender) => {
        const params = {
            gender,
        }
        fetchData(params);
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
                <Table>
                    <thead>
                    <tr>
                        <th>
                            <button
                                onClick={() => handleClickSortBy(COLUMNS_NAME.USERNAME)}>
                                username
                            </button>
                        </th>
                        <th>
                            <button
                                onClick={() => handleClickSortBy(COLUMNS_NAME.NAME)}>
                                name
                            </button>
                        </th>
                        <th>
                            <button
                                onClick={() => handleClickSortBy(COLUMNS_NAME.EMAIL)}>
                                email
                            </button>
                        </th>
                        <th>
                            <button
                                onClick={() => handleClickSortBy(COLUMNS_NAME.GENDER)}>
                                gender
                            </button>
                        </th>
                        <th>
                            <button onClick={() => handleClickSortBy(COLUMNS_NAME.REGISTERED)}>
                                registered
                            </button>
                        </th>
                    </tr>
                    </thead>
                    {isLoading ? (
                        <tbody>
                        <tr>
                            <td colSpan={5}>Loading...</td>
                        </tr>
                        </tbody>
                    ) : (
                        <tbody>
                        {users.length > 0 ? users.map(user => (
                            <tr key={user.cell}>
                                <td>{user.login.username}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.gender}</td>
                                <td>{user.registered}</td>
                            </tr>
                        )) : (
                            <tr>
                                <td colSpan={5}>No row match</td>
                            </tr>
                        )}
                        </tbody>
                    )}
                    <tfoot>
                    <tr>
                        <td colSpan={4} className="info">
                            Page : {info.page}
                        </td>
                        <td className="action">
                            <Button onClick={() => setPage(page - 1)}
                                    disabled={page === 1 || users.length === 0}>
                                Prev
                            </Button>
                            <Button onClick={() => setPage(page + 1)} disabled={users.length === 0}>
                                Next
                            </Button>
                        </td>
                    </tr>
                    </tfoot>
                </Table>

            </div>
        </div>
    )
}

const Table = styled('table')`
  width: 100%;
  margin-bottom: 1rem;
  background-color: transparent;
  border-collapse: collapse;

  thead {
    th {
      border-bottom: 2px solid #dee2e6;
      vertical-align: middle;
    }
  }

  tfoot {
    td {
      &.info {
        font-weight: 700;
      }

      &.action {
        display: flex;
        gap: 8px;
        justify-content: right;
      }
    }
  }

  td, th {
    padding: 0.75rem;
    border-top: 1px solid #dee2e6;
    vertical-align: middle;
  }
`

export default Users;