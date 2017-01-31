import sh from 'shorthash';
import { randomString } from 'ROOT/lib/utilities/random';

// 6 letter alpha numeric room name generator
export const genRoomName = () => {
  const range = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  return randomString(6, 6, range);
};

// returns unique hash from any given str
export const genShortHash = (str) => {
  return sh.unique(str);
};
