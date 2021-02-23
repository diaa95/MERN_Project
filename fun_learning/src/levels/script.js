var leftvalue= 450, topvalue = 100;
function update(){
    document.getElementById("character").style.left = leftvalue+"px";
    document.getElementById("character").style.top = topvalue+"px";
    document.getElementById("character").style.backgroundImage = Down1;
}
document.onkeydown = function(e) {
    console.log('e: ', e);
    console.log('e.keycode: ', e.keyCode);
    if (e.keyCode == 37 && leftvalue>0){ //left
            leftvalue = leftvalue -10;
            direction = left;
    }
    else if(e.keyCode == 39 && leftvalue<500){//right
            leftvalue = leftvalue +10;
            direction = right;
    }
    else if(e.keyCode == 40 && topvalue<500){//down
        topvalue = topvalue +10;
        direction = down;
    }
    else if(e.keyCode == 38 && topvalue>0){
        topvalue = topvalue -10;
        direction = top;
    }

    update();
}
