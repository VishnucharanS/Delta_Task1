var r=''
var lst1 = []
var lst2 = []
var lst3 = []
var k=0
var l=0
var clkd;
var smid;
var score=0;
var aud = document.getElementById("audio")
var aud1 =  document.getElementById("audio1")
var aud2 =  document.getElementById("audio2")
function rules() {
  alert("General Rules: \n 1.The game is simple, you have to click on the tiles which blinks \n2. For each level there will be an increase in the number of tiles blinking \n3.The level which has all its tiles blinking is the last level \n4.You will see the specific rules of a mode once you choose the mode you want to play  ");
}
function randomnes(){
  var lst = ["1","2",'3','4','5','6','7','8','9','10','11','12','13','14','15','16'];
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
function scores(){
  document.getElementById("score").innerHTML="Score: " + score
}
function timeout(){
  alert("Timed out")
  location.reload()
}
function blackglow(someid){
  document.getElementById("g4"+someid).classList.add("glowon");
  setTimeout(function(){document.getElementById("g4"+someid).classList.remove("glowon")},750);
}
function glowlist(){
  lst2.push(lst1[0]);
  lst1.splice(0,1);
}
function game(clic){
  scores()
  document.getElementById("start").style.display= "none";
  if (lst1.length===0){
    for (i=0;i<17;i++){
      document.getElementById("g4"+i).classList.add("right")
    }
    aud2.play()
    setTimeout(function(){
      if (confirm("Woww!!!!!! You've finished it\nWant to play again?")) {
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
      },4000);
    location.reload()
  }
  if (lst3.length === 0){
    glowlist()
    for (i = 0; i<lst2.length; i++){
      lst3[i] = lst2[i]
    }
    for (let j = 0; j < lst2.length; j++){
      blackglow(lst2[j]); 
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
      console.log(lst1)
      console.log(lst2)
      console.log(lst3)
      if (lst3.length==0){
        setTimeout(game("g44"),400)
      }
    }
    else{
      document.getElementById(smid).classList.add("wrong");
      aud1.play();
      setTimeout(function(){
      if (confirm("Want to retry?")) {
        setTimeout(function(){document.getElementById(smid).classList.remove("wrong")},0);
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
        setTimeout(function(){document.getElementById(smid).classList.remove("wrong")},0);
        location.reload();
      }
      },3000);
    }
  }
}
