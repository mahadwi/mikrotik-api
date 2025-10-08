const injectRouterConfig = (req, res, next) => {
  const { host, user, password, port } = req.body;

  if (!host || !user || !password || !port) {
    return res.status(400).json({ error: 'Missing MikroTik connection parameters' });
  }

  req.router = { host, user, password, port };
  next();
};
export default injectRouterConfig;
