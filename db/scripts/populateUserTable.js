const { subEmail } = require("../../models/emails");

const userIds = [
  {
    sub: true,
    uid: null,
  },
  {
    sub: true,
    uid: 76,
  },
  {
    sub: false,
    uid: 77,
  },
  {
    sub: true,
    uid: 3,
  },
  {
    sub: true,
    uid: 2,
  },
  {
    sub: true,
    uid: 1,
  },
  {
    sub: true,
    uid: 11,
  },
  {
    sub: true,
    uid: 20,
  },
  {
    sub: true,
    uid: 4,
  },
  {
    sub: true,
    uid: 15,
  },
  {
    sub: true,
    uid: 17,
  },
  {
    sub: true,
    uid: 18,
  },
  {
    sub: true,
    uid: 19,
  },
  {
    sub: true,
    uid: 20,
  },
  {
    sub: true,
    uid: 21,
  },
  {
    sub: true,
    uid: 22,
  },
  {
    sub: true,
    uid: 23,
  },
  {
    sub: true,
    uid: 24,
  },
  {
    sub: true,
    uid: 25,
  },
  {
    sub: true,
    uid: 26,
  },
  {
    sub: true,
    uid: 27,
  },
  {
    sub: true,
    uid: 28,
  },
  {
    sub: true,
    uid: 29,
  },
  {
    sub: true,
    uid: 30,
  },
  {
    sub: true,
    uid: 31,
  },
  {
    sub: true,
    uid: 33,
  },
  {
    sub: true,
    uid: 35,
  },
  {
    sub: true,
    uid: 36,
  },
  {
    sub: true,
    uid: 37,
  },
  {
    sub: true,
    uid: 39,
  },
  {
    sub: true,
    uid: 41,
  },
  {
    sub: true,
    uid: 43,
  },
  {
    sub: true,
    uid: 44,
  },
  {
    sub: true,
    uid: 45,
  },
  {
    sub: true,
    uid: 51,
  },
  {
    sub: true,
    uid: 68,
  },
  {
    sub: true,
    uid: 72,
  },
  {
    sub: true,
    uid: 74,
  },
];

userIds.map(async (id) => {
  await subEmail({ sub: true, uid: id.id });
});
