const express = require("express");
const cors = require("cors");
const db = require("./models")
const app = express();
const path = require('path')

app.use(express.json())
app.use(express.static(path.join('build')));

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

var corsOptions = {
    origin: "*"
};

app.use(cors(corsOptions));

require("./routes/message.routes")(app);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
//
