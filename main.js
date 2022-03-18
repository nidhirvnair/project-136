status="";
objects=[];
function preload(){}

function setup(){
canvas=createCanvas(380,380);   
video=createCapture(VIDEO);
video.hide();
}

function start(){
    objectDetector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="Status:Detecting objects";
    object_name=document.getElementById("text_area").value;
}

function modelLoaded(){
    console.log("Model is loaded!!");
    status=true;
}

function draw(){
    image(video,0,0,380,380);
    if(status !=""){
        for(i=0;i<objects.length;i++){
            document.getElementById("status").innerHTML="Status:objects detected";
            fill("#4287f5");
            percent=floor(objects[i].confidence*100);
            text(objects[i].label + " "+percent+"%",objects[i].x+15,objects[i].y+15);
            nofill();
            stroke("#4287f5");
            rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
        }
    }
}

function gotResults(error,results){
    if(error){
        console.error(error);
    }
    console.log(results);
    objects=results;
}


