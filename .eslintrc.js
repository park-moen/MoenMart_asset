module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended'],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 'latest',
		// ESM(import/export)으로 모듈 의존성을 설정하기 위해서 module로 설정
		sourceType: 'module',
		// tsconfig.json 설정의 type 정보가 필요한 규칙을 사용하려는 경우 이 설정이 필요합니다.
		project: './tsconfig.json',
	},
	plugins: ['@typescript-eslint', 'prettier'],
	rules: {
		'import/prefer-default-export': 'off',
		'linebreak-style': 'off',
		'prettier/prettier': [
			'error',
			{
				endOfLine: 'auto',
			},
		],
	},
};
