const { Tag } = require('../tables');

const tagData = [
  {
    name: 'cricket',
  },
  {
    name: 'football',
  },
  {
    name: 'rock music',
  },
  {
    name: 'banana',
  },
  {
    name: 'pop culture',
  },
];

const TagsSeed = () => Tag.bulkCreate(tagData);

module.exports = TagsSeed;
