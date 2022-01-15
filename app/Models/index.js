const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/backend", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = {
  Form: require("./Form"),
  Page: require("./Page"),
  Message: require("./Message")
};