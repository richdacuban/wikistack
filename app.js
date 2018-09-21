const morgan = require("morgan");
const express = require("express");
const layout = require("./views/layout");
const models = require("./models");
const { db } = require("./models");

const wikiRouter = require("./routes/wiki");
const userRouter = require("./routes/user");

const app = express();

app.use(express.static(__dirname + "/public"));
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use("/wiki", wikiRouter);

app.get("/", (req, res) => {
  res.send(layout());
});

db.authenticate().then(() => {
  console.log("connected to the database");
});

const PORT = 3000;

// app.listen(PORT, () => {
//   console.log(`App listening in port ${PORT}`);
// });

const init = async () => {
  // await models.User.sync();
  // await models.Page.sync();
  await models.db.sync();
  //models.db.sync({force:})

  app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}!`);
  });
};

init();
