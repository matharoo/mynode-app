const express = require("express");
const app = express();

function busytask(limit = 4999999999) {
  let count = 1;
  for (let i = 0; i < limit; i++) {
    count += 1;
  }
  return count;
}
 
app.listen(3000, function () {
  console.log("listening on 3000");
});
 
app.get("/", (req, res) => {
  res.send("Welcome USER! to MY nodejs app!");
  console.log("welcome url /");
});
 
app.get("/delete", (req, res) => {
  res.send("User was deleted");
  console.log("DELETE user");
});
 
app.get("/create", (req, res) => {
  res.send("User was created!!");
  console.log("CREATE user");
});

app.get("/compute", (req, res) => {
  console.log("BUSY task initiated "+Date.now());
    let x= busytask();
    res.send("finished loop and sum is : "+x);
  });
