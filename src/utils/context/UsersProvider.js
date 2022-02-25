/* eslint-disable */
import React, {createContext, useContext, useState} from 'react';
import api from "../api/api";
import {filterUserData, reformatUserData} from "../helper";

export const UserListContext = createContext();

const UserListProvider = ({children}) => {
    const [users, setUsers] = useState([]);
    const [usersTemp, setUsersTemp] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [search, setSearch] = useState('');
    const [gender, setGender] = useState('');
    const [page, setPage] = useState(1);
    const [info, setInfo] = useState({
        page: 0,
    });

    let timer;

    const fetchData = () => {
        setIsLoading(true);
        api.get('/', {
            params: {
                results: 10,
                page,
                inc: ['cell', 'login', 'name', 'email', 'gender', 'registered'].join(','),
                ...(gender && {gender}),
                ...(search && {query: search}),
            }
        }).then(res => {
                const {results, info} = res;
                const reformatUsers = reformatUserData(results);
                setUsers(reformatUsers);
                setUsersTemp(reformatUsers);
                setInfo(info);
            }
        ).finally(() => {
            setIsLoading(false);
        });
    }

    React.useEffect(() => {
        fetchData();
    }, [page, gender]);


    const debounceSearchChange = (search = '') => {
        clearTimeout(timer);
        timer = setTimeout(() => handleChangeSearch(search), 1000);
    }

    const handleChangeSearch = (search = '') => {
        if (search.trim() !== '') {
            setIsLoading(true);
            const filter = filterUserData(search, usersTemp);
            setIsLoading(false);
            setUsers(filter);
            setSearch(search);
        } else {
            setUsers(usersTemp)
        }
    }

    const handleChangeGender = (gender) => {
        setGender(gender);
    }

    const handleChangePage = (page) => {
        setPage(page)
    }

    return (
        <UserListContext.Provider
            value={{
                users,
                isLoading,
                info,
                search,
                onSearch: (query) => handleChangeSearch(query),
                onFilterGender: (gender) => handleChangeGender(gender),
                onChangePage: (page) => handleChangePage(page),
            }
            }>
            {children}
        </UserListContext.Provider>
    );
};

export default UserListProvider;

export const useUserList = () => useContext(UserListContext);