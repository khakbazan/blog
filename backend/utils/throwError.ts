export const throwError = (message: string, statusCode: number) => {
  const error: any = new Error(message);
  error.code = statusCode;

  throw error;
};
