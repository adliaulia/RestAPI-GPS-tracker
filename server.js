const express = require("express")
const cors = require("cors")
const db = require("./app/models")
const app = express();
require('dotenv').config()

const corsOptions = {
    origin: "*"
};

// register cors middleware
app.use(cors(corsOptions));
app.use(express.json());

// koneksi ke DB
const mongooseConfig = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}
db.mongoose.connect(db.url, mongooseConfig)
    .then(() => console.log("database connected"))
    .catch(err => {
        console.log(`gagal connect ${err.message}`);
        process.exit();
    });

// memanggil routes gps
require("./app/routes/gps.routes")(app);

// memanggil routes lain (led)
require("./app/routes/led.routes")(app);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));