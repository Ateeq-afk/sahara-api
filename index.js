const express = require('express');
const bodyParser = require('body-parser');
const enquiryRoute = require('./route/enquiry');

const app = express();
const port = process.env.PORT || 4000;

app.use(bodyParser.json());
app.use('/enquiry', enquiryRoute);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
