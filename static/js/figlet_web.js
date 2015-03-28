// Generate the text use input.
function generate() {
  figlet($('#input').val(), {
    font: $('#font').val(),
    horizontalLayout: $('#horizontalLayout').val(),
    verticalLayout: $('#verticalLayout').val()
  }, function(err, data) {
       if (err) {
       console.log('Something went wrong...');
       console.dir(err);
       return;
     }
     $('pre').html(data);
  });
}


// Generate the default text.
if ($('#input').html() === 'Try it') {
  generate();
}


// Generate the text when user click the button.
$('#generate').on('click', function() {
  generate();
});


// Generate the text when user stop typing.
// http://blog.another-d-mention.ro/programming/java-script/on-typing-complete-jquery-plugin/
$.fn.onTypeFinished = function (func) {
  var T, S = 0, D = 1000;
  $(this).bind("keypress", onKeyPress).bind("focusout", onTimeOut);
  function onKeyPress() {
    clearTimeout(T);
    if (S === 0) {
      S = new Date().getTime();
      D = 1000;
      T = setTimeout(onTimeOut, 1000);
      return;
    }
    var t = new Date().getTime();
    D = (D + (t - S)) / 2;
    S = t;
    T = setTimeout(onTimeOut, D * 2);
  }
  function onTimeOut() {
    func.apply();
    S = 0;
  }
  return this;
};
$("#input").onTypeFinished(generate);


// When user change fonts or layout style, regenerate the text.
$('option').on('click', function() {
  generate();
});
