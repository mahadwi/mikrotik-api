import { getStatus, getActivePPP, disconnectPPPUser } from "../services/mikrotik-services.js";

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

export const disconnectPPPController = async (req, res) => {
  const { id } = req.body;
  if (!id) return res.status(400).json({ error: 'ID user PPP dibutuhkan' });

  try {
    const result = await disconnectPPPUser(id);
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
