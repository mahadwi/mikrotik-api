import express from 'express';
import * as controller from '../controller/index.js';

const apiRouter = express.Router();

apiRouter.get('/api/status', controller.getStatusController);
apiRouter.get('/api/ppp/active', controller.getActivePPPController);
apiRouter.get('/api/ppp/profile', controller.getPPPProfileController);
apiRouter.get('/api/ppp/secret', controller.getPPPSecretController);
apiRouter.post('/api/ppp/disconnect', controller.disablePPPUserController);

apiRouter.get('/api/interface', controller.getInterfaceController);

export default apiRouter;