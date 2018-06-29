const enzyme = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');

process.env.NODE_ENV = 'test';

require('babel-register')();
require('babel-polyfill');
require('jsdom-global/register');

require.extensions['.css'] = () => null;
require.extensions['.png'] = () => null;
require.extensions['.jpg'] = () => null;
require.extensions['.svg'] = () => null;

enzyme.configure({ adapter: new Adapter() });

const jsdom = require('jsdom');

const dom = new jsdom.JSDOM('<!DOCTYPE html><html><head></head><body></body></html>');
global.window = dom.window;
global.document = dom.window.document;
global.navigator = dom.window.navigator;

const injectTapEventPlugin = require('react-tap-event-plugin');

injectTapEventPlugin();

global.navigator = {
  userAgent: 'node.js',
};

global.documentRef = document;

// This overrides the fileapi from the test environment, since we dont have an actual browser
require('mock-require')('fileapi', {});
