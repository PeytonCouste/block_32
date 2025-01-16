const errorHandler = (err, req, res, next) => {
    console.error(err.stack); // Log the error
    res.status(500).send("Something went wrong on the server.");
  };
  
  module.exports = errorHandler;
  