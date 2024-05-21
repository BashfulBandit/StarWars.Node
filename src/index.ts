import Koa from 'koa';
import { PORT } from '~/globals/environment';
import { router } from '~/router';

const app = new Koa();

app.use(router.routes());

app.listen(PORT, () => {
	// eslint-disable-next-line no-console
	console.log(`Star Wars API listening on port ${PORT}`);
});
