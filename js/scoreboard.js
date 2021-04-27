function showInfo(data, tabletop) {
    console.log(data)
    for (var i = 0; i < data.length; i++) {
        $('.questions').append(
            '<div class="question sg-box sg-box--light sg-box--padding-m sg-box--border-color-dark sg-box--border"><div class="sg-flex"><div class="sg-flex sg-flex--column"><h1 class="question-subject sg-headline sg-headline--small">' + data[i].Subject + ' · ' + data[i].Grade + ' · ' + data[i].Date + '</h1><div class="sg-counter view-counter sg-counter--with-animation view-count "><div class="sg-text  sg-text--small sg-text--white sg-text--bold sg-counter__text-spaced ">' + data[i].Traffic +  '<span> views</span></div></div><div class="sg-flex sg-flex--margin-top-s"><div class="sg-text sg-text--small">' + data[i].Content + '</div></div><a href="'+ data[i].LINK + '" target="_blank"><button class="sg-button sg-button--s sg-button--outline answerbutton"><span class="sg-button__icon sg-button__icon--s"><div class="sg-icon sg-icon--adaptive sg-icon--x24"><svg class="sg-icon__svg"><use xlink:href="#icon-answer"></use></svg></div></span><span class="sg-button__text">Answer</span></button></a></div></div></div>'

        );
    }

    for (var i = 0; i < data.length;i++){
        $('.target-counter').append(
            '<div class="score"><div class="sg-flex"><h1 class="sg-headline sg-headline--xlarge sg-headline--to-center">' + data[i].Current + '/' + data[i].Target + '</h1></div><h2 class="sg-headline sg-headline--small sg-headline--default sg-headline--to-center">answers this month</h2><div class="progress"><div class="bar" style="width:'+ data[i].Percent + '"><p class="percent">'+ data[i].Percent +'</p></div></div></div>'
        )
    }
    for (var i = 0; i < data.length;i++){
        $('.ranklist').append(
            '<li><a href="' + data[i].Profile + '<div class="user">'+ data[i].Username +'</div><div class="answercount">' + data[i].Answers + ' answers</div></li>'
        )
    }
}