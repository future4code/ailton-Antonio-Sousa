import {Request, Response} from 'express';
import { selectOrder } from '../data/selectOrder';


export async function OrderProducts(req: Request, res: Response): Promise<any>{
    try {
        let byOrder = req.query.order as string

        if(!byOrder){
            byOrder: "asc"
        }

        const result = await selectOrder(byOrder)

        res.status(200).send(result)

    } catch (error:any) {
        res.status(res.statusCode || 500).send({message:error.message || error.sqlMessage})
    }
}