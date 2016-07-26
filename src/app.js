import dva from 'dva';
import models from './models'
import router from './router'

const app = dva();

app.model(models);

app.router(router);

export default app.start();
