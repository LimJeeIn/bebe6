import { apiURL } from '../apiURL';

export const loadFollowerListAPI = async (accountName, userToken) => {
  try {
    const res = await fetch(
      `${apiURL}profile/${accountName}/follower/?limit=Number&skip=Number`,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${userToken}`,
          'Content-type': 'application/json',
        },
      },
    );
    const resJson = await res.json();
    return resJson;
  } catch (err) {
    console.error(err);
    return null;
  }
};
