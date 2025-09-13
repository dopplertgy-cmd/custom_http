const express = require("express");
const app = express();
const PORT = 3000;

// Respond to all GET requests
app.get("/", (req, res) => {
  res.send("Webpage content not available. Please visit tran-wong-llc.vercel.app for the correct page.");
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
