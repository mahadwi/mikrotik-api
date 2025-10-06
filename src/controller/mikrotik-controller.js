import { getStatus, getActivePPP, disablePPPUser } from "../services/mikrotik-services.js";

export const getStatusController = async (req, res) => {
  const result = await getStatus();
  res.status(result.connected ? 200 : 500).json(result);
};

export const getActivePPPController = async (req, res) => {
  try {
    const result = await getActivePPP();
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const disablePPPUserController = async (req, res) => {
  const { name } = req.body;
  if (!name) return res.status(400).json({ error: 'PPP username dibutuhkan' });

  try {
    const result = await disablePPPUser(name);
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
