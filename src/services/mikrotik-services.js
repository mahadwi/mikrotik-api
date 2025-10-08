import { connectToApi } from '../helpers/mikrotik-helpers.js';

export const getStatus = async (router) => {
  let client;
  try {
    client = await connectToApi(router);
    const result = await client.write('/system/resource/print');
    return { connected: true, message: 'MikroTik connected', data: result };
  } catch (err) {
    return { connected: false, message: 'Failed to connect', error: err.message };
  } finally {
    if (client) client.close();
  }
};

export const getActivePPP = async (router) => {
  let client;
  try {
    client = await connectToApi(router);
    const result = await client.write('/ppp/active/print');
    return { connected: true, message: 'MikroTik connected', data: result };
  } catch (err) {
    return { connected: false, message: 'Failed to connect', error: err.message };
  } finally {
    if (client) client.close();
  }
};

export const getProfilePPP = async (router) => {
  let client;
  try {
    client = await connectToApi(router);
    const result = await client.write('/ppp/profile/print');
    return { connected: true, message: 'MikroTik connected', data: result };
  } catch (err) {
    return { connected: false, message: 'Failed to connect', error: err.message };
  } finally {
    if (client) client.close();
  }
};

export const getSecretPPP = async (router) => {
  let client;
  try {
    client = await connectToApi(router);
    const result = await client.write('/ppp/secret/print');
    return { connected: true, message: 'MikroTik connected', data: result };
  } catch (err) {
    return { connected: false, message: 'Failed to connect', error: err.message };
  } finally {
    if (client) client.close();
  }
};

export const getInterface = async (router) => {
  let client;
  try {
    client = await connectToApi(router);
    const result = await client.write('/interface/print');
    return { connected: true, message: 'MikroTik connected', data: result };
  } catch (err) {
    return { connected: false, message: 'Failed to connect', error: err.message };
  } finally {
    if (client) client.close();
  }
};

export const disablePPPUser = async (name) => {
  let client;
  try {
    client = await connectToApi();

    // 1. Disable secret
    const secrets = await client.write('/ppp/secret/print', [`?name=${name}`]);
    if (!secrets.length) throw new Error('User tidak ditemukan di secret');
    await client.write('/ppp/secret/set', [
      `=.id=${secrets[0]['.id']}`,
      `=disabled=yes`
    ]);

    // 2. Disconnect jika sedang aktif
    const active = await client.write('/ppp/active/print', [`?name=${name}`]);
    if (active.length) {
      await client.write('/ppp/active/remove', [
        `=.id=${active[0]['.id']}`
      ]);
    }

    return { success: true, message: `User ${name} telah diblokir dan disconnect` };
  } catch (err) {
    throw new Error('Gagal memblokir user: ' + err.message);
  } finally {
    if (client) client.close();
  }
};
