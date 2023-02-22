let timer = 8;
let minutter = 0;

window.onload = function() {
    first_dropdown();
    second_dropdown();
    var onOff = $('#clic').text();
    if (onOff == "on") {
        $("#clic").css("background-color", "white");
        $("#clic").css("color", "black");

    }
    else {
        $("#clic").css("background-color", "black");
        $("#clic").css("color", "white");
    }
}
function doDate() {
    let date = new Date();
    let timerdiff = $("#time").text()
    let minutterdiff = $("#minutt").text()
    let month = date.getMonth() + 1
    let day = date.getDate() + 1
    let newdate = new Date(date.getFullYear(),month,day,parseInt(timerdiff),parseInt(minutterdiff))
    var timeDiff = newdate-date;
    var diffHours = hours = Math.floor((timeDiff / (1000 * 60 * 60)) % 24);
    var diffMinutes = Math.floor((timeDiff / (1000 * 60)) % 60);
    $(".wakeuptime").text(`${diffHours} : ${diffMinutes}`)
    console.log(diffHours,diffMinutes);
}

setInterval(doDate, 1000);

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
        $("#myDropdown1").css("top", position["top"]);
        $("#myDropdown1").css("left", position["left"]);
        let offset = document.querySelector(".en").offsetHeight;
        $("#myDropdown1").scrollTop(parseInt(obj.text())*offset);
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
