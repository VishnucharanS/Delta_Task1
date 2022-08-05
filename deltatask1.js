var lst1 = []
var lst2 = []
var lst3 = []
var k=0
var clkd;
var smid;
var score=0;
var aud = document.getElementById("audio")
var aud1 =  document.getElementById("audio1")
var aud2 =  document.getElementById("audio2")
function rules() {
  alert("General Rules: \n 1.The game is simple, you have to click on the tiles which blinks \n2. For each level there will be an increase in the number of tiles blinking \n3.The level which has all its tiles blinking is the last level \n4.You will see the specific rules of a mode once you choose the mode you want to play  ");
}
function rules4x4(){
  alert("The order you click does not matter, just click the correct tiles")
}
function rules6x6(){
  alert("You have to click in the same order, if not you lose")
}
function randomnes(){
  var lst = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16']
  k = lst.length;
  while (k-- && k>=0) {
    l=Math.floor(Math.random()*(k));
    lst1.push(lst[l]);
    lst.splice(l,1);
  }
}
function randomnes6(){
  var lst = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36']
  k = lst.length;
  while (k-- && k>=0) {
    l=Math.floor(Math.random()*(k));
    lst1.push(lst[l]);
    lst.splice(l,1);
  }
}
function start(){
  game("g44")
  scores()
}
function start6(){
  game6("g614")
  scores()
}
function scores(){
  document.getElementById("score").innerHTML="Score: " + score
}
function timeout(){
  alert("Timed out")
  location.reload()
}
function blackglow(someid){
  setTimeout(function(){document.getElementById("g4"+someid).classList.add("glowon")},800);
  setTimeout(function(){document.getElementById("g4"+someid).classList.remove("glowon")},1800);
}
function blackglow6(someid){
  setTimeout(function(){document.getElementById("g6"+someid).classList.add("glowon")},800);
  setTimeout(function(){document.getElementById("g6"+someid).classList.remove("glowon")},1800);
}
function glowlist(){
  lst2.push(lst1[0]);
  lst1.splice(0,1);
}
function game(clic){
  scores()
  document.getElementById("start").style.display= "none";
  document.getElementById("score").style.display="inline";
  if (lst3.length === 0){
    if (lst2.length===16){
      for (let i=1;i<17;i++){
      document.getElementById("g4"+i).classList.add("right")
      setTimeout(function(){document.getElementById(clic).classList.add("right")},400);
      }
      aud2.play();
      setTimeout(function(){
        if (confirm("Woww!!!!!! You've finished it\nWanna play again?")){
          for (let i=1;i<17;i++){
            document.getElementById("g4"+i).classList.remove("right")
          }
          document.getElementById("4x4").style.display="grid";
          document.getElementById("start").style.display="inline";
          document.getElementById("score").style.display="none";
          lst1=[]
          lst2=[]
          lst3=[]
          score=0
          randomnes()
        } 
        else {
          location.reload();
        }
        },7000);
    }
    else{
    glowlist()
    for (let i = 0; i<lst2.length; i++){
      lst3[i] = lst2[i]
    }
    var j = 0
    while(j<lst2.length){
      var ide= lst2[j]
      j=j+1
      setTimeout(blackglow(ide),250); 
    } 
    }
  }
  else if (lst3.length != 0){
    smid = clic
    if (smid.length===4){
      clkd = smid[2]+smid[3]}
    else if (smid.length===3){
      clkd = smid[2]
    }
    console.log(clkd)
    if (lst3.includes(clkd)){
      aud.play();
      document.getElementById(smid).classList.add("right");
      setTimeout(function(){document.getElementById(smid).classList.remove("right")},300);
      console.log(clkd)
      lst3.splice(lst3.indexOf(clkd), 1)
      score = score + 10
      scores()
      if (lst3.length==0){
        setTimeout(game("g44"),400)
      }
    }
    else{
      document.getElementById(smid).classList.add("wrong");
      for (let i = 0; i<lst3.length;i++){
        var ids=lst3[i]
        document.getElementById("g4"+ids).classList.add("right");}
      aud1.play();
      setTimeout(function(){
      if (confirm("Want to retry?")) {
          setTimeout(function(){document.getElementById(smid).classList.remove("wrong")},0);
          for (let i = 0; i<lst3.length;i++){
            var ids=lst3[i]
            document.getElementById("g4"+ids).classList.remove("right");}
        document.getElementById("4x4").style.display="grid";
        document.getElementById("start").style.display="inline";
        document.getElementById("score").style.display="none";
        lst1=[]
        lst2=[]
        lst3=[]
        score=0
        randomnes()
        console.log(lst1)
        console.log(lst2)
        console.log(lst3)
      } 
      else {
        location.reload();
      }
    },3000);
    }
  }
}




function game6(clic){
  scores()
  document.getElementById("start6").style.display="none";
  document.getElementById("score").style.display="inline";
  if (lst3.length === 0){
    if (lst2.length===36){
      for (let i=1;i<37;i++){
      document.getElementById("g6"+i).classList.add("right")
      setTimeout(function(){document.getElementById(clic).classList.add("right")},400);
      }
      aud2.play();
      setTimeout(function(){
        if (confirm("Woww!!!!!! You've finished it\nWanna play again?")){
          for (let i=1;i<37;i++){
            document.getElementById("g6"+i).classList.remove("right")
          }
          document.getElementById("6x6").style.display="grid";
          document.getElementById("start").style.display="inline";
          document.getElementById("score").style.display="none";
          lst1=[]
          lst2=[]
          lst3=[]
          score=0
          randomnes6()
        } 
        else {
          location.reload();
        }
        },7000);
    }
    else{
    glowlist()
    for (let i = 0; i<lst2.length; i++){
      lst3[i] = lst2[i]
    }
    var j = 0
    while(j<lst2.length){
      var ide= lst2[j]
      j=j+1
      setTimeout(blackglow6(ide),250); 
    } 
    }
  }
  else if (lst3.length != 0){
    smid = clic
    if (smid.length===4){
      clkd = smid[2]+smid[3]}
    else if (smid.length===3){
      clkd = smid[2]
    }
    if (lst3[0]===clkd){
      aud.play();
      document.getElementById(smid).classList.add("right");
      setTimeout(function(){document.getElementById(smid).classList.remove("right")},300);
      lst3.splice(0,1)
      score = score + 10
      scores()
      if (lst3.length==0){
        setTimeout(game6("g64"),400)
      }
    }
    else{
      document.getElementById(smid).classList.add("wrong");
      document.getElementById("g6"+lst3[0]).classList.add("right")
      setTimeout(function(){for (let i = 0; i<lst3.length;i++){
        var ids=lst3[i]
        document.getElementById("g6"+ids).classList.add("right");}},1000)
      aud1.play();
      setTimeout(function(){
      if (confirm("Want to retry?")) {
          setTimeout(function(){document.getElementById(smid).classList.remove("wrong")},0);
          for (let i = 0; i<lst3.length;i++){
            var ids=lst3[i]
            document.getElementById("g6"+ids).classList.remove("right");}
        document.getElementById("6x6").style.display="grid";
        document.getElementById("start6").style.display="inline";
        document.getElementById("score").style.display="none";
        lst1=[]
        lst2=[]
        lst3=[]
        score=0
        randomnes6()
      } 
      else {
        location.reload();
      }
    },3000);
    }
  }
}
