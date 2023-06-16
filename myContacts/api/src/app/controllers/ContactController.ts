import { Request, Response } from 'express';

class ContactController {
  index(request: Request, response: Response) {
    response.status(200).json({ 'message': 'OK' });
  }

  show(request: Request, response: Response) {
    response.status(200).json({ 'message': 'OK' });
  }

  store(request: Request, response: Response) {
    response.status(200).json({ 'message': 'OK' });
  }

  update(request: Request, response: Response) {
    response.status(200).json({ 'message': 'OK' });
  }

  delete(request: Request, response: Response) {
    response.status(200).json({ 'message': 'OK' });
  }
}

export = new ContactController;
