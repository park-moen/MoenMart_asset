module.exports = (api) => {
	api.cache(true);

	const presets = [['@babel/preset-env', { useBuiltIns: 'entry', corejs: 3 }], '@babel/preset-typescript'];
	const plugins = ['@babel/plugin-proposal-optional-chaining', ['@babel/plugin-transform-runtime', { corejs: 3 }]];

	return {
		presets,
		plugins,
	};
};
