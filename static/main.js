$('.en, .to').click(function (e) {
    var time = $('#time').text();
    var minutt = $('#minutt').text();
    e.preventDefault();
    $.ajax({
        url: window.location.href + '/a/',
        data: { 'timer_': time, 'minutter_': minutt },
        method: 'POST',
        success: function (data) {
            $('#timer').text(time);
            $('#minutter').text(minutt);
            if (document.getElementById('clic').innerHTML == 'on') {
                console.log("godkjent");
            }
            else {
                alert('husk å skru på knappen');
            }
        }
    });
});

$('#clic').click(function (e) {
    var onOff = $('#clic').text();
    onOff = onOff == "on" ? 'off' : 'on';
    if (onOff=="on") {
        $("#clic").css("background-color","palegreen");
        }
    else {
        $("#clic").css("background-color","lightcoral");
        }
    console.log(window.location.href);
    document.getElementById('clic').innerHTML = onOff;
    $.ajax({
        url: window.location.href + '/on/',
        data: { 'sendt_': onOff },
        method: 'POST'
    });
});

$('#clicker3').click(function (e) {
    $.ajax({
        url: window.location.href + '/off/',
        data: { 'sendt_': 'OK' },
        method: 'POST'
    });
});



$('#clicker2').click(function (e) {
    $.ajax({
        url: window.location.href + '/ab/',
        data: { 'sendt_': 'OK' },
        method: 'POST'
    });
});
