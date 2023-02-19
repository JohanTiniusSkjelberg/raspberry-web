let timer = 8;
let minutter = 0;


function doDate() {
    var dt = new Date();
    var time2 = parseInt(document.getElementById('time').innerHTML);
    var min2 = parseInt(document.getElementById('minutt').innerHTML);
    var total_min2 = time2 * 60 + min2;
    var dthour = parseInt(dt.getHours());
    var dtmin = parseInt(dt.getMinutes());
    const total_min_now = dthour * 60 + dtmin;
    var finale = total_min2 - total_min_now;
    var finH = Math.floor(finale / 60);
    var finM = (finale % 60).toString();
    finM = finM.toString().length == 1 ? "0" + finM : finM;
    var news = finH.toString() + ":" + finM;
    //document.getElementById('date-time').innerHTML = news;
}
//setInterval(doDate, 500);

function first_dropdown() {
    let drop = document.getElementById('myDropdown1');
    for (let i = 0; i < 24; i++) {
        let ny = document.createElement('a');
        ny.setAttribute('class', 'en');
        ny.innerHTML = (i).toString();
        drop.appendChild(ny);
    }
}
function second_dropdown() {
    let drop = document.getElementById('myDropdown2');
    for (let i = 0; i < 60; i++) {
        let ny = document.createElement('a');
        ny.setAttribute('class', 'to');
        ny.innerHTML = (i).toString();
        drop.appendChild(ny);
    }
}
function myFunction1() {
                    document.getElementById("myDropdown1").classList.toggle("show1");
                    let obj = $("#time")
                    let position = obj.position();
                    position.top += parseInt(obj.css('margin-top'), 10);
                    position.left += parseInt(obj.css('margin-left'), 10);
                    console.log(position);
                    $("#myDropdown1").css("top", position["top"]);
                    $("#myDropdown1").css("left", position["left"]);
                }
                function myFunction2() {
                    document.getElementById("myDropdown2").classList.toggle("show2");
                    let obj = $("#minutt")
                    let position = obj.position();
                    position.top += parseInt(obj.css('margin-top'), 10);
                    position.left += parseInt(obj.css('margin-left'), 10);
                    $("#myDropdown2").css("top",position["top"]);
                    $("#myDropdown2").css("left",position["left"]);
                }
function close_dropdown() {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show1')) {
            openDropdown.classList.remove('show1');
        }
        if (openDropdown.classList.contains('show2')) {
            openDropdown.classList.remove('show2');
        }
    }
}

window.onclick = function (event) {
    if (!event.target.matches('.time') && !event.target.matches('.minutt') && !event.target.matches('.en') && !event.target.matches('.to')) {
        close_dropdown();
    }
    if (event.target.matches('.en')) {
        let number_clicked = event.target.innerHTML;
        var dropdowns = document.getElementById('time');
        dropdowns.innerHTML = number_clicked <= 9 ? '0' + number_clicked : number_clicked;
        timer = number_clicked;
        close_dropdown();
    }
    if (event.target.matches('.to')) {
        let number_clicked = event.target.innerHTML;
        var dropdowns = document.getElementById('minutt');
        dropdowns.innerHTML = number_clicked <= 9 ? '0' + number_clicked : number_clicked;
        minutter = number_clicked;
        close_dropdown();
    }
}
first_dropdown();
second_dropdown();
var onOff = $('#clic').text();
if (onOff=="on") {
    $("#clic").css("background-color","palegreen");
}
else {
    $("#clic").css("background-color","lightcoral");
}
