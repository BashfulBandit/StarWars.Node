import baseConfig from '@gabegabegabe/eslint-config';
import browserConfig from '@gabegabegabe/eslint-config/browser';
import jestTsConfig from '@gabegabegabe/eslint-config/jest-typescript';
import jsConfig from '@gabegabegabe/eslint-config/javascript';
import jsonConfig from '@gabegabegabe/eslint-config/json';
import nodeConfig from '@gabegabegabe/eslint-config/node';
import tsConfig from '@gabegabegabe/eslint-config/typescript';

const TEST_FILES = [
	'**/*.test.ts',
	'**/*.mock.*.ts',
	'src/testing/**/*',
	'src/_test-setup.ts'
];

export default [
	baseConfig,
	{
		ignores: [
			'coverage/',
			'dist/',
			'documentation/',
			'node_modules/'
		]
	},
	{
		files: ['*.js', '*.cjs', ...TEST_FILES],
		...nodeConfig
	},
	{
		files: ['*.js', '*.cjs'],
		...jsConfig
	},
	{
		files: ['src/**/*'],
		...browserConfig
	},
	{
		files: ['**/*.json'],
		...jsonConfig
	},
	{
		files: ['src/**/*.ts'],
		...tsConfig
	},
	{
		files: [...TEST_FILES],
		...jestTsConfig
	},
	{
		files: ['src/**/*.ts'],
		rules: {
			'@typescript-eslint/prefer-readonly-parameter-types': 0,
			'id-length': 0,
			'require-atomic-updates': 0
		}
	}
];
