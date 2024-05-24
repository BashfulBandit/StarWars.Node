import esbuild from 'esbuild';

// The main build function
const build = async () => {
	// eslint-disable-next-line no-console
	console.info('Beginning build...');

	try {
		await esbuild.build({
			bundle: true,
			entryPoints: ['./src/index.ts'],
			minify: true,
			outfile: 'dist/index.cjs',
			platform: 'node'
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
