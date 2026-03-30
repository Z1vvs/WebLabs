let content, left, right, footer;

async function api(url) {
  const res = await fetch(url);
  return res.json();
}

function init() {
  const main = document.getElementById("main");

  main.innerHTML = `
        <header id="header"></header>
        <main>
        <div id="leftPanel"><div class="loader"></div></div>
        <div id="content"><div class="loader"></div></div>
        <div id="rightPanel"><div class="loader"></div></div>
        </main>
        <footer id="footer"></footer>
      `;
  content = document.getElementById("content");
  left = document.getElementById("leftPanel");
  right = document.getElementById("rightPanel");
  footer = document.getElementById("footer");

  ["User Rating", "News", "Contacts", "About", "Gallery"].forEach((text) => {
    const btn = document.createElement("button");
    btn.innerText = text;
    btn.onclick = () => {
      if (text === `User Rating`) {
        content.innerHTML = `<h2>Users</h2><button id="getUsers">Get Users</button>`;
        document.getElementById("getUsers").onclick = loadUsers;
      } else if (text === `Gallery`) {
        loadGallery();
      } else {
        content.innerHTML = `<h2>${text}</h2>`;
      }
    };
    header.appendChild(btn);
  });

  loadLatestUsers();

  setTimeout(() => {
    content.innerHTML = `<h2>Content</h2><p>No users</p><button id="getUsers">Get Users</button>`;
    document.getElementById("getUsers").onclick = loadUsers;
    left.innerHTML = `<input type="text" id="search" placeholder="Search...">
       <button id="searchBtn">Find</button>`;
    document.getElementById("searchBtn").onclick = searchTable;
    right.innerHTML = `
        <div id="weatherBlock">
        <h3>Weather</h3>
        <div id="weatherCity">Loading...</div>
        <div id="weatherTemp"></div>
        </div>
        <div>Total Score: <span id="totalScore">0</span></div>
        <label><input type="checkbox" id="editTable"> Edit table</label>
      `;
    document.getElementById("editTable").onchange = toggleDeleteColumn;
    loadWeather();
    setInterval(loadWeather, 60000);
  }, 1000);
}

let currentUsers = [];

async function loadUsers() {
  content.innerHTML = `<div class="loader"></div>`;
  currentUsers = await api(`/api/users`);
  renderTable(currentUsers);
  updateScore();
}

function renderTable(users) {
  const showDelete = document.getElementById("editTable")?.checked;
  let html = `
        <h2>Users</h2>
        <button onclick="sortTable('lastname','asc')">Sort Lastname ↑</button>
        <button onclick="sortTable('lastname','desc')">Sort Lastname ↓</button>
        <button onclick="sortTable('firstname','asc')">Sort Firstname ↑</button>
        <button onclick="sortTable('firstname','desc')">Sort Firstname ↓</button>

        <table>
        <thead>
        <tr>
        <th>Lastname</th>
        <th>Firstname</th>
        <th>Score</th>
        ${showDelete ? `<th>Action</th>` : ``}
        </tr>
        </thead>
        <tbody>
    `;
  users.forEach((u, i) => {
    html += `
        <tr>
        <td>${u.lastname}</td>
        <td>${u.firstname}</td>
        <td>${u.score}</td>
        ${
          showDelete
            ? `<td><button onclick="deleteRow(${u.id})">Delete</button></td>`
            : ``
        }
        </tr>
    `;
  });
  html += `</tbody></table>`;
  document.getElementById("content").innerHTML = html;
}

function updateScore() {
  const total = currentUsers.reduce((sum, u) => sum + u.score, 0);
  const scoreElement = document.getElementById("totalScore");
  if (scoreElement) scoreElement.innerText = total;
}

async function deleteRow(id) {
  await fetch(`/api/users/${id}`, { method: `DELETE` });
  currentUsers = currentUsers.filter((u) => u.id !== id);
  renderTable(currentUsers);
  updateScore();
}

function toggleDeleteColumn() {
  renderTable(currentUsers);
}

async function sortTable(column, order) {
  currentUsers = await api(`/api/users?sortBy=${column}&order=${order}`);
  renderTable(currentUsers);
  updateScore();
}

function searchTable() {
  const val = document.getElementById("search").value.toLowerCase();
  document.querySelectorAll(`tbody tr`).forEach((tr) => {
    const cells = Array.from(tr.children).map((td) =>
      td.innerText.toLowerCase(),
    );
    const match = cells.some((text) => text === val);
    tr.classList.toggle(`highlight`, val && match);
  });
}

async function loadLatestUsers() {
  const users = await api(`/api/latestUsers`);
  footer.innerHTML = `
      <div>Active users: ${Math.floor(Math.random() * 100)}</div>
      <div>New: ${users.map((u) => u.firstname + ` ` + u.lastname).join(`, `)}</div>
    `;
}

async function loadGallery() {
  const images = await api(`/api/gallery`);
  let html = `<h2>Gallery</h2><div class="gallery">`;
  images.forEach((img) => {
    html += `<img src="/gallery/${img}" class="gallery-img">`;
  });
  html += `</div>`;
  content.innerHTML = html;
}

async function loadWeather() {
  const data = await api(`/weather`);
  document.getElementById("weatherCity").innerText = data.city;
  document.getElementById("weatherTemp").innerText = data.temperature + ` °C`;
}

init();
