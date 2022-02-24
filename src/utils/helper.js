const getUserName = (name) => {
    const {title, ...other} = name;
    return Object.values(other).join(' ');
}

export const reformatUserData = (users = []) => users.map(user => ({
    ...user,
    registered: new Date(user.registered.date).toLocaleString(),
    name: getUserName(user.name),
}));