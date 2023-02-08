noseX=0;
noseY=0;
img="";
leftEyeX=0,leftEyeY=0;

function preload(){
img=loadImage("nose.png");
img1=loadImage("hat.png");
}
function setup(){
    Canvas=createCanvas(400, 400);
    Canvas.center();
    video=createCapture(VIDEO);
    video.size(400,400);
    video.hide();
    poseNet=ml5.poseNet(video, modelLoaded );
    poseNet.on('pose',gotposes);
}
function draw(){
    image(video,0,0,400,400);
image(img,noseX-40,noseY-20,90,90);
image(img1,leftEyeX-120,leftEyeY-200,200,200);
}
function takeSnapshot(){
    save("filterimage.png")
}
function modelLoaded(){
    console.log("model has been initialized")
}
function gotposes(results){
    if(results.length>0){
        console.log(results)
        console.log("noseX="+results[0].pose.nose.x);
        console.log("noseY="+results[0].pose.nose.y);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        leftEyeX=results[0].pose.leftEye.x;
        leftEyeY=results[0].pose.leftEye.y;
    }
}