import bcrypt from 'bcryptjs';

export const hashPassword = password => {
  let salt = bcrypt.genSaltSync(10);
  let hash = bcrypt.hashSync(password, salt);
  return hash;
};

export const comparePassword = (password, hash) => {
  return bcrypt.compareSync(password, hash);
};
