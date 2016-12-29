var _path = require('path');

/** @type {string} project root */
var _root = _path.resolve(__dirname, '..');

/** @function
 * @name path
 * @param {string} args is array of directories names, will be used for path generation
 * @returns {string} generated path */

function path(...args) {
    return _path.join.apply(null, [_root].concat(args));
}
exports.path = path;
