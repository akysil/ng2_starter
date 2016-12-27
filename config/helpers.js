var path = require('path');

/** @type {string} project root */
var _root = path.resolve(__dirname, '..');

/** @function
 * @name root
 * @param {string} args is array of directories names, will be used for path generation
 * @returns {string} generated path */

function root(...args) {
    return path.join.apply(null, [_root].concat(args));
}
exports.root = root;
