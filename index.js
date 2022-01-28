//jshint esversion:6

const express= require("express");
const bodyParser = require("body-parser");

const app= express();


app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static("public"));


app.get("/",function(res,req){
    req.sendFile(__dirname+ "/start.html");
});
app.post("/",function (req, res){
    res.sendFile(__dirname+"/index.html");
});




app.listen(3000,function(){
    console.log("Your are on port 3000");

});
/*var num=document.querySelectorAll('.b').length;
console.log(num);
var p=0;
var ps=0;
var cs=0;
for(var i=0;i<num;i++)
{
document.querySelectorAll(".b")[i].addEventListener("click",function(){
    var s=this.innerHTML;
    console.log(s);
    var x=document.getElementById("playimage");

    switch (s)
    {
        case "rock":document.getElementById("play").innerHTML="rock";
                    p=1;
                    x.src="r2.png";
        break;
        case "paper":document.getElementById("play").innerHTML="paper";
                     p=2;
                     x.src="p2.png";
        break;
        case "scissor":document.getElementById("play").innerHTML="scissor";
                       p=3;
                       x.src="s2.png";
        break;
    }
    n=Math.random();
    n=Math.ceil(n*3);
    var y=document.getElementById("compimage")

    switch(n){
        case 1:document.getElementById("comp").innerHTML="rock";
               y.src="r2.png";
        break;
        case 2:document.getElementById("comp").innerHTML="paper";
               y.src="p2.png";
        break;
        case 3:document.getElementById("comp").innerHTML="scissor";
               y.src="s2.png";

        break;

    }
    if(p==1&&n==3){
        ps++;
    }
    else if(p==1&& n==2){
        cs++;
    }
    else if(p==2&&n==1)
    {
        ps++;
    }
    else if(p==2&&n==3)
    {
        cs++;
    }
    else if(p==3&&n==1)
    {
       cs++;
    }
    else if(p==3&&n==2){
      ps++;
    }
    document.getElementById("playscore").innerHTML=ps;
    document.getElementById("compscore").innerHTML=cs;



});}*/