// pages/new-problem.js (or wherever you handle new problem creation)
const Problem = require('../models/Problem');
const generatePseudonym = require('../utils/generatePseudonym');

// Handle POST request to create a new problem
async function createProblem(req, res) {
  const { content } = req.body;
  const pseudonym = generatePseudonym();

  try {
    const problem = await Problem.create({ content, pseudonym });
    res.status(201).json(problem);
  } catch (error) {
    console.error('Error creating problem:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}

module.exports = createProblem;
