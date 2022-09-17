const express = require("express");
const router = express.Router();
const {v4 : uuidv4} = require('uuid');


let users = [];

router.get('/', (req, res) => {
    res.send(users);
});

router.get('/:id', (req,res) => {
    const id = req.params.id;
    const foundUser = users.find((user) => user.id ==id);
    res.send(foundUser)
});

//Post methods to add new
router.post('/', (req,res) =>{

    const user = req.body;
    const Id = uuidv4();
    const UserId = { ...user, id: Id };
    users.push(UserId);
    res.send("New user has been added")
});

//delete user from users arry.

router.delete('/:id', (req,res) => {
    const id = req.params.id
    updateUsers = users.filter((user) => user.id !=id)
    res.json({users: updateUsers});
});
router.patch('/:id', (req,res) => {
    const id = req.params.id
    const {name,city} =req.body;
    const user = users.find((user) => user.id ==id);

    if(name) user.name = name
    if(city) user.city = city
     res.send(`users with id ${id} has been changed`);
});

module.exports = router;
