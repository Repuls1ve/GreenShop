import axios, {AxiosError} from 'axios'

function errorHandler<T = any>(err: any, unexpected: T): T {
    if (axios.isAxiosError(err)) {
        const serverError = err as AxiosError<T>
        if (serverError && serverError.response) {
            return serverError.response.data
        }
    }
    return unexpected
}

export default errorHandler