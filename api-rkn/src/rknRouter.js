const express = require('express');

const Animes = require('./animeModel');
const router = express.Router();
router.use(express.json());

router.get('/', async (req, res) => {
    const animes = await Animes.findAll();
    res.send(animes);
});

router.get('/:id', async (req, res) => {
    const anime = await Animes.findByPk(req.params.id);
    res.send(anime);
});

router.post('/', async (req, res) => {
    const anime = await Animes.create(req.body);
    res.send(anime);
})

router.put('/:id', async (req, res) => {
    let anime = await Animes.findByPk(req.params.id);
    anime.nota = req.body.nota;

    anime = await anime.save(anime);

    res.send(anime);
})

router.delete('/:id', async (req, res) => {
    let anime = await Animes.findByPk(req.params.id);
    anime.destroy();

    res.status(204).send();
})

module.exports = router;