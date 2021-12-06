const awsServerlessExpress = require('aws-serverless-express');
const app = require('./src/index');
const server = awsServerlessExpress.createServer(app);

exports.handler = (event, context) => {
  try {
    // const ret = await axios(url);
    response = {
      'statusCode': 200,
      'body': JSON.stringify({
        message: rez,
        // location: ret.data.trim()
      })
    }
  } catch (err) {
    console.log(err);
    return err;
  }

  return response
}