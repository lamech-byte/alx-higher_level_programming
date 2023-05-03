$(document).ready(function () {
  $('#btn_translate').click(function () {
    const langCode = $('#language_code').val();
    const url = 'https://fourtonfish.com/hellosalut/?lang=' + langCode;
    $.get(url, function (data) {
      $('#hello').text(data.hello);
    });
  });

  $('#language_code').keypress(function (e) {
    if (e.which === 13) {
      $('#btn_translate').click();
    }
  });
});
