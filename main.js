var canvas = new fabric.Canvas("myCanvas");
width_block = 30;
height_block = 30;
player_x = 10;
player_y = 10;
var player_object = " ";
var block_image = " ";
function player_update(){
    fabric.Image.fromURL("player.png", function(Img){
        player_object = Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(player_object);
    });
}
function new_image(get_image){
    fabric.Image.fromURL(get_image, function(Img){
        block_image = Img;
        block_image.scaleToWidth(width_block);
        block_image.scaleToHeight(height_block);
        block_image.set({
            top:player_y,
            left:player_x
        });
        canvas.add(block_image);
});
}
window.addEventListener("keydown", my_keydown);
function my_keydown(e){
    key_pressed = e.keyCode;
    console.log(key_pressed);
    if(e.shiftKey == true && key_pressed == "80"){
        console.log("p and shift key pressed together");
        width_block = width_block + 10;
        height_block = height_block + 10;
        document.getElementById("current-width").innerHTML = width_block;
        document.getElementById("current-height").innerHTML = height_block;
    }
    if(e.shiftKey == true && key_pressed == "77"){
        console.log("m and shift key pressed together");
        width_block = width_block - 10;
        height_block = height_block - 10;
        document.getElementById("current-width").innerHTML = width_block;
        document.getElementById("current-height").innerHTML = height_block;
    }
    if(key_pressed == "38"){
        Up();
        console.log("up");
    }
    if(key_pressed == "40"){
        Down();
        console.log("down");
    }
    if(key_pressed == "37"){
        Left();
        console.log("left");
    }
    if(key_pressed == "39"){
        Right();
        console.log("right");
    }
    if(key_pressed == "87"){
        new_image("wall.jpg");
        console.log("w");
    }
    if(key_pressed == "71"){
        new_image("ground.png");
        console.log("g");
    }
    if(key_pressed == "76"){
        new_image("light_green.png");
        console.log("l");
    }
    if(key_pressed == "84"){
        new_image("trunk.jpg");
        console.log("t");
    }
    if(key_pressed == "82"){
        new_image("roof.jpg");
        console.log("r");
    }
    if(key_pressed == "89"){
        new_image("yellow_wall.png");
        console.log("y");
    }
    if(key_pressed == "68"){
        new_image("dark_green.png");
        console.log("d");
    }
    if(key_pressed == "85"){
        new_image("unique.png");
        console.log("u");
    }
    if(key_pressed == "67"){
        new_image("cloud.jpg");
        console.log("c");
    }
}
function Up(){
    if(player_y>=0){
        player_y = player_y - height_block;
        console.log("Block image height = "+height_block);
        console.log("When up arrow key is pressed x = "+player_x +", y = "+player_y);
        canvas.remove(player_object);
        player_update();
    }
}
function Down(){
    if(player_y<=500){
        player_y = player_y + height_block;
        console.log("Block image height = "+height_block);
        console.log("When down arrow key is pressed x = "+player_x +", y = "+player_y);
        canvas.remove(player_object);
        player_update();
    }
}
function Left(){
    if(player_x>0){
        player_x = player_x - width_block;
        console.log("Block image width = "+width_block);
        console.log("When left arrow key is pressed x = "+player_x +", y = "+player_y);
        canvas.remove(player_object);
        player_update();
    }
}
function Right(){
    if(player_x<=850){
        player_x = player_x + height_block;
        console.log("Block image width = "+height_block);
        console.log("When right arrow key is pressed x = "+player_x +", y = "+player_y);
        canvas.remove(player_object);
        player_update();
    }
}