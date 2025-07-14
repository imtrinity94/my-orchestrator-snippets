var records = db.readCustomQuery("SELECT ApplicationName,ApplicationShort FROM Applications ORDER BY ApplicationName");

records.forEach(
  function (app) {
    apps.push(new Properties({label: app.getProperty("ApplicationName"), value: app.getProperty("ApplicationShort")}));
  }
);
return apps;
