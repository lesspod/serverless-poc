import { decodeToken } from '../utils/authToken';

const excludedPaths = [/\/auth/];

export default (req, res, next) => {
  try {
    const currentPath = req.path;
    let excluded = false;
    // if its an excluded path, get out of the middelware!
    excludedPaths.forEach(path => {
      if (!(path instanceof RegExp)) {
        throw new Error('auth middleware should be passed an array of regex');
      }
      if (path.test(currentPath)) {
        excluded = true;
      }
    });

    if (excluded) {
      return next();
    }

    const details = decodeToken(req.headers.authorization);
    req.user = details;
    next();
  } catch (e) {
    console.log('error: ', e);
    res.boom.unauthorized('bruh, send me the right token?');
  }
};
