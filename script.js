const pathNodes = [
  { id: "N1", x: 43, y: 226 }, { id: "N2", x: 46, y: 145 }, { id: "N3", x: 104, y: 224 },
  { id: "N4", x: 141, y: 226 }, { id: "N5", x: 91, y: 150 }, { id: "N6", x: 141, y: 188 },
  { id: "N7", x: 140, y: 149 }, { id: "N8", x: 190, y: 189 }, { id: "N9", x: 244, y: 185 },
  { id: "N10", x: 150, y: 130 }, { id: "N11", x: 236, y: 109 }, { id: "N12", x: 286, y: 198 },
  { id: "N13", x: 345, y: 189 }, { id: "N14", x: 357, y: 211 }, { id: "N15", x: 416, y: 189 },
  { id: "N16", x: 424, y: 203 }, { id: "N17", x: 432, y: 241 }
];

const pathEdges = [
  ["N1", "N2"], ["N1", "N3"], ["N2", "N5"], ["N3", "N4"], ["N4", "N6"], ["N5", "N7"],
  ["N6", "N7"], ["N6", "N8"], ["N7", "N10"], ["N8", "N9"], ["N9", "N11"], ["N9", "N12"],
  ["N12", "N13"], ["N12", "N14"], ["N13", "N14"], ["N13", "N15"], ["N14", "N15"],
  ["N14", "N16"], ["N15", "N16"], ["N16", "N17"],["N2", "N1"], ["N3", "N1"], ["N5", "N2"], 
  ["N4", "N3"], ["N6", "N4"], ["N7", "N5"],["N7", "N6"], ["N8", "N6"], ["N10", "N7"],
  ["N9", "N8"], ["N11", "N9"], ["N12", "N9"],["N13", "N12"], ["N14", "N12"], ["N14", "N13"], 
  ["N15", "N13"], ["N15", "N14"],["N16", "N14"], ["N16", "N15"], ["N17", "N16"]
];

//　教室一覧
const classroomData = [
  { name: "図書館", x: 356, y: 225, node: "N14" },
  { name: "オルタス", x: 79, y: 127, node: "N5" },
  { name: "体育館", x: 450, y: 207, node: "N16" },
   { name: "武道場", x: 448, y: 174, node:"N16"},
  { name: "グラウンド", x: 423, y: 252, node:"N17"},
  { name: "大学会館", x: 65, y: 86, node:"N5"},
  { name: "情報科学センター", x: 171, y: 107, node:"N10"},
  { name: "美術工芸資料館", x: 176, y: 173, node:"N8"},
  { name: "６０周年記念館", x: 283, y: 167, node:"N12"},
  { name: "Design Lab", x: 345, y: 157, node:"N13"},
  { name: "学務課", x:230,y:167, node:"N9"},
  { name: "0111", x:218,y:200,image: "images/12.png", node:"N9"},
  { name: "0112",x:219,y:210,image: "images/12.png",node:"N9"}, 
  { name: "0121",x:218,y:200,image: "images/12.png", node:"N9"}, 
  { name: "0122",x:219,y:210,image: "images/12.png", node:"N9"}, 
  { name: "0211",x:179,y:211,image: "images/12.png", node:"N8"}, 
  { name: "0212",x:194,y:202,image: "images/12.png", node:"N8"}, 
  { name: "0222",x:193,y:228,image: "images/12.png", node:"N8"}, 
  { name: "0223",x:193,y:218,image: "images/12.png", node:"N8"}, 
  { name: "0311",x:198,y:105,image: "images/3.png", node:"N11"}, 
  { name: "0312",x:206,y:83,image: "images/3.png", node:"N11"}, 
  { name: "0313",x:226,y:132,image: "images/3.png", node:"N11"}, 
  { name: "0321",x:195,y:107,image: "images/3.png", node:"N11"}, 
  { name: "0322",x:207,y:102,image: "images/3.png", node:"N11"}, 
  { name: "0323",x:208,y:112,image: "images/3.png", node:"N11"}, 
  { name: "0331",x:200,y:107,image: "images/3.png", node:"N11"}, 
  { name: "5IS",x:163,y:132,image: "images/3.png", node:"N11"}, 
  { name: "0611",x:121,y:80,image: "images/6.png", node:"N5"}, 
  { name: "0612",x:134,y:80,image: "images/6.png", node:"N5"}, 
  { name: "0811",x:104,y:94,image: "images/6.png", node:"N5"}, 
  {name: "0812",x:112,y:94,image: "images/6.png", node:"N5"}, 
  {name: "0821",x:104,y:85,image: "images/6.png", node:"N5"}, 
  {name: "0822",x:104,y:94,image: "images/6.png", node:"N5"}, 
  {name: "104",x:102,y:163,image: "images/10.png", node:"N5"}, 
  {name: "1131",x:100,y:191,image: "images/10.png", node:"N5"}, 
  {name: "1132",x:100,y:182,image: "images/10.png", node:"N5"},
  {name: "1141",x:100,y:187,image: "images/10.png", node:"N5"}, 
  {name: "1142",x:100,y:177,image: "images/10.png", node:"N5"}, 
  {name: "1211",x:104,y:211,image: "images/10.png", node:"N3"}, 
  {name: "E111",x:320,y:171,image: "images/1.png", node:"N13"}, 
  {name: "E121",x:320,y:171,image: "images/1.png", node:"N13"}, 
  {name: "K101",x:281,y:223,image: "images/東3.png", node:"N12"}, 
  {name: "K201",x:281,y:223,image: "images/東3.png", node:"N12"}, 
  {name: "K202",x:294,y:222,image: "images/東3.png", node:"N12"}, 
  {name: "K203",x:294,y:228,image: "images/東3.png", node:"N12"}, 
  {name: "K301",x:281,y:223,image: "images/東3.png", node:"N12"}, 
  {name: "K302",x:294,y:222,image: "images/東3.png", node:"N12"}, 
  {name: "K303",x:294,y:228,image: "images/東3.png", node:"N12"}, 
  {name: "NP11",x:162,y:254, node:"N4"}, 
  {name: "NP12",x:153,y:254, node:"N4"}, 
  {name: "NP21",x:158,y:253, node:"N4"}, 
  {name: "WP11",x:24,y:177, node:"N2"}, 
  {name: "WP12",x:24,y:172, node:"N2"}, 
  {name: "WP21",x:24,y:177, node:"N2"}, 
  {name: "WP22",x:24,y:172, node:"N2"}, 
  {name: "EP212",x:419,y:174, node:"N15"},
  {name: "CIS",x:167,y:111, node:"N10"}
];

// Leafletマップ初期化
const map = L.map("map", {
  crs: L.CRS.Simple,
  minZoom: -1,
  zoomControl: false
});
L.control.zoom({ position: "bottomright" }).addTo(map);

const bounds = [[0, 0], [400, 500]];
L.imageOverlay("地図.png", bounds).addTo(map);
map.fitBounds(bounds);

// normalize関数（全角→半角、英小文字化）
function normalize(str) {
  return str.toLowerCase().replace(/[Ａ-Ｚａ-ｚ０-９]/g, s =>
    String.fromCharCode(s.charCodeAt(0) - 0xFEE0)
  );
}

// サジェスト
function showSuggestions() {
  const input = document.getElementById("searchInput");
  const value = normalize(input.value.trim());
  const suggestionList = document.getElementById("suggestionList");
  suggestionList.innerHTML = "";

  if (!value) return;

  const matched = classroomData.filter(room =>
    normalize(room.name).includes(value)
  );

  matched.slice(0, 10).forEach(room => {
    const li = document.createElement("li");
    li.textContent = room.name;
    li.onclick = () => {
      input.value = room.name;
      suggestionList.innerHTML = "";
      searchClassroom();
    };
    suggestionList.appendChild(li);
  });
}

// 検索＋ルート描画
function searchClassroom() {
  const value = document.getElementById("searchInput").value.trim();
  if (!value) return;

  const room = classroomData.find(r => normalize(r.name).includes(normalize(value)));
  if (!room) return alert("該当する教室が見つかりませんでした");

  map.setView([room.y, room.x], 1);
  const popupContent = room.image
    ? `<img src="${room.image}" alt="${room.name}" style="width: 200px; border-radius: 8px;">`
    : room.name;

  L.popup().setLatLng([room.y, room.x]).setContent(popupContent).openOn(map);

  const params = new URLSearchParams(window.location.search);
  const currentX = parseFloat(params.get("x"));
  const currentY = parseFloat(params.get("y"));

if (!isNaN(currentX) && !isNaN(currentY) && room.node) {
  const endNode = pathNodes.find(n => n.id === room.node);
  if (endNode) {
    drawRoute(currentX, currentY, endNode.x, endNode.y);
  }
}

}

// 現在地マーカー表示
const params = new URLSearchParams(window.location.search);
const x = parseFloat(params.get("x"));
const y = parseFloat(params.get("y"));

if (!isNaN(x) && !isNaN(y)) {
  const name = params.get("name");
  let popupContent = "現在地";

  if (name) {
    const room = classroomData.find(r => normalize(r.name) === normalize(name));
    if (room && room.image) {
      popupContent = `<div>
        <strong>${room.name}</strong><br>
        <img src="${room.image}" alt="${room.name}" style="width: 200px; border-radius: 8px;">
      </div>`;
    } else if (room) {
      popupContent = room.name;
    }
  }

  L.marker([y, x]).addTo(map).bindPopup(popupContent).openPopup();
}

// ルート検索
function findNearestNode(x, y) {
  let min = Infinity, nearest = null;
  for (const node of pathNodes) {
    const d = Math.hypot(node.x - x, node.y - y);
    if (d < min) {
      min = d;
      nearest = node;
    }
  }
  return nearest;
}

function findShortestPath(start, goal) {
  const dist = {}, prev = {}, visited = new Set(), queue = [];
  pathNodes.forEach(n => dist[n.id] = Infinity);
  dist[start.id] = 0;
  queue.push({ id: start.id, dist: 0 });

  while (queue.length) {
    queue.sort((a, b) => a.dist - b.dist);
    const current = queue.shift();
    if (visited.has(current.id)) continue;
    visited.add(current.id);

    const neighbors = pathEdges.filter(e => e.includes(current.id)).map(e =>
      e[0] === current.id ? e[1] : e[0]
    );

    for (const n of neighbors) {
      const a = pathNodes.find(p => p.id === current.id);
      const b = pathNodes.find(p => p.id === n);
      const d = Math.hypot(a.x - b.x, a.y - b.y);
      if (dist[n] > dist[current.id] + d) {
        dist[n] = dist[current.id] + d;
        prev[n] = current.id;
        queue.push({ id: n, dist: dist[n] });
      }
    }
  }

  const path = [];
  let curr = goal.id;
  while (curr) {
    path.unshift(curr);
    curr = prev[curr];
  }
  return path;
}

function drawPath(path) {
  const latlngs = path.map(id => {
    const node = pathNodes.find(n => n.id === id);
    return [node.y, node.x];
  });
  L.polyline(latlngs, { color: "blue", weight: 4 }).addTo(map);
}

function drawRoute(fromX, fromY, toX, toY) {
  const start = findNearestNode(fromX, fromY);
  const end = findNearestNode(toX, toY);
  const path = findShortestPath(start, end);
  drawPath(path);
}
