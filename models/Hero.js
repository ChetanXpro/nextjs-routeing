import mongoose from "mongoose";

const HeroSchema = new mongoose.Schema({
  superHero: {
    type: String,
    require: [true, "Please name hero"],
    unique: true,
    trim: true,
  },
  realName: {
    type: String,
    require: true,
    maxlength: [200, "Keep short name"],
  },
});

module.exports = mongoose.models.Hero || mongoose.model("Hero", HeroSchema);
