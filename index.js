const express = require("express");
const app = express();

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

app.get("/compute", async (req, res) => {
  let taskid= Date.now();
  console.log("BUSY task initiated "+taskid);
  function setImmediatePromise() {
    return new Promise((resolve) => {
      setImmediate(() => resolve());
    });
  }
  let count = 1;
  for (let i = 0; i < 10000000; i++) {
    count += 1;
    await setImmediatePromise()
  }
  console.log("BUSY task "+taskid+" finished ");
  res.send("finished loop and sum is : "+count+taskid); // just to get a different count for every job
});
