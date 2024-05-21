import esbuild from 'esbuild';
import fs from 'fs/promises';

// eslint-disable-next-line no-underscore-dangle
let _pkg = null;
const getPkg = async () => {
	if (_pkg !== null) return _pkg;

	const pkgString = await fs.readFile('./package.json', 'utf-8');
	// eslint-disable-next-line require-atomic-updates
	_pkg = JSON.parse(pkgString);

	return _pkg;
};

// The main build function
const build = async () => {
	// eslint-disable-next-line no-console
	console.info('Beginning build...');

	try {
		const pkg = await getPkg();

		await esbuild.build({
			bundle: true,
			entryPoints: ['./src/index.ts'],
			external: [
				...Object.keys(pkg.peerDependencies ?? {}),
				...Object.keys(pkg.dependencies ?? {})
			],
			format: 'esm',
			minify: true,
			outdir: 'dist',
			sourcemap: true
		});

		// eslint-disable-next-line no-console
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
