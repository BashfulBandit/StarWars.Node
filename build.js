import esbuild from 'esbuild';
import fs from 'fs/promises';

let _pkg = null;
const getPkg = async () => {
	if (_pkg !== null) return _pkg;

	const pkgString = await fs.readFile('./package.json', 'utf-8');
	_pkg = JSON.parse(pkgString);

	return _pkg;
};

// The main build function
const build = async () => {
	console.info('Beginning build...');

	try {
		const pkg = await getPkg();

		await esbuild.build({
			format: 'cjs',
			bundle: true,
			entryPoints: ['./src/index.ts'],
			external: Object.keys(pkg.peerDependencies ?? {}),
			minify: true,
			outdir: 'dist',
			sourcemap: true
		});

		console.info('Complete!');
	} catch (err) {
		// Log any errors
		// eslint-disable-next-line no-console
		console.error(err);

		// And exit with an error status
		process.exit(1);
	}
};

// Run build
build();
