// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Star Wars tables (DATA)
// =============================================================
var tables = [
  {
    routeName: "misa",
    name: "Misa",
    phone_number: 1234567,
    email: "misa@gmai.com",
    id: 1
  },
  {
    routeName: "misa2",
    name: "Misa2",
    phone_number: 1234567,
    email: "misa@gmai.com",
    id: 2
  }
];

var tablesWait = [
    {
      routeName: "misa",
      name: "wait",
      phone_number: 1234567,
      email: "misa@gmai.com",
      id: 1
    },
    {
      routeName: "misa2",
      name: "wait2",
      phone_number: 1234567,
      email: "misa@gmai.com",
      id: 2
    }
  ];
// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/reserve", function(req, res) {
  res.sendFile(path.join(__dirname, "reserve.html"));
});

app.get("/tables", function(req, res) {
  res.sendFile(path.join(__dirname, "tables.html"));
});

// Displays all tables
app.get("/api/tables", function(req, res) {
  return res.json(tables);
});

app.get("/api/waitlist", function(req, res) {
    return res.json(tablesWait);
  });
// Displays a single character, or returns false
app.get("/api/tables/:table", function(req, res) {
  var chosen = req.params.table;

  console.log(chosen);

  for (var i = 0; i < tables.length; i++) {
    if (chosen === tables[i].routeName) {
      return res.json(tables[i]);
    }
  }

  return res.json(false);
});
app.get("/api/waitlist/:table", function(req, res) {
  var chosen = req.params.table;

  console.log(chosen);

  for (var i = 0; i < tablesWait.length; i++) {
    if (chosen === tablesWait[i].routeName) {
      return res.json(tablesWait[i]);
    }
  }

  return res.json(false);
});
// Create New tables - takes in JSON input
app.post("/api/tables", function(req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body parsing middleware
  var newtable = req.body;

  // Using a RegEx Pattern to remove spaces from newtable
  // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
  newtable.routeName = newtable.name.replace(/\s+/g, "").toLowerCase();

  console.log(newtable);

  tables.push(newtable);

  res.json(newtable);
});

app.post("/api/tablesWait", function(req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body parsing middleware
  var newtable = req.body;

  // Using a RegEx Pattern to remove spaces from newtable
  // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
  newtable.routeName = newtable.name.replace(/\s+/g, "").toLowerCase();

  console.log(newtable);

  tablesWait.push(newtable);

  res.json(newtable);
});
// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
