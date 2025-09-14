import path from 'path';
import express from 'express';
const app = express();
const PORT = 3000;

// Respond to all GET requests
const __dirname = path.resolve();

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, '/frontend/index.html'));
  //res.send("Webpage content not available. Please visit tran-wong-llc.vercel.app for the correct page.");
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
