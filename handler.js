'use strict';

module.exports.helloWorld = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Hello World!',
    }),
  };
};

module.exports.sum = async (event) => {
  const { a, b } = event.queryStringParameters;
  const sum = parseInt(a) + parseInt(b);

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: `The sum of ${a} and ${b} is ${sum}`,
    }),
  };
};

module.exports.currentTime = async (event) => {
  const currentTime = new Date().toISOString();

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: `The current time is ${currentTime}`,
    }),
  };
};