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