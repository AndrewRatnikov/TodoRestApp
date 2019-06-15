import { Router } from "express";

const router = Router();

/* GET home page. */
router.get("/", function(req, res, next) {
  res.status(200).json({ working: true });
});

router.post("/", (request, response) => {
  response.status(200).json(request.body);
});

export default router;
