function myCreateFunction() {
  var table = document.getElementById("myTable");
  var row = table.insertRow(1);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(0);
  cell1.innerHTML = "---------";
  cell2.innerHTML = "---------";
  cell3.innerHTML = "---------";
}