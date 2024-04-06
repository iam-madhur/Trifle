// utils/generatePseudonym.js
const faker = require('faker');

function generatePseudonym() {
  return faker.internet.userName();
}

module.exports = generatePseudonym;
