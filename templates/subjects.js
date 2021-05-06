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
    var subjContainer = document.getElementById("subjects");
    for (var i = 0; i < subjects.length; i++) {
      var div2 = document.createElement("div");
      div2.innerHTML = '<li><a href=<div role="button" class="brn-subject-list__subject brn-subject-list__subject--active" tabindex="0"><a href="'+ subjects[i].link + '.html"><div class="brn-subject-list__icon"><svg class="sg-subject-icon sg-subject-icon--small"><use xlink:href="#icon-subject-' + subjects[i].icon + '"></use></svg></div><div class="brn-subject-list__name"><div class="sg-text sg-text--small sg-text--gray sg-text--bold">' + subjects[i].name + '</div></a></div></li>';
      subjContainer.appendChild(div2);}
    


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