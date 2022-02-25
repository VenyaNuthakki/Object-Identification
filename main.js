img="";
status="";

function preload(){
    img=loadImage("dog_cat.jpg")
}

function setup(){
    canvas=createCanvas(640, 420);
    canvas.center();
    objectdetector=ml5.objectDetector("cocossd",modelloaded);
    document.getElementById("status").innerHTML="Status : Detecting Objects";
}

function modelloaded(){
    console.log("modelloaded");
    status=true;
    objectdetector.detect(img,getresult);
}

function getresult(error,results){
    if(error){
        console.log(error);
    }
    else{
        console.log(results);
    }
}

function draw(){
    image(img,0,0,640,420);
    fill("coral");
    text("dog",50,80);
    textSize(20);
    noFill();
    stroke("purple")
    rect(40,60,350,300); 
    fill("coral");
    text("cat",300,130);
    textSize(20);
    noFill();
    stroke("purple")
    rect(280,80,300,300); 
}