import { Request, ResponseToolkit } from "@hapi/hapi";

const handlers = {
  index: (request: Request, h: ResponseToolkit) => {
    return { result: 'foo' };
  },
  health: (request: Request, h: ResponseToolkit) => {
    return { result: 'healthy' };
  }
};

export default handlers;
