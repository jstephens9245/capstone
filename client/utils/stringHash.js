import sh from 'shorthash';

// 6 letter alpha numeric room name generator
export const genRoomName = () => {
  let text = '';
  const range = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (let i = 0; i < 6; i++) {
    text += range.charAt(Math.floor(Math.random() * range.length));
  }
  return text;
};

// returns unique hash from any given str
export const genShortHash = (str) => {
  return sh.unique(str);
};
