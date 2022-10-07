
var tc ={}; //defineing class tc
tc.initgame = function(){
    clearExitGame(); 
}

tc.clearExitGame = function(){
    $("#divGame .tcell").show()
    $("#divGame .tcell").text('')  
}

tc.handleSymbolPlace = function(positionNo){
    var divTcellId = "div" + positionNo;
    $("#" + divTcellId).text(tc.getRandomSymbol("retSymbol"));
}

tc.getRandomSymbol = function(){
    var retSymbol = "";
    var symbolCode;
    symbolCode = Math.floor(Math.random() * (3-1)+1);
    if (symbolCode == 1){
        retSymbol = "O"
    } 
    else {
        retSymbol = "X"
    }
    return retSymbol;
}

var div1 = $('#div1');
var div2 = $('#div2');
var div3 = $('#div3');
var div4 = $('#div4');
var div5 = $('#div5');
var div6 = $('#div6');
var div7 = $('#div7');
var div8 = $('#div8');
var div9 = $('#div9');


tc.winChech = function(){
    if(div1.hasClass('O') && div2.hasClass('O') && div3.hasClass('O') ||
    div4.hasClass('O') && div5.hasClass('O') && div6.hasClass('O') ||
    div7.hasClass('O') && div8.hasClass('O') && div9.hasClass('O') ||
    div1.hasClass('O') && div4.hasClass('O') && div7.hasClass('O') ||
    div2.hasClass('O') && div5.hasClass('O') && div8.hasClass('O') ||
    div3.hasClass('O') && div6.hasClass('O') && div9.hasClass('O') ||
    div1.hasClass('O') && div5.hasClass('O') && div9.hasClass('O') ||
    div3.hasClass('O') && div5.hasClass('O') && div7.hasClass('O')
    )
        {
            alert('O Won The Game!')
        }
    else if(div1.hasClass('X') && div2.hasClass('X') && div3.hasClass('X') ||
    div4.hasClass('X') && div5.hasClass('X') && div6.hasClass('X') ||
    div7.hasClass('X') && div8.hasClass('X') && div9.hasClass('X') ||
    div1.hasClass('X') && div4.hasClass('X') && div7.hasClass('X') ||
    div2.hasClass('X') && div5.hasClass('X') && div8.hasClass('X') ||
    div3.hasClass('X') && div6.hasClass('X') && div9.hasClass('X') ||
    div1.hasClass('X') && div5.hasClass('X') && div9.hasClass('X') ||
    div3.hasClass('X') && div5.hasClass('X') && div7.hasClass('X'))
        {
            alert('X Won The Game!')
        }
    else{
        alert('Game Draw!')
    }
    }


/*tcells = document.querySelectorAll('.tcell')
tcells = Array.from(tcells)

player = "X"

tcells.forEach(function(tcell){
    tcell.addEventListener('click',function(){
        if(tcell.innerText.trim() != "") return;
        tcell.innerText = player;
        player = (player == "X") ? "O":"X";
    })
})*/
