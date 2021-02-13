var express = require("express");
var router = express.Router();

const {
  subEmail,
  patchSubEmail,
  gemtEmailSub,
  deleteEmailSub,
} = require("../models/emails");

/*---------Post emails sub choice---------*/
router.post("/", async function (req, res) {
  let body = req.body;
  console.log("this is body: ", body);
  const event = await subEmail(body);
  res.json(event);
});

/*---------Patch email sub choice by User Id---------*/
router.patch("/:uid", async function (req, res) {
  let uid = req.params.uid;
  let body = req.body;
  let email = await patchSubEmail(body, uid);
  res.json({ success: true, payload: email });
});

/*---------Get all emails sub choice---------*/
router.get("/", async function (req, res) {
  let emailSub = await gemtEmailSub();
  res.json({ success: true, payload: emailSub });
});

/*---------Delete email sub choice based on given id---------*/
router.delete("/:id", async function (req, res) {
  let id = req.params.id;
  console.log("delete comment id, routes", id);
  deleteEmailSub(id);
  return res.json({ success: true });
});

module.exports = router;
