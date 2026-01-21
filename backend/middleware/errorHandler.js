
module.exports = (err, req, res, next) => {
  console.error('Error occurred:', err); // Add this line
  const status = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(status).json({ 
    message: err.message,
    stack: process.env.NODE_ENV === 'development' ? err.stack : undefined
  });
};
