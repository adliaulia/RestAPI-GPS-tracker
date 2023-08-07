module.exports = app => {
    // const gps = require("../controllers/gps.controller")
    // const r = require("express").Router();

    // r.get("/", gps.findAll);
    // r.get("/:id", gps.show);
    // r.post("/", gps.create);
    // r.put("/:id", gps.update);
    // r.delete("/:id", gps.delete);

    app.use("/led", (req, res) =>{
        res.send({message: "Hello"});
    });
    // GET localhost:8000/led
}