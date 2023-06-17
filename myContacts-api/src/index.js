const express = require('express');

const router = require('./infra/http/router/index');

const app = express();

app.use(express.json());
app.use('/v1/mycontacts', router);


const PORT = process.env.EXPRESS_PORT;

app.listen(PORT || 3001, () => {
  console.log(`⚙️  MyContacts API running at http://localhost:${PORT}/v1/mycontacts`);
});
