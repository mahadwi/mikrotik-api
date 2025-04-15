import express from 'express';
import {
  getStatusController,
  getActivePPPController,
  disconnectPPPController
} from '../controller/mikrotik-controller.js';

const apiRouter = express.Router();

apiRouter.get('/api/status', getStatusController);
apiRouter.get('/api/ppp/active', getActivePPPController);
apiRouter.post('/api/ppp/disconnect', disconnectPPPController);

export default apiRouter;