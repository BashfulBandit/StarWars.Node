import { apiRouter } from '~/routers/api';
import Koa from 'koa';
import { PORT } from '~/globals/environment';

const app = new Koa();

app.use(apiRouter.routes());

app.listen(PORT, () => {
	// eslint-disable-next-line no-console
	console.log(`Star Wars API listening on port ${PORT}`);
});
