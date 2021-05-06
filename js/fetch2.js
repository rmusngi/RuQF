fetch("https://spreadsheets.google.com/feeds/list/1S0hr7dBDG0ZoRWkvTugYEwYHk9DEOhpq1Ewi9UYS_DM/2/public/values?alt=json")
  .then(res => res.json())
  .then(json => {
    const data = [] /* this array will eventually be populated with the contents of the spreadsheet's rows */

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

      data.push(formattedRow)
    }


    console.log(data) /* do anything you want with the reformatted data here */
    var data2 = data.filter(a => a.subject == subjName);
    console.log(data2)
    var mainContainer = document.getElementById("questions");
    for (var i = 0; i < data2.length; i++) {
      var div = document.createElement("div");
      div.innerHTML = '<div class="question sg-box sg-box--light sg-box--padding-m sg-box--border-color-dark sg-box--border"><div class="sg-flex"><div class="qbox sg-flex sg-flex--column"><h1 class="question-subject sg-headline sg-headline--small">' + data2[i].subject + ' · ' + data2[i].grade + ' · ' + data[i].age + ' days ago</h1><div class="sg-counter view-counter sg-counter--with-animation view-count "><div class="sg-text  sg-text--small sg-text--white sg-text--bold sg-counter__text-spaced ">' + data2[i].sessions +  '<span> views</span></div></div><div class="sg-flex sg-flex--margin-top-s"><div class="sg-text sg-text--small">' + data2[i].content + '</div></div><a href="'+ data2[i].question + '" target="_blank"><button class="sg-button sg-button--s sg-button--outline answerbutton"><span class="sg-button__icon sg-button__icon--s"><div class="sg-icon sg-icon--adaptive sg-icon--x24"><svg class="sg-icon__svg"><use xlink:href="#icon-answer"></use></svg></div></span><span class="sg-button__text">Answer</span></button></a></div></div></div>';
      mainContainer.appendChild(div);}

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