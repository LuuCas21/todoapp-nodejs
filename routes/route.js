const express = require('express');

const router = express.Router();

// IMPORTS
const todoModel = require('../models/model');

module.exports = router;

router.route('/')
.get(async (req, res) => {
    const data = await todoModel.find();
    res.status(200).json({
        task: data
    });
})

router.route('/')
.post(async (req, res) => {
    await todoModel.create({ name: req.body.task });
    res.status(201).json({ msg: 'task created' });
})

router.route('/:id')
.patch(async (req, res) => {
    await todoModel.findByIdAndUpdate(req.params.id, { name: req.body.task });
    res.json({ msg: 'task edited' });
})

router.route('/:id')
.delete(async (req, res) => {
    await todoModel.findByIdAndDelete(req.params.id);
    res.status(204).json({ msg: 'task deleted' });
})