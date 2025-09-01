import js from '@eslint/js'
import globals from 'globals'
import pluginReact from 'eslint-plugin-react'
import path from 'path'
import { defineConfig } from 'eslint/config'

export default defineConfig([
	{
		files: ['**/*.{js,jsx}'],
		plugins: {
			js,
			react: pluginReact,
			'unused-imports': require('eslint-plugin-unused-imports'),
		},
		extends: ['js/recommended', 'plugin:react/recommended'],
		languageOptions: { globals: globals.browser },
		rules: {
			'no-unused-vars': 'warn',
			'unused-imports/no-unused-imports': 'warn',
			'no-console': 'warn',
			'react/prop-types': 'off',
			'react/react-in-jsx-scope': 'off', // React 17+ JSX
		},
		settings: {
			'import/resolver': {
				alias: {
					map: [['@', './src']],
					extensions: ['.js', '.jsx'],
				},
			},
			react: { version: 'detect' },
		},
	},
])
