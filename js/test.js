function showInfo(data, tabletop) {
    console.log(data)
    for (var i = 0; i < data.length; i) {
        $('.footer-count').append(
            '<div class="sg-footer__container"><div class="row"><div class="col-md-3"><div class="tree-count sg-flex sg-flex--full-height sg-flex--margin-right-s"><div class="sg-box sg-box--mint-secondary-light sg-box--no-border sg-box--xsmall-padding sg-box--no-min-height"><div class="sg-box__hole"><div class="sg-flex sg-flex--full-height sg-flex--align-items-center sg-flex--justify-content-center sg-flex--row"><div class="sg-flex sg-flex--margin-right-xs"><span class="sg-headline sg-headline--large sg-headline--mint-dark sg-headline--extra-bold">' + data[i].treecount + '</span></div><div class="sg-text sg-text--small sg-text--bold sg-text--to-center">TREES PLANTED</div></div></div></div></div></div><div class="col-md-9"><h2 class="sg-headline sg-headline--extra-bold progress-text">Help us reach our goals. Keep answering questions!</h2><div class="progress"><div class="progress-bar progress-bar-animated bg-success" role="progressbar" aria-valuenow="12" aria-valuemin="0" aria-valuemax="100" style="width: 12%"></div></div></div></div></div>'
    
            );


    }
}