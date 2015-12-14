'use strict';

const App = require('../components/App.jsx');
const About = require('../components/About.jsx');
const Goodbye = require('../components/Goodbye.jsx');
const Hello = require('../components/Hello.jsx');
const Links = require('../components/Links.jsx');

module.exports = [
  {
    path: '/', component: App, indexRoute: { component: Links }
  }, {
    path: '/about', component: About, indexRoute: { component: Links }
  }, {
    path: '/goodbye', component: Goodbye, indexRoute: { component: Links }
  }, {
    path: '/hello', component: Hello, indexRoute: { component: Links }
  }
];
