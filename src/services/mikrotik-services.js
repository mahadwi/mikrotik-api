import { connectToApi } from "../helpers/mikrotik-helpers.js";

export const getStatus = async () => {
  let client;
  try {
    const { client: c, api } = await connectToApi();
    client = c;
    await api.menu('/system/resource').getOnly();
    return { connected: true, message: 'MikroTik connected' };
  } catch (err) {
    console.log(err);
    
    return { connected: false, message: 'Failed to connect', error: err.message };
  } finally {
    if (client) client.close();
  }
};

export const getActivePPP = async () => {
  let client;
  try {
    const { client: c, api } = await connectToApi();
    client = c;
    const result = await api.menu('/ppp/active').getAll();
    return result;
  } catch (err) {
    throw new Error('Gagal ambil user aktif: ' + err.message);
  } finally {
    if (client) client.close();
  }
};

export const disconnectPPPUser = async (id) => {
  let client;
  try {
    const { client: c, api } = await connectToApi();
    client = c;
    await api.menu('/ppp/active').remove(id);
    return { success: true, message: `User ${id} disconnected` };
  } catch (err) {
    throw new Error('Gagal disconnect user: ' + err.message);
  } finally {
    if (client) client.close();
  }
};
