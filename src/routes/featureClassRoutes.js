import { Router } from "express";
import { renderMap,renderFeatures} from "../controllers/featureClassController.js";

const router = Router();

router.get("/renderMap", renderMap);
router.get("/renderFeatures", renderFeatures);
// router.post('/drawPoints', drawPoints);
// router.post('/drawLines', drawLines);


export default router;
