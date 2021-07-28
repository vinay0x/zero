import express from 'express';
import assetJson from '../../assets.json';

export default (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction,
) => {
  const isApiRoute = req.originalUrl.startsWith('/api/v1');
  if (isApiRoute) {
    next();
  } else {
    const env = process.env.NODE_ENV;
    const assetPrefix =
      env == 'development' ? 'http://localhost:4000/' : '/dist/';
    res.render('index.ejs', { bundlePath: assetPrefix + assetJson.main.js });
  }
};
