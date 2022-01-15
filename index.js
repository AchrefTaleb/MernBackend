const app = require("./app/app");
const PORT = 5000;

app.listen(PORT, (err) => {
  if (err) console.log(err);
  else console.log(`Server started on port: ${PORT}`);
});