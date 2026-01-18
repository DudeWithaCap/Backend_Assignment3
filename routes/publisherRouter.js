const express = require('express');
const router = express.Router();
const Publisher = require('../models/publisher');

router.post('/', async (req, res) => {
    try {
        const newPublisher = new Publisher(req.body);
        const savedPublisher = await newPublisher.save();
        res.status(201).json(savedPublisher);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

router.get('/', async (req, res) => {
    try {
        const publishers = await Publisher.find();
        res.json(publishers);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const publisher = await Publisher.findById(req.params.id);
        if (!publisher) {
            return res.status(404).json({ message: 'Publisher not found' });
        }
        res.json(publisher);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const updatedPublisher = await Publisher.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedPublisher) {
            return res.status(404).json({ message: 'Publisher not found' });
        }
        res.json(updatedPublisher);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const deletedPublisher = await Publisher.findByIdAndDelete(req.params.id);
        if (!deletedPublisher) {
            return res.status(404).json({ message: 'Publisher not found' });
        }
        res.json({ message: 'Publisher deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;