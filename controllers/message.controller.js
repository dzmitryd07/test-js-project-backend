const db = require("../models");
const Message = db.messages;


exports.create = async (req, res) => {

    const {name, message} = req.body;
    const nameValidator = /^[a-zA-Z0-9_]+$/gi;
    const messageValidator = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g;
    let validationError = false;

    if (!name) {
        res.status(400).send({message: "User name can not be empty!"});
        validationError = true;
    }

    if (!message) {
        res.status(400).send({message: "User message can not be empty!"});
        validationError = true;
    }

    if (!nameValidator.test(name)) {
        res.status(400).send({message: "User name could contain only latin letters, numbers and underscore symbol"});
        validationError = true;
    }

    if (message.match(messageValidator)) {
        res.status(400).send({message: "User message could not contain hypelinks!"});
        validationError = true;
    }

    if (!validationError) {
        const new_message = new Message({
            name: req.body.name,
            message: req.body.message,
        });

        new_message
            .save(new_message)
            .then(data => {
                res.status(201).send(data);
            })
    }
};

exports.findAll = (req, res) => {
    Message.find().sort({createdAt: -1})
        .then(data => {
            res.send(data);
        })
};