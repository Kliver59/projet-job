import { z } from "zod";

const RegisterUserSchema = z.object({
  name: z
    .string()
    .min(3, { message: "doit avoir minimum 3 caractères" })
    .max(50, { message: "doit avoir maximum 50 caractères" }),
  email: z.string().email({ message: "Email invalide " }),
  password: z
    .string()
    .trim()
    .min(6, { message: "doit avoir au minimum 5 caractères" }),
});

const LoginUserSchema = z.object({
  email: z.string().email({ message: "Email invalide " }),
  password: z.string().trim(),
});

export { RegisterUserSchema, LoginUserSchema };
