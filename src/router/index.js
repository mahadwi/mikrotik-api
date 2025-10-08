import express from 'express';
import * as controller from '../controller/index.js';
import injectRouterConfig  from '../middleware/injectRouterConfig.js';

const apiRouter = express.Router();

apiRouter.post('/api/status', injectRouterConfig, controller.getStatusController);
apiRouter.post('/api/ppp/active', injectRouterConfig, controller.getActivePPPController);
apiRouter.post('/api/ppp/profile', injectRouterConfig, controller.getPPPProfileController);
apiRouter.post('/api/ppp/secret', injectRouterConfig, controller.getPPPSecretController);
apiRouter.post('/api/ppp/disconnect', injectRouterConfig, controller.disablePPPUserController);

apiRouter.post('/api/interface', injectRouterConfig, controller.getInterfaceController);

export default apiRouter;