import bcrypt from "bcrypt";
const saltRound = process.env.SALT_ROUND || 5;

const encryptPwd = (data) => {
  const encrypted = bcrypt.hashSync(data, saltRound);
  return encrypted;
};

const decryptPwd = (data, hashPwd) => {
  const decrypted = bcrypt.compareSync(data, hashPwd);
  return decrypted;
};

export { encryptPwd, decryptPwd };
