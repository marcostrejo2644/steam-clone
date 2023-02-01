import { NextFunction, Response, Request } from "express";
import { Logger } from "./logger";

// Custum error 
export class HttpError extends Error{
  httpStatusCode: number
  UImsg: string

  constructor(status: number = 500, message: string = "Internal Server Error", UImsg: string = "Something went wrong! Try again later" ) {
    super(message)
    
    Object.setPrototypeOf(this, new.target.prototype);

    this.httpStatusCode = status;
    this.UImsg = UImsg

    Error.captureStackTrace(this);
  }
}

// Error Handler
export const errorHandler = async (error: HttpError, _request: Request, response: Response, next: NextFunction) => {
  Logger.error(`Error : ${error}`)
  return response.status(error.httpStatusCode || 500).json({ error })
}

// Error 404 not found route or resource
export const error404Route = async (request: Request, response: Response) => {
  const resource = request.originalUrl.split("/v1").pop();
  Logger.error(`Error : Can't find ${resource}`)

  return response.status(404).json({ message: `Resource: [ ${resource} ] not found` })
}

export const checkRequest = async(request: Request, response: Response, next: NextFunction) => {
  const ALLOWED = [
    "OPTIONS",
    "HEAD",
    "CONNECT",
    "GET",
    "POST",
    "PUT",
    "DELETE",
    "PATCH"
  ];

  if( !ALLOWED.includes( request.method) ) {
    Logger.error(`Error : HTTP Method -> ${request.method} not allowed`)
    return response.send(405).json({ message: `${request.method} not allowed!`});
  }

  next();
}