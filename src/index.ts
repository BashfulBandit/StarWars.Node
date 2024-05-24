import { apiRouter } from '~/routers/api';
import Koa from 'koa';
import { logger } from '~/logging/logger';
import { PORT } from '~/globals/environment';

const app = new Koa();

app.use(apiRouter.routes());

app.listen(PORT, () => {
	logger.success(`Star Wars API listening on port ${PORT}`);
});
