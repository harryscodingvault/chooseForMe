import express, { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

let counter = 0;

export const getCount = async (req: Request, res: Response) => {
  res.status(StatusCodes.ACCEPTED).json({
    currentCount: counter,
  });
};

export const addCount = async (req: Request, res: Response) => {
  counter++;
  res.status(StatusCodes.CREATED).json({
    currentCount: counter,
  });
};
