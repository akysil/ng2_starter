import * as lodash from 'lodash';

export default new Proxy({
    test: () => 'test'
}, {
    get: (target: any, property: string) => {
        const _ = lodash['__moduleExports'] || lodash; // for ng compiler compatibility (rollup-plugin-commonjs)
        return target[property] || _[property];
    }
});