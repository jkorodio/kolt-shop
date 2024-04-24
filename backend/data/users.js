import bcrypt from 'bcryptjs'

const users = [
    {
        name: 'Admin User',
        email: 'admin@email.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true
    },
    {
        name: 'Kieth Orodio',
        email: 'kieth@email.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: false
    },
    {
        name: 'Loraine Templo',
        email: 'loraine@email.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: false
    },
]

export default users