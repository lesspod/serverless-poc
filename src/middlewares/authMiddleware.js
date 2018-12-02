import { decodeToken } from '../utils/authToken';

export default (req, res, next) => {
  try {
    const details = decodeToken(req.headers.authorization);
    req.user = details;
    next();
  } catch (e) {
    console.log('error: ', e);
    res.boom.unauthorized('bruh, send me the right token?');
  }
};
