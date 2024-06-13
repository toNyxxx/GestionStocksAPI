require('dotenv').config();
import { HTTP_STATUS_CODES } from "../utils";

// Import de l'environment.config
const ErrorHandler = (err, _req, res, _next) => {
	const status = err.statusCode || HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR;
	const message = err.message || "An unknown error has occured";

    let errObject = {
		error: {
			status: status,
			message: message,
			stack: (process.env.NODE_ENV === 'development' ? err.stack : null),
		}
    }

	res.status(status).json(errObject);
};

export { ErrorHandler } ;
