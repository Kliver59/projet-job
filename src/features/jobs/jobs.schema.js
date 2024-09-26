import { z } from "zod";
import { JOB_STATUS } from "../../utils/constants.js";

const CreateJobSchema = z.object({
  company: z
    .string()
    .min(1, { message: "L’entreprise est obligatoire" })
    .max(50),
  position: z.string().min(1, { message: "Le poste est obligatoire" }).max(100),
  status: z.enum([
    JOB_STATUS.PENDING,
    JOB_STATUS.INTERVIEW,
    JOB_STATUS.DECLINED,
  ]),
});

const UpdateJobSchema = CreateJobSchema.partial();

export { CreateJobSchema, UpdateJobSchema };
