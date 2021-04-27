$(function () {
    $(".question").slice(0, 5).show();
    $("#loadMore").on('click', function (e) {
        e.preventDefault();
        $(".question:hidden").slice(0, 5).slideDown();
        if ($(".question:hidden").length == 0) {
            $("#load").fadeOut('slow');
        }
        $('html,body').animate({
            scrollTop: $(this).offset().top
        }, 1500);
    });
});

function onReady(callback) {
    var intervalId = window.setInterval(function() {
      if (document.getElementsByTagName('body')[0] !== undefined) {
        window.clearInterval(intervalId);
        callback.call(this);
      }
    }, 1000);
  }
  
  function setVisible(selector, visible) {
    document.querySelector(selector).style.display = visible ? 'block' : 'none';
  }
  
  onReady(function() {
    setVisible('.question', true);
    setVisible('#loader', false);
  });