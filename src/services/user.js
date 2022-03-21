const User = {
    users: {},
    create(username, password, data = {}) {
        User.users[username] = {username, password, ...data};
    },
    verify(username, password) {
        return User.users[username].password == password
    },
    get(username) {
        return {...User.users[username], password: undefined};
    },
    changePassword(username, newPassword) {
        User.users[username].password = newPassword;
    } 
}


User.users['Vardenis'] = {username: 'Vardenis', password: 'pavardenis'};
User.users['user'] = {username: 'user', password: 'user'};

export default User;