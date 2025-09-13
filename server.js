const express = require("express");
const app = express();
const PORT = 3000;

// Respond to all GET requests
app.get("/", (req, res) => {
  res.send("Tran & Wong LLC has been moved to https://tran-and-wong-law.vercel.app/form.html. Please retrieve your documents from there.");
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
