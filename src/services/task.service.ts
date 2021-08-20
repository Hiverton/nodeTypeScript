import { Request, Response } from "express";
import TaskModel, { Itask } from "../models/task.model";

export default class TaskService {
    public async findAll (req: Request, res: Response) {
        const tasks: Array<Itask> = await TaskModel.find({});
        return res.json({ tasks })
    }

    public async create (req: Request, res: Response) {
        const task = await TaskModel.create(req.body as Itask);
        return res.json({ task });
    }

    public async findOne (req: Request, res: Response) {
        const task = await TaskModel.findById(req.params.id);
        return res.json({ task });
    }
}

