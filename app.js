const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (_req, res) => {
  res.send('Hello from Bao CI/CD on Amazon EKS!');
});

// Pipeline goi endpoint nay sau moi lan deploy.
// HTTP 200 = phien ban moi duoc phep tiep tuc.
app.get('/healthz', (_req, res) => {
  res.status(200).send('ok');
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Bao Node.js app is listening on port ${port}`);
});
