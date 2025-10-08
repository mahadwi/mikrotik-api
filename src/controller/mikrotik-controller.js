import * as service from "../services/index.js";

export const getStatusController = async (req, res) => {
  const router = req.router; // ini sudah aman dari middleware
  const status = await service.getStatus(router);
  res.status(status.connected ? 200 : 500).json(status);
};

export const getActivePPPController = async (req, res) => {
  const router = req.router;
  const result = await service.getActivePPP(router);
  res.status(result.connected ? 200 : 500).json(result);
};

export const getPPPProfileController = async (req, res) => {
  const router = req.router;
  const result = await service.getProfilePPP(router);
  res.status(result.connected ? 200 : 500).json(result);
};

export const getPPPSecretController = async (req, res) => {
  const router = req.router;
  const result = await service.getSecretPPP(router);
  res.status(result.connected ? 200 : 500).json(result);
};

export const getInterfaceController = async (req, res) => {
  const router = req.router;
  const result = await service.getInterface(router);
  res.status(result.connected ? 200 : 500).json(result);
};

export const disablePPPUserController = async (req, res) => {
  const { name } = req.body;
  if (!name) return res.status(400).json({ error: 'PPP username dibutuhkan' });

  try {
    const result = await service.disablePPPUser(name);
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
