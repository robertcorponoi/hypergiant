import pkg from './package.json';
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';

const extensions = ['.js', '.jsx', '.ts', '.tsx'];

export default {
	input: './src/index.ts',
	external: [],
	plugins: [
		resolve({ extensions }),
		commonjs(),
		babel({ extensions, runtimeHelpers: true, include: ['src/**/*'] }),
	],
	output: [{
		file: pkg.main,
		format: 'cjs',
		exports: 'default'
	}, {
		file: pkg.module,
		format: 'esm',
	}],
};
