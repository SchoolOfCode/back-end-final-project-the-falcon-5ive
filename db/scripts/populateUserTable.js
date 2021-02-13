const { subEmail } = require("../../models/emails");

const userIds = [
  {
    id: 15,
  },
  {
    id: 17,
  },
  {
    id: 19,
  },
  {
    id: 18,
  },
  {
    id: 20,
  },
  {
    id: 22,
  },
  {
    id: 21,
  },
  {
    id: 25,
  },
  {
    id: 23,
  },
  {
    id: 4,
  },
  {
    id: 24,
  },
  {
    id: 27,
  },
  {
    id: 29,
  },
  {
    id: 28,
  },
  {
    id: 26,
  },
  {
    id: 30,
  },
  {
    id: 31,
  },
  {
    id: 39,
  },
  {
    id: 33,
  },
  {
    id: 36,
  },
  {
    id: 37,
  },
  {
    id: 44,
  },
  {
    id: 35,
  },
  {
    id: 41,
  },
  {
    id: 43,
  },
  {
    id: 45,
  },
  {
    id: 51,
  },
  {
    id: 72,
  },
  {
    id: 68,
  },
  {
    id: 74,
  },
];

userIds.map(async (id) => {
  await subEmail({ sub: true, uid: id.id });
});
