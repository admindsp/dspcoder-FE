const mongoose = require("mongoose");

const dbConnect = async () => {
  if (mongoose.connection.readyState >= 1) {
    return;
  }

  return mongoose.connect(
    "mongodb+srv://dspcoder:bFRiEF0Dvw4Zf6FQ@dspcoder.r26n0bb.mongodb.net/dspcoder?retryWrites=true&w=majority&appName=DSPCoder",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  );
};

module.exports = dbConnect;
