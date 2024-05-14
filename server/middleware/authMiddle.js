const validate = (schema) => async (req, res, next) => {
    try {
      const parsedBody = await schema.parseAsync(req.body);
      req.body = parsedBody;
      next();
    } catch (error) {
      console.error(error);
  
      const status = 422; // Unprocessable Entity (validation error)
      const message = "Validation failed:"; // Clear prefix
      const extraDetails = error.errors.map((err) => err.message).join(', ');
  
      res.status(status).json({ message, details: extraDetails });
    }
  };

module.exports = validate;