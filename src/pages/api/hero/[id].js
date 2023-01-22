import dbConnect from "db/db";
import Hero from "../../../../models/Hero";
dbConnect();
export default async (req, res) => {
  const {
    method,
    query: { id },
  } = req;

  switch (method) {
    case "GET":
      try {
        const heros = await Hero.findById(id);
        if (heros) {
          res.status(200).json({ success: true, heros });
        }
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    case "PUT":
      try {
        const hero = await Hero.findByIdAndUpdate(id, req.body);
        res.status(200).json({ success: true });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    case "DELETE":
      try {
        const hero = await Hero.deleteOne({ _id: id });
        res.status(200).json({ success: true });
      } catch (error) {
        res.status(400).json({ success: false });
      }
  }
};
