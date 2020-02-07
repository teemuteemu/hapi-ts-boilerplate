import { Request, ResponseToolkit } from "@hapi/hapi";

const handlers = {
  index: (request: Request, h: ResponseToolkit) => {
    return { result: 'foo' };
  }
};

export default handlers;
