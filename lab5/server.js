const express = require(`express`);
const app = express();
const PORT = 3000;

app.use(express.static(`public`));
app.use(`/gallery`, express.static(`gallery`));

const allUsers = Array.from({ length: 20 }, (_, i) => ({
  id: i + 1,
  firstname: `User${i + 1}`,
  lastname: `Lastname${String.fromCharCode(65 + i)}`,
  score: Math.floor(Math.random() * 100),
}));

let currentUsers = [...allUsers].sort(() => 0.5 - Math.random()).slice(0, 10);
app.get(`/api/users`, (req, res) => {
  let users = [...currentUsers];
  const sortBy = req.query.sortBy;
  const order = req.query.order;
  if (sortBy) {
    users.sort((a, b) => {
      let result = a[sortBy].localeCompare(b[sortBy], undefined, {
        numeric: true,
        sensitivity: `base`,
      });
      return order === `desc` ? -result : result;
    });
  }
  res.json(users);
});

app.delete(`/api/users/:id`, (req, res) => {
  const id = parseInt(req.params.id);
  currentUsers = currentUsers.filter((u) => u.id !== id);
  res.json({ success: true });
});

app.get(`/api/newUsers`, (req, res) => {
  res.json(allUsers.slice(0, 5));
});

app.get(`/api/latestUsers`, (req, res) => {
  res.json(allUsers.slice(-5));
});

app.get(`/api/gallery`, (req, res) => {
  const fs = require(`fs`);
  const images = fs.readdirSync(`./gallery`);
  res.json(images);
});

app.get(`/weather`, (req, res) => {
  const temperature = Math.floor(Math.random() * 31);

  res.json({
    city: `Kyiv`,
    temperature: temperature,
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
