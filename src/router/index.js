import express from 'express';
import {
  getStatusController,
  getActivePPPController,
  disablePPPUserController
} from '../controller/mikrotik-controller.js';

const apiRouter = express.Router();

apiRouter.get('/api/status', getStatusController);
apiRouter.get('/api/ppp/active', getActivePPPController);
apiRouter.post('/api/ppp/disconnect', disablePPPUserController);

export default apiRouter;