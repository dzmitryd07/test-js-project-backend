const express = require("express");
const cors = require("cors");
const db = require("./models")
const app = express();

const path = require('path')
const PORT = process.env.PORT || 3001;
var corsOptions = {
    origin: "*"
};

app.use(express.json())
app.use(express.static(path.join('build')));
app.use(cors(corsOptions));

db.mongoose
    .connect(db.url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log("Connected to the database!");
    })
    .catch(err => {
        console.log("Cannot connect to the database!", err);
        process.exit();
    });

require("./routes/message.routes")(app);

app.get("/", (req, res) => {
    res.json({message: "Welcome to server part"});
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
