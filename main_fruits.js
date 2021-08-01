
img="";
status="";
object=[];

function preload(){
    img=loadImage("fruits.jpg")
}

function setup(){
    canvas=createCanvas(250,250)
    canvas.center()

    objectDetector=ml5.objectDetector('cocossd',modelLoaded)
    document.getElementById("status").innerHTML="Status:detecting objects"
}

function modelLoaded(){
    console.log(" Model Loaded");
    status=true;
    objectDetector.detect(img,gotresult)
}

function gotresult(error,result){
    if(error){
        console.log(error)
    }
    else{
        console.log(result)
        object=result;
    }
}

function draw(){
    image(img,0,0,250,250)

    if (status!= "" ){
        document.getElementById("status").innerHTML="Status: objects detected "

        for (i=0; i<object.length; i++){
            fill("red")
            percent=floor(object[i].confidence*100)
            text(object[i].label+" "+percent+"%",object[i].x+15,object[i].y+15)
            noFill();
            stroke("red");
            rect(object[i].x,object[i].y,object[i].width,object[i].height)
        }
    }
    
}