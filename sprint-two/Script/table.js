const shows = [
  {
    Date: "Mon Dec 17 2018",
    Venue: "Ronald Lane",
    Location: "San Francisco, CA"
  },
  {
    Date: "Tue Jul 18 2019",
    Venue: "Pier 3 East",
    Location: "San Francisco, CA"
  },
  {
    Date: "Fri July 22 2019",
    Venue: "View Loungue",
    Location: "San Francisco, CA"
  },
  {
    Date: "Sat Aug 12 2019",
    Venue: "Hyatt Agency",
    Location: "San Francisco, CA"
  },
  {
    Date: "Fri Sep 05 2019",
    Venue: "Moscow Center",
    Location: "San Francisco, CA"
  },
  {
    Date: "Wed Aug 11 2019",
    Venue: "Pres Club",
    Location: "San Francisco, CA"
  }
];

//function declaration
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
  }
}

let table = document.querySelector("table");
//console.log(table);
let showKeys = Object.keys(shows[0]);

// function invocation

createTable(table, shows);
