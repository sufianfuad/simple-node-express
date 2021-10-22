const express = require('express')
const cors = require('cors')
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json())

app.get('/', (req, res) => {
    res.send('WoW, I am learn node and express')
})

const users = [
    { id: 1, name: 'Hero', email: 'hero@gmail.com' },
    { id: 2, name: 'Hero', email: 'hero@gmail.com' },
    { id: 0, name: 'Hero', email: 'hero@gmail.com' },
    { id: 3, name: 'Hero', email: 'hero@gmail.com' },
    { id: 4, name: 'Hero', email: 'hero@gmail.com' },
    { id: 5, name: 'Hero', email: 'hero@gmail.com' },
]
const fruits = [
    { id: 1, name: 'mango', email: 'hero@gmail.com' }
]
//use query parameters
app.get('/users', (req, res) => {
    const search = req.query.search;
    if (search) {
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(searchResult)
    }
    else {
        res.send(users)
    }

})

// app Method
app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser)
    console.log('hitting post', req.body);
    res.send('inside post');
})


//dynamic api
app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id]
    res.send(user);
})



//
app.get('/fruits', (req, res) => {
    res.send('mango , banana, apple aro onek kisu etc')
})
//
app.get('/fruits/mangoes/fazli', (req, res) => {
    res.send('Yummy Yummy fazli mango')
})

app.listen(port, () => {
    console.log('Listening to port', port);
})