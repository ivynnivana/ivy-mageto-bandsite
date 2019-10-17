const shows = [
  {
    DATES: "Mon Dec 17 2018",
    VENUE: "Ronald Lane",
    LOCATION: "San Francisco, CA"
  },
  {
    DATES: "Tue Jul 18 2019",
    VENUE: "Pier 3 East",
    LOCATION: "San Francisco, CA"
  },
  {
    DATES: "Fri July 22 2019",
    VENUE: "View Loungue",
    LOCATION: "San Francisco, CA"
  },
  {
    DATES: "Sat Aug 12 2019",
    VENUE: "Hyatt Agency",
    LOCATION: "San Francisco, CA"
  },
  {
    DATES: "Fri Sep 05 2019",
    VENUE: "Moscow Center",
    LOCATION: "San Francisco, CA"
  },
  {
    DATES: "Wed Aug 11 2019",
    VENUE: "Pres Club",
    LOCATION: "San Francisco, CA"
  }
];

//function declaration
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
      if (show[key] === show.DATES) {
        cell.classList.add("shows-container__table--dates");
      } else {
        cell.classList.add("shows-container__table-cont");
      }
    }

    let cell = row.insertCell();
    let button = document.createElement("button");
    button.classList.add("shows-container__table-button");
    button.textContent = "BUY TICKETS";
    cell.appendChild(button);
  }
}

let table = document.querySelector("table");
console.log(table);
let showKeys = Object.keys(shows[0]);

// function invocation
createTableHead(table, showKeys);
createTable(table, shows);
