import {Request, Response, NextFunction} from 'express'
import Exception from '../exceptions/api-exception'

const errorMiddleware = (err: any, req: Request, res: Response, next: NextFunction) => {
    return err instanceof Exception ?
    res.status(err.status).json({
        error: 1,
        message: err.message
    }) :
    res.status(500).json({
        error: 1,
        message: err.message
    })
}

export default errorMiddleware