const db = require("../models")
const Gps = db.gps

exports.create = (req, res) => {
    req.body.tanggal_sync = new Date(req.body.tanggal_sync)

    Gps.create(req.body)
        .then(() => res.send({message: "Data berhasil disimpan"}))
        .catch(err => res.status(500).send({message: err.message}));
}

exports.findAll = (req, res) => {
    Gps.find()
        .then(data => res.send(data))
        .catch(err => res.status(500).send({message: err.message}));
}

exports.show = (req, res) => {
    const id = req.params.id;

    Gps.findById(id)
        .then(data => res.send(data))
        .catch(err => res.status(500).send({message: err.message}));
}

exports.update = (req, res) => {
    const id = req.params.id;

    req.body.tanggal_sync = new Date(req.body.tanggal_sync)

    Gps.findByIdAndUpdate(id, req.body, {useFindAndModify: false})
        .then(data => {
            if (!data) {
                res.status(404).send({message: "Tidak dapat mengupdate data!"})
            }
            res.send({message: "Data berhasil diupdate!"})
        })
        .catch(err => res.status(500).send({message: err.message}));
}

exports.delete = (req, res) => {
    const id = req.params.id;

    Gps.findByIdAndRemove(id)
        .then(data => {
            if (!data) {
                res.status(404).send({message: "Tidak dapat menghapus data!"})
            }
            res.send({message: "Data berhasil dihapus!"})
        })
        .catch(err => res.status(500).send({message: err.message}));
}