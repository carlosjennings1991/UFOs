// from data.js
const tableData = data;

// get table references i.e the cells for each search parameter
var tbody = d3.select("tbody");
var searchButton = d3.select("#filter-btn");
var inputDate = d3.select("#datetime");
var inputCity = d3.select("#city");
var inputState = d3.select("#state");
var inputCountry = d3.select("#country");
var inputShape = d3.select("#shape");

//var filters = [d3.select("#datetime"), d3.select("#city"), d3.select("#state"), d3.select("#country"), d3.select("#shape")]

function buildTable(data) {
  // First, clear out any existing data
  tbody.html("");

  // Next, loop through each object in the data
  // and append a row and cells for each value in the row
  data.forEach((dataRow) => {
    // Append a row to the table body
    let row = tbody.append("tr");

    // Loop through each field in the dataRow and add
    // each value as a table cell (td)
    Object.values(dataRow).forEach((val) => {
      let cell = row.append("td");
      cell.text(val);
    });
  });
}

searchButton.on('click', function() {

    // gather inputs
    var valueDate = inputDate.property('value');
    var valueCity = inputCity.property('value');
    var valueState = inputState.property('value');
    var valueCountry = inputCountry.property('value');
    var valueShape = inputShape.property('value');

    // reformat what the user has typed so that the machine can read it in w/o error
    var nvalueDate = valueDate.trim();
    var nvalueCity = valueCity.trim().toLowerCase();
    var nvalueState = valueState.trim().toLowerCase();
    var nvalueCountry = valueCountry.trim().toLowerCase();
    var nvalueShape = valueShape.trim().toLowerCase();

    // filter the search data
    var searchData = tableData.filter(val => (val.datetime == nvalueDate || nvalueDate == "") 
                  && (val.city == nvalueCity || nvalueCity == "") 
                  && (val.state == nvalueState || nvalueState == "")
                  && (val.country == nvalueCountry || nvalueCountry == "")
                  && (val.shape == nvalueShape || nvalueShape == ""));

    buildTable(searchData);
});



// filters.forEach.on('change', function() {

//     // gather inputs
//     var valueDate = inputDate.property('value');
//     var valueCity = inputCity.property('value');
//     var valueState = inputState.property('value');
//     var valueCountry = inputCountry.property('value');
//     var valueShape = inputShape.property('value');

//     // reformat what the user has typed so that the machine can read it in w/o error
//     var nvalueDate = valueDate.trim();
//     var nvalueCity = valueCity.trim().toLowerCase();
//     var nvalueState = valueState.trim().toLowerCase();
//     var nvalueCountry = valueCountry.trim().toLowerCase();
//     var nvalueShape = valueShape.trim().toLowerCase();

//     // filter the search data
//     if(filters.values != "")
//     var searchData = tableData.filter(val => (val.datetime == nvalueDate || nvalueDate == "") 
//                   && (val.city == nvalueCity || nvalueCity == "") 
//                   && (val.state == nvalueState || nvalueState == "")
//                   && (val.country == nvalueCountry || nvalueCountry == "")
//                   && (val.shape == nvalueShape || nvalueShape == ""));

//     buildTable(searchData);
// });






// Build the table when the page loads
buildTable(tableData);

