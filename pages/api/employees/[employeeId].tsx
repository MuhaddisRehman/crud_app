// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import connectMongo from "@/database/conn";
import {
  deleteEmployee,
  getEmployee,
  putEmployee,
} from "@/database/controller";
type Data = {
  name?: string;
  method?: string;
  error?: string | unknown;
  user?: string;
  employee?: string;
  employees?: any[];
  data?: any;
  formData?: any;
};
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  connectMongo().catch(() => {
    res.status(405).json({ error: "Error in connection" });
  });
  // type of request

  const { method } = req;
  switch (method) {
    case "GET":
      getEmployee(req, res);
      break;
    case "PUT":
      putEmployee(req, res);
      break;
    case "DELETE":
      deleteEmployee(req, res);
      break;
    default:
      res.setHeader("Allow", ["GET", "POST", "PUT", "DELETE"]);
      res.status(405).end(`${method} Method Not Allowed.`);
      break;
  }
}
