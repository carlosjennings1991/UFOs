// import the data from data.js
const tableData = data;

// This tells javascript to look for the <tbody> tags in the html
var tbody = d3.select("tbody");

// This clears the existing data so we can put in our data. 
function buildTable(data) {
    tbody.html('');

    // Build the loop that puts all the data objects into a table
    data.forEach((dataRow) => {
        let row = tbody.append('tr');
        Object.values(dataRow).forEach((val) => {
            let cell = row.append('td');
            cell.text(val);
        });
    });
}


