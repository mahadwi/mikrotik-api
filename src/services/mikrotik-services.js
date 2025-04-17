import { connectToApi } from '../helpers/mikrotik-helpers.js';

export const getStatus = async () => {
  let client;
  try {
    client = await connectToApi();
    const result = await client.write('/system/resource/print');
    return { connected: true, message: 'MikroTik connected', data: result };
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
    client = await connectToApi();
    const result = await client.write('/ppp/secret/print');
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
    client = await connectToApi();
    await client.write('/ppp/active/remove', [`.id=${id}`]);
    return { success: true, message: `User ${id} disconnected` };
  } catch (err) {
    throw new Error('Gagal disconnect user: ' + err.message);
  } finally {
    if (client) client.close();
  }
};