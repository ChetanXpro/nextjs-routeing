import dbConnect from "db/db";
import Hero from "../../../../models/Hero";

dbConnect()

export default async (req, res) => {
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        const heros = await Hero.find({});
        res.status(200).json({ success: true, heros });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    case "POST":
      try {
        const hero = await Hero.create(req.body);
        res.status(200).json({ success: true, hero });
      } catch (error) {}
      break;
  }
};
