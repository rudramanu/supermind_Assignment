const logger = (req, res, next) => {
  const startTime = new Date();

  console.log(`[${startTime.toISOString()}] ${req.method} ${req.url}`);

  console.log("Request Headers:", req.headers);

  if (["POST", "PUT", "PATCH"].includes(req.method)) {
    console.log("Request Body:", req.body);
  }

  res.on("finish", () => {
    const endTime = new Date();
    const responseTime = endTime - startTime;
    console.log(
      `[${endTime.toISOString()}] ${req.method} ${req.url} - ${
        res.statusCode
      } (${responseTime}ms)`
    );
  });
  next();
};

module.exports = { logger };

// toISOString() is a method available in JavaScript's Date object. It is used to convert a Date object into an ISO 8601 formatted string.

// ISO 8601 is an international standard for representing date and time information in a structured and human-readable format. The format is YYYY-MM-DDTHH:mm:ss.sssZ,
