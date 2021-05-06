fetch("https://spreadsheets.google.com/feeds/list/1P3Ug8RzOcGtuGm3GlFwj97cimbOpLtyK5qG1Y9KN7KE/2/public/values?alt=json")
  .then(res => res.json())
  .then(json => {
    const subjects = [] /* this array will eventually be populated with the contents of the spreadsheet's rows */

    const rows = json.feed.entry

    for (const row of rows) {
      const formattedRow = {}

      for (const key in row) {
        if (key.startsWith("gsx$")) {

          /* The actual row names from your spreadsheet
           * are formatted like "gsx$title".
           * Therefore, we need to find keys in this object
           * that start with "gsx$", and then strip that
           * out to get the actual row name
           */

          formattedRow[key.replace("gsx$", "")] = row[key].$t

        }
      }

      subjects.push(formattedRow)
    }


    console.log(subjects) /* do anything you want with the reformatted data here */
    var subjContainer2 = document.getElementById("subjectpicker");
    for (var i = 0; i < subjects.length; i++) {
      var dropdown = document.createElement("div");
      dropdown.innerHTML = '<option value="ap.html">'+ subjects[i].name +'</option>'
      subjContainer2.appendChild(dropdown);}
      console.log(dropdown)
    

  })
  .catch(function (err) {
    console.log('error: ' + err);
  });

//function json(data) {
  //var mainContainer = document.getElementById("questions");
  //for (var i = 0; i < data.length; i++) {
     // var div = document.createElement("div");
 //     div.innerHTML = 'link';
//      mainContainer.appendChild(div);
//  }
//}