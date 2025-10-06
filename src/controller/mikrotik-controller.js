import * as service from "../services/index.js";

export const getStatusController = async (req, res) => {
  const result = await service.getStatus();
  res.status(result.connected ? 200 : 500).json(result);
};

export const getActivePPPController = async (req, res) => {
  try {
    const result = await service.getActivePPP();
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getPPPProfileController = async (req, res) => {
  try {
    const result = await service.getProfilePPP();
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getPPPSecretController = async (req, res) => {
  try {
    const result = await service.getSecretPPP();
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getInterfaceController = async (req, res) => {
  try {
    const result = await service.getInterface();
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
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
