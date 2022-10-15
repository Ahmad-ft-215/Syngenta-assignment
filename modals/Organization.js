const mongoose = require("mongoose");

const organizationSchema = new mongoose.Schema({
  culture: { type: String, required: true },
  seasons: { type: String, required: true },
  crops: { type: String, required: true },
  userId: { type: String, required: true }
});

const OrganizationModel = mongoose.model("note", organizationSchema);

module.exports = OrganizationModel;
