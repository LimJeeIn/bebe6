import { apiURL } from '../apiURL';

export const loadFollowingListAPI = async (accountName) => {
  try {
    const res = await fetch(
      `${apiURL}profile/${accountName}/following/?limit=Number&skip=Number`,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
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
