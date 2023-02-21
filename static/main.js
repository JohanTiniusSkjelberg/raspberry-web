$('.dropdown-content').click(function (event) {
    if (event.target.className=="en"){
        var minutt = $('#minutt').text();
        var time = event.target.innerHTML;
    }
    else {
        var time = $('#time').text();
        var minutt = event.target.innerHTML;
    }
    event.preventDefault();
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
    if (onOff == "on") {
        $("#clic").css("background-color", "white");
        $("#clic").css("color", "black");

    }
    else {
        $("#clic").css("background-color", "black");
        $("#clic").css("color", "white");
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
