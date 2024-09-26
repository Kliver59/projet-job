import express from "express";
import * as jobsController from "./jobs.controller.js";
import authenticateUser from "../../middlewares/auth.middleware.js";
import validate from "../../middlewares/validation.middleware.js";
import { CreateJobSchema, UpdateJobSchema } from "./jobs.schema.js";

const router = express.Router();

router.use(authenticateUser);

router
  .route("/")
  .post(validate(CreateJobSchema), jobsController.createJob)
  .get(jobsController.getAllJobs);

router
  .route("/:id")
  .get(jobsController.getJob)
  .patch(validate(UpdateJobSchema), jobsController.updateJob)
  .delete(jobsController.deleteJob);

export default router;
