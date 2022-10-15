const express = require("express");

const OrganizationModel = require("../modals/Organization");

const organizationController = express.Router();

organizationController.post("/create", async (req, res) => {
  const { culture, seasons, crops, userId } = req.body;
  const new_organization = new OrganizationModel({
    culture,
    seasons,
    crops,
    userId,
  });
  await new_organization.save();
  res.send({ message: "Organization Done ", new_organization });
});

organizationController.get("/", async (req, res) => {
  const { userId } = req.body;
  const Data = await OrganizationModel.find({ userId });
  res.send(Data);
});



module.exports = organizationController;