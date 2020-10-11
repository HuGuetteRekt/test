



function goUp() {
    var moveEl = document.getElementById("ascenseur"),       
    currTop = parseInt(moveEl.style.top || 0);     
    moveEl.style.top = (currTop + 10) + 'px';   
}

function goDown() {
    var moveEl = document.getElementById("ascenseur"),       
    currTop = parseInt(moveEl.style.top || 0);     
    moveEl.style.top = (currTop - 10) + 'px'; 
}

function myFunctionColor() {
    document.getElementById('ascenseur').style.backgroundColor = "red";
}