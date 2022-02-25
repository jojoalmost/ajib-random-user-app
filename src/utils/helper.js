const getFullName = (name) => {
    const {title, ...other} = name;
    return Object.values(other).join(' ');
}

export const formatDate = date => {
    return new Date(date).toLocaleString("id-ID");
}

export const reformatUserData = (users = []) => users.map(user => ({
    ...user,
    registered: user.registered.date,
    name: getFullName(user.name),
    username: user.login.username,
}));

export const filterUserData = (key = '', users = []) => {
    const query = key.toLocaleLowerCase();
    return users.filter(user =>
        String(user.username).toLowerCase().indexOf(query) !== -1 ||
        String(user.name).toLowerCase().indexOf(query) !== -1 ||
        String(user.email).toLowerCase().indexOf(query) !== -1);
}