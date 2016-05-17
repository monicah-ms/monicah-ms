'use strict';

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _webpack = require('webpack');

var _webpack2 = _interopRequireDefault(_webpack);

var _webpackDevMiddleware = require('webpack-dev-middleware');

var _webpackDevMiddleware2 = _interopRequireDefault(_webpackDevMiddleware);

var _webpackHotMiddleware = require('webpack-hot-middleware');

var _webpackHotMiddleware2 = _interopRequireDefault(_webpackHotMiddleware);

var _webpack3 = require('../tools/webpack.config');

var _webpack4 = _interopRequireDefault(_webpack3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// config = process.env.WEBPACK_CONFIG ? process.env.WEBPACK_CONFIG : config;

var app = new (require('express'))();
var port = 3000;

var PAGE_CALL_COUNTER = 0;

var compiler = (0, _webpack2.default)(_webpack4.default);
app.use((0, _webpackDevMiddleware2.default)(compiler, { noInfo: true, publicPath: _webpack4.default.output.publicPath }));
app.use((0, _webpackHotMiddleware2.default)(compiler, { log: console.log, path: '/__webpack_hmr', heartbeat: 10 * 1000 }));

app.use(function (req, res) {
  res.sendFile(_path2.default.resolve(__dirname, '../index.html'));
  PAGE_CALL_COUNTER += 1;
  console.info('index.html has called ' + PAGE_CALL_COUNTER + ' times');
});

app.listen(port, function (error) {
  if (error) {
    console.error(error);
  } else {
    console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", _webpack4.default.devServer.port, _webpack4.default.devServer.port);
    console.info(process.env.NODE_ENV);
  }
});

//
// import 'babel-polyfill';
// import path from 'path';
// import express from 'express';
// import cookieParser from 'cookie-parser';
// import bodyParser from 'body-parser';
// import expressJwt from 'express-jwt';
// import expressGraphQL from 'express-graphql';
// import jwt from 'jsonwebtoken';
// import ReactDOM from 'react-dom/server';
// import { match } from 'universal-router';
// import PrettyError from 'pretty-error';
// import passport from './core/passport';
// import models from './data/models';
// import schema from './data/schema';
// import routes from './routes';
// import assets from './assets';
// import { port, auth, analytics } from './config';
//
// const app = express();

//
// Tell any CSS tooling (such as Material UI) to use all vendor prefixes if the
// user agent is not known.
// -----------------------------------------------------------------------------
// global.navigator = global.navigator || {};
// global.navigator.userAgent = global.navigator.userAgent || 'all';

//
// Register Node.js middleware
// -----------------------------------------------------------------------------
// app.use(express.static(path.join(__dirname, 'public')));
// app.use(cookieParser());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

//
// Authentication
// -----------------------------------------------------------------------------
// app.use(expressJwt({
//   secret: auth.jwt.secret,
//   credentialsRequired: false,
//   /* jscs:disable requireCamelCaseOrUpperCaseIdentifiers */
//   getToken: req => req.cookies.id_token,
//   /* jscs:enable requireCamelCaseOrUpperCaseIdentifiers */
// }));
// app.use(passport.initialize());
//
// app.get('/login/facebook',
//   passport.authenticate('facebook', { scope: ['email', 'user_location'], session: false })
// );
// app.get('/login/facebook/return',
//   passport.authenticate('facebook', { failureRedirect: '/login', session: false }),
//   (req, res) => {
//     const expiresIn = 60 * 60 * 24 * 180; // 180 days
//     const token = jwt.sign(req.user, auth.jwt.secret, { expiresIn });
//     res.cookie('id_token', token, { maxAge: 1000 * expiresIn, httpOnly: true });
//     res.redirect('/');
//   }
// );

//
// Register API middleware
// -----------------------------------------------------------------------------
// app.use('/graphql', expressGraphQL(req => ({
//   schema,
//   graphiql: true,
//   rootValue: { request: req },
//   pretty: process.env.NODE_ENV !== 'production',
// })));

//
// Register server-side rendering middleware
// -----------------------------------------------------------------------------
// app.get('*', async (req, res, next) => {
//   try {
//     let css = [];
//     let statusCode = 200;
//     const template = require('./views/index.jade');
//     const data = { title: '', description: '', css: '', body: '', entry: assets.main.js };
//
//     if (process.env.NODE_ENV === 'production') {
//       data.trackingId = analytics.google.trackingId;
//     }
//
//     await match(routes, {
//       path: req.path,
//       query: req.query,
//       context: {
//         insertCss: styles => css.push(styles._getCss()),
//         setTitle: value => (data.title = value),
//         setMeta: (key, value) => (data[key] = value),
//       },
//       render(component, status = 200) {
//         css = [];
//         statusCode = status;
//         data.body = ReactDOM.renderToString(component);
//         data.css = css.join('');
//         return true;
//       },
//     });
//
//     res.status(statusCode);
//     res.send(template(data));
//   } catch (err) {
//     next(err);
//   }
// });

//
// Error handling
// -----------------------------------------------------------------------------
// const pe = new PrettyError();
// pe.skipNodeFiles();
// pe.skipPackage('express');
//
// app.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
//   console.log(pe.render(err)); // eslint-disable-line no-console
//   const template = require('./views/error.jade');
//   const statusCode = err.status || 500;
//   res.status(statusCode);
//   res.send(template({
//     message: err.message,
//     stack: process.env.NODE_ENV === 'production' ? '' : err.stack,
//   }));
// });

//
// Launch the server
// -----------------------------------------------------------------------------
/* eslint-disable no-console */
// models.sync().catch(err => console.error(err.stack)).then(() => {
//   app.listen(port, () => {
//     console.log(`The server is running at http://localhost:${port}/`);
//   });
// });
/* eslint-enable no-console */
