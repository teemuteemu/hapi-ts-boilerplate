import { Request, ResponseToolkit } from "@hapi/hapi";
import Joi from 'joi';

const handlers = {
  index: {
    handler: (request: Request, h: ResponseToolkit) => {
      return { result: 'foo' };
    }
  },
  health: {
    handler: (request: Request, h: ResponseToolkit) => {
      return { result: 'healthy' };
    }
  },
  dummyPost: {
    handler: async (request: Request, h: ResponseToolkit) => {
      return { result: 'ok' };
    },
    validate: {
      payload: {
        message: Joi.string().required()
      }
    }
  }
};

export default handlers;
