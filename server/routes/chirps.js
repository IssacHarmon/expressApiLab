const express = require('express');
let router = express.Router();
const chirpStore = require('../chirpstore');


router.get('/', (req, res) => {
    res.send(chirpStore.GetChirps())
});

router.get("/:id", (req, res) => {
    res.send(chirpStore.GetChirp(req.params.id));
})

router.post('/', (req, res) => {
    chirpStore.createChirp(req.body);
    res.sendStatus(200);
});


router.put('/:id', (req, res) => {
    let chirpObj = {
        username: req.body.username,
        message: req.body.message
    }
    chirpStore.UpdateChirp(req.params.id, chirpObj);
    
    res.sendStatus(200);
});

router.delete(':/id', (req, res) => {
    chirpStore.DeleteChirp(req.params.id);
    res.sendStatus(200);
});


module.exports = router; 