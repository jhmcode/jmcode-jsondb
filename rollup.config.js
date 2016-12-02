/**
 * Created by Jamey McElveen on 12/1/16.
 */

import babel from 'rollup-plugin-babel';

export default {
    entry: 'src/main.js',
    dest: 'dist/jsondb.js',
    format: 'cjs',
    moduleName: 'JsonDb',
    plugins: [
        babel({
            exclude: 'node_modules/**'
        })
    ]
};
