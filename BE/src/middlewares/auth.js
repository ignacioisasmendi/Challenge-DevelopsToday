import base64 from 'base-64';

export default function auth(req, res, next) {
  try {
    const token = req.headers.authorization;

    if (!token) {
      return res.status(401).send('Token not provided');
    }

    if (!token.startsWith('Basic ')) {
      return res.status(401).send('Invalidad token format');
    }

    const tokenWithoutBearer = token.split(' ')[1];
    const tok = `${process.env.BASIC_USER}:${process.env.BASIC_PASS}`;
    const hash = base64.encode(tok);
    if (hash === tokenWithoutBearer) {
      return next();
    }
    return res.status(401).send('Invalid token');
  } catch (error) {
    console.error('Error veryfing the token:', error);
    return res.status(500).send('Internal server error');
  }
}
