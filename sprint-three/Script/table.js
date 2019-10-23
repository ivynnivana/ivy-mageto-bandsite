// function createTable(table, shows) {
//   let rowOne = table.insertRow();
//   rowOne.classList.add("shows-container__table-title");
//   let rowOneCellOne = rowOne.insertCell();
//   let rowOneTextOne = document.createTextNode("DATES");
//   rowOneCellOne.appendChild(rowOneTextOne);
//   rowOneCellOne.classList.add("title-dates");

//   let rowOneCellTwo = rowOne.insertCell();
//   let rowOneTextTwo = document.createTextNode("VENUE");
//   rowOneCellTwo.appendChild(rowOneTextTwo);
//   rowOneCellTwo.classList.add("title-venue");

//   let rowOneCellThree = rowOne.insertCell();
//   let rowOneTextThree = document.createTextNode("LOCATION");
//   rowOneCellThree.appendChild(rowOneTextThree);
//   rowOneCellThree.classList.add("title-location");

//   for (show of shows) {
//     let row = table.insertRow();
//     row.classList.add("shows-container__table-content");
//     for (key in show) {
//       let cell = row.insertCell();
//       let cellTwo = row.insertCell();
//       let text = document.createTextNode(key);
//       let textTwo = document.createTextNode(show[key]);
//       cell.appendChild(text);
//       cell.classList.add("container-other");

//       cellTwo.appendChild(textTwo);
//       if (show[key] === show.DATE) {
//         cellTwo.classList.add("table-dates");
//       } else {
//         cellTwo.classList.add("table-other");
//       }
//     }
//     let rowTwo = table.insertRow();
//     let cell = row.insertCell();
//     let button = document.createElement("button");
//     button.classList.add("shows-container__table-button");
//     button.textContent = "BUY TICKETS";
//     cell.appendChild(button);
//   }
// }
let something = axios
  .get("https://project-1-api.herokuapp.com/showdates?api_key=ivy")
  .then(response => {
    console.log(response.data);
    return response.data;
  })
  .then(response => {
    createTable(response);
  });

// let shows = [
//   {
//     DATE: "Mon Dec 17 2018",
//     VENUE: "Ronald Lane",
//     LOCATION: "San Francisco, CA"
//   },
//   {
//     DATE: "Tue Jul 18 2019",
//     VENUE: "Pier 3 East",
//     LOCATION: "San Francisco, CA"
//   },
//   {
//     DATE: "Fri July 22 2019",
//     VENUE: "View Loungue",
//     LOCATION: "San Francisco, CA"
//   },
//   {
//     DATE: "Sat Aug 12 2019",
//     VENUE: "Hyatt Agency",
//     LOCATION: "San Francisco, CA"
//   },
//   {
//     DATE: "Fri Sep 05 2019",
//     VENUE: "Moscow Center",
//     LOCATION: "San Francisco, CA"
//   },
//   {
//     DATE: "Wed Aug 11 2019",
//     VENUE: "Pres Club",
//     LOCATION: "San Francisco, CA"
//   }
// ];

//function declaration
function createTable(shows) {
  let table = document.querySelector(".table");

  for (let i = 0; i < shows.length; i++) {
    let containerOne = document.createElement("div");
    containerOne.classList.add("container-div");
    table.appendChild(containerOne);

    let dateTitle = document.createElement("p");
    containerOne.appendChild(dateTitle);
    dateTitle.innerText = "DATE";
    dateTitle.classList.add("date-title");

    let date = document.createElement("p");
    containerOne.appendChild(date);
    date.innerText = shows[i].date;
    date.classList.add("dates-cell");

    let venueTitle = document.createElement("p");
    containerOne.appendChild(venueTitle);
    venueTitle.innerText = "VENUE";
    venueTitle.classList.add("venue-title");

    let venue = document.createElement("p");
    containerOne.appendChild(venue);
    venue.innerText = shows[i].place;
    venue.classList.add("venue-cell");

    let locationTitle = document.createElement("p");
    containerOne.appendChild(locationTitle);
    locationTitle.innerText = "LOCATION";
    locationTitle.classList.add("location-title");

    let location = document.createElement("p");
    containerOne.appendChild(location);
    location.innerText = shows[i].location;
    location.classList.add("location-cell");

    let button = document.createElement("button");
    containerOne.appendChild(button);
    button.innerText = "BUY TICKETS";
    button.classList.add("button-cell");
  }
}

//function invocation

// createTable(table, shows);
