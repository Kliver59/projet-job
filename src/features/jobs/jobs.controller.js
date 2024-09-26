import Job from "./jobs.model.js";
import { StatusCodes } from "http-status-codes";
import { NotFoundError } from "../../errors/index.js";

const createJob = async (req, res) => {
  const { company, position } = req.body;

  req.body.createdBy = req.user.userId;

  const job = await Job.create(req.body);
  res.status(StatusCodes.CREATED).json({ job });
};

const getAllJobs = async (req, res) => {
  const jobs = await Job.find({ createdBy: req.user.userId });
  res.status(StatusCodes.OK).json({ jobs, count: jobs.length });
};

const getJob = async (req, res) => {
  const { id: jobId } = req.params;
  const job = await Job.findOne({ _id: jobId, createdBy: req.user.userId });

  if (!job) {
    throw new NotFoundError(`Job avec l'id ${jobId} n'a pas été trouvé`);
  }

  res.status(StatusCodes.OK).json({ job });
};

const updateJob = async (req, res) => {
  const { id: jobId } = req.params;
  const { company, position } = req.body;

  const job = await Job.findOneAndUpdate(
    { _id: jobId, createdBy: req.user.userId },
    req.body,
    { new: true, runValidators: true }
  );

  if (!job) {
    throw new NotFoundError(`Job avec l'id ${jobId} n'a pas été trouvé`);
  }

  res.status(StatusCodes.OK).json({ job });
};

const deleteJob = async (req, res) => {
  const { id: jobId } = req.params;

  const job = await Job.findOneAndDelete({
    _id: jobId,
    createdBy: req.user.userId,
  });

  if (!job) {
    throw new NotFoundError(`Job avec l'id ${jobId} n'a pas été trouvé`);
  }

  res.status(StatusCodes.OK).json({ msg: "Job supprimé avec succès" });
};

export { createJob, getAllJobs, getJob, updateJob, deleteJob };
