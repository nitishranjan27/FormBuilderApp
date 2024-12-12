const express = require('express');
const router = express.Router();
const upload = require('../middleware/upload');
const Form = require('../models/Form');

// Create a new form
router.post('/create',  upload.fields([{ name: 'headerImage' }, { name: 'questions' }]), async (req, res) => {
    try {
        const { title, questions } = req.body;
        const headerImage = req.files['headerImage'] ? req.files['headerImage'][0].filename : null;
    
        const parsedQuestions = JSON.parse(questions);
        const questionsWithImages = parsedQuestions.map((q, index) => ({
          ...q,
          image: req.files[`questions[${index}].image`] ? req.files[`questions[${index}].image`][0].filename : null,
        }));
    
        const form = new Form({ title, headerImage, questions: questionsWithImages });
        await form.save();
    
        res.status(201).json({ message: 'Form created successfully', form });    
    } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get a form by ID
router.get('/:id', async (req, res) => {
  try {
    const form = await Form.findById(req.params.id);
    if (!form) return res.status(404).json({ message: 'Form not found' });
    res.json(form);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Submit a response to a form
router.post('/:id/submit', async (req, res) => {
  try {
    const form = await Form.findById(req.params.id);
    if (!form) return res.status(404).json({ message: 'Form not found' });

    form.responses.push({ answers: req.body.answers });
    await form.save();
    res.json({ message: 'Response submitted successfully', form });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;