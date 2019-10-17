const comments = [
  {
    avatar: <image></image>,
    name: "Micheal Lyons",
    date: "12/18/2018",
    comment:
      "They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of a concert I have EVER witnessed."
  },
  {
    avatar: <image></image>,
    name: "Gary Wong",
    date: "12/12/2018",
    comment:
      "Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!"
  },
  {
    avatar: <image></image>,
    name: "Theodore Duncan",
    date: "11/15/2018",
    comment:
      "How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!"
  }
];
// function declaration from bahar
function createTable(table, shows) {
  for (let show of shows) {
    let row = table.insertRow();
    row.classList.add("shows-container__table-title");
    for (key in show) {
      let cell = row.insertCell();
      let text = document.createTextNode(key);
      cell.appendChild(text);
    }

    row = table.insertRow();
    row.classList.add("shows-container__table-content");
    for (key in show) {
      let cell = row.insertCell();
      let text = document.createTextNode(show[key]);
      cell.appendChild(text);
    }
    let cell = row.insertCell();
    row.classList.add("shows-container__table-button");
    let button = document.createElement("button");
    button.textContent = "Buy Tickets";
    cell.appendChild(button);
  }
}
let table = document.querySelector("table");
console.log(table);
let showKeys = Object.keys(shows[0]);

// function invocation

createTable(table, shows);

//function declaration from me the last one
function createTableHead(table, shows) {
  let tHead = table.createTHead();
  let row = tHead.insertRow();
  for (let show of shows) {
    row.classList.add("shows-container__table-title");
    let th = document.createElement("th");
    let text = document.createTextNode(show);
    th.appendChild(text);
    row.appendChild(th);
  }
}
function createTable(table, shows) {
  for (let show of shows) {
    row = table.insertRow();
    row.classList.add("shows-container__table-content");
    for (key in show) {
      let cell = row.insertCell();
      let text = document.createTextNode(show[key]);
      cell.appendChild(text);
    }
    let cell = row.insertCell();
    row.classList.add("shows-container__table-button");
    let button = document.createElement("button");
    button.textContent = "Buy Tickets";
    cell.appendChild(button);
  }
}

let table = document.querySelector("table");
console.log(table);
let showKeys = Object.keys(shows[0]);

// function invocation
createTableHead(table, showKeys);
createTable(table, shows);
