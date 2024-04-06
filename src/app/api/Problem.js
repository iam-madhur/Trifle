// pages/api/Problems.js

import dbConnect from '../../db/connect';
import Problem from '../model/Problem';
import generatePseudonym from '../../utils/generatePseudonym';

export default async function handler(req, res) {
    console.log('Received request at /api/Problems:', req.method);
  // Connect to the database
  await dbConnect();

  if (req.method === 'POST') {
    try {
      const { content } = req.body;
      const pseudonym = generatePseudonym(); // Generate pseudonym
      const problem = await Problem.create({ content, pseudonym });
      res.status(201).json(problem);
    } catch (error) {
      console.error('Error creating problem:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
