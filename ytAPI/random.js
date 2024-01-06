const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.';

export default function randomString(length) {
  let randomString = '';
  for (let i = 0; i < length; i++) {
    randomString += characters[Math.floor(Math.random() * characters.length)];
  }
  return randomString;
}