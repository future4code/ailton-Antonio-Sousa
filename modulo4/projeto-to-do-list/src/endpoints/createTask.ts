import {Request, Response} from "express";
import moment from "moment";
import InsertTesk from "../data/insertTask";

export default async function createTask(req:Request, res:Response){
    try {
        const R = req.body
        if(!R.title || !R.description || !R.deadline || !R.authorId){
            res.status(400).send({
                message: '"title" , "description, "deadline" e "authorId" São obrigatorios'
            })
            return
        }

        const dateDiff:number = moment(R.deadline, 'DD/MM/YYYY').unix() - moment().unix()

        if(dateDiff <= 0){
            res.status(400).send({
                message: '"deadline" deve ser uma data FUTURA'
            })
        }

        const id:string = Date.now() + Math.random().toString()
        await InsertTesk(
           id,
           R.title,
           R.description,
           moment(R.deadline, 'DD/MM/YYY').format('YYYY/MM/DD'),
           R.author_id
        )

        res.status(200).send({message: `Tarefa ${R.title} criada com sucesso`, id})
        
    } catch (error:any) {
        res.status(400).send({message: error.message})
    }
}