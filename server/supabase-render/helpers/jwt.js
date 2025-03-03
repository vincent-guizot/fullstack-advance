import jwt from "jsonwebtoken";
const secretCode = "bebas";

const tokenGenerator = (data) => {
  const { id, username, email, avatar } = data;
  const token = jwt.sign(
    {
      id,
      username,
      email,
      avatar,
    },
    secretCode
  );

  return token;
};

const tokenVerifier = (data) => {
  const verifiedToken = jwt.verify(data, secretCode);

  return verifiedToken;
};

export { tokenGenerator, tokenVerifier };
