import React, {useState} from "react";
import api from "../../utils/api/api";
import styled from "styled-components";

const Users = () => {
    const [dataLength, setDataLength] = useState(10);
    const [users, setUsers] = useState([]);
    const [page, setPage] = useState(1);
    const [info, setInfo] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [sortBy, setSortBy] = useState('username');

    const fetchData = () => {
        setIsLoading(true);
        api.get('/', {
            params: {
                results: dataLength,
                page,
                inc: ['cell', 'login', 'name', 'email', 'gender', 'registered'].join(','),
            }
        }).then(res => {
            const {results, info} = res;
            setUsers(results);
            setInfo(info);
            setPage(info.page);
        }).finally(() => {
            setIsLoading(false);
        });
    }

    React.useEffect(() => {
        fetchData();
    }, [page]);

    const getUserName = (name) => {
        const {title, ...other} = name;
        return Object.values(other).join(' ');
    }

    return (
        <div>
            <h1>List of users</h1>
            {!isLoading ? (
                <div>
                    <Table>
                        <thead>
                        <tr>
                            <th>
                                <div>username</div>
                                <div>
                                    <button>asc</button>
                                    <button>desc</button>
                                </div>
                            </th>
                            <th>
                                <div>name</div>
                            </th>
                            <th>
                                <div>email</div>
                            </th>
                            <th>
                                <div>gender</div>
                            </th>
                            <th>
                                <div>registered</div>
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                        {users.map((user) => (
                            <tr key={user.cell}>
                                <td>{user.login.username}</td>
                                <td>{getUserName(user.name)}</td>
                                <td>{user.email}</td>
                                <td>{user.gender}</td>
                                <td>{user.registered.date}</td>
                            </tr>
                        ))}
                        </tbody>
                    </Table>
                    <div>
                        <button onClick={() => setPage(page - 1)} disabled={page === 1}>Prev</button>
                        <button onClick={() => setPage(page + 1)}>Next</button>
                    </div>
                </div>
            ) : (
                <div>Loading ...</div>
            )}
        </div>
    )
}

const Table = styled('table')`
  width: 100%;

  td {
    text-transform: capitalize;
  }
`

export default Users;