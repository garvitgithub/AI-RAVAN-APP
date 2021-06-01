function setup(){
    canvas=createCanvas(600,500)
    canvas.center();
    video=createCapture();
    video.hide();
    pn=ml5.poseNet(video,modelLoaded);
    pn.on("pose",gotPoses);
    }
    function modelLoaded(){
    console.log("model has Loaded");
    }
    function draw(){
    image(video,0,0,600,500);
    if(scoreleftwrist<0.2){
    circle(leftwristx,leftwristy,20);
    if(leftwristx<0 && leftwristy>=100);
    }}
    var gana="";
    function preload(){
    gana=loadSound("[MP3DOWNLOAD.TO] Ravan Ravan Hoon Main _  Rock D (Official Song) Latest Hindi Songs 2020 _ Geet MP3-64k.mp3");
    }
    function play(){
    gana.play();
    }
    rightwristx=0;
    rightwristy=0;
    leftwristx=0;
    leftwristy=0;
    function gotPoses(results){
    if(results.length>0){
    console.log(results);
    rightwristx=results[0].pose.rightWrist.x;
    rightwristy=results[0].pose.rightWrist.y;
    leftwristx=results[0].pose.leftWrist.x;
    rightwristy=results[0].pose.rightWrist.y;
    scorerightwrist=results[0].pose.keypoint[10];
    scoreleftwrist=result[0].pose.keypoint[9];
    }
    }