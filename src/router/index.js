import express from 'express';
import * as controller from '../controller/index.js';
import injectRouterConfig  from '../middleware/injectRouterConfig.js';

const apiRouter = express.Router();

apiRouter.get('/api/status', injectRouterConfig, controller.getStatusController);
apiRouter.get('/api/ppp/active', injectRouterConfig, controller.getActivePPPController);
apiRouter.get('/api/ppp/profile', injectRouterConfig, controller.getPPPProfileController);
apiRouter.get('/api/ppp/secret', injectRouterConfig, controller.getPPPSecretController);
apiRouter.post('/api/ppp/disconnect', injectRouterConfig, controller.disablePPPUserController);

apiRouter.get('/api/interface', injectRouterConfig, controller.getInterfaceController);

export default apiRouter;