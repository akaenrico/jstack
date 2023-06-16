import express from 'express';
import router from './infra/http/router/index';

const app = express();

app.use(express.json());
app.use('/v1/mycontacts', router);

app.listen(3001, () => {
  console.log(`\u001B[32m⚙️  Server running at http://localhost:3001/v1/mycontacts\u001B[32m`);
});
