const db = require("../models");
const Message = db.messages;

let nameValidator = /^[a-zA-Z0-9_ ]+$/gi;
let messageValidator = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g;

exports.create = (req, res) => {

    if (!req.body.name) {
        res.status(400).send({message: "User name can not be empty!"});
        return;
    }

    if (!nameValidator.test(req.body.name)) {
        res.status(400).send({message: "User name could contain only latin letters, numbers and underscore symbol"});
        return;
    }

    if (!req.body.message) {
        res.status(400).send({message: "User message can not be empty!"});
        return;
    }

    if (req.body.message.match(messageValidator)) {
        res.status(400).send({message: "User message could not contain hypelinks!"});
        return;
    }

    const message = new Message({
        name: req.body.name,
        message: req.body.message,
    });

    message
        .save(message)
        .then(data => {
            res.status(201).send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while adding the message."
            });
        });
};

exports.findAll = (req, res) => {
    Message.find().sort({createdAt: -1})
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving tutorials."
            });
        });
};