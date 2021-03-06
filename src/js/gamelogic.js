/**
 * Created by rohin on 2/7/2016.
 */
var image_array = ['bart.png','bart.png','brian.png','brian.png','lisa.png','lisa.png','peter.png','peter.png','spongebob.png','spongebob.png','stewie.png','stewie.png','mickey.png','mickey.png','minnie.png','minnie.png','donald.png','donald.png','pluto.png','pluto.png','goofy.png','goofy.png','homer.png','homer.png'];
var image_values = [];
var image_ids = [];
var flipped_divs = 0;

function startGame(image_div, val){
    if(image_div.innerHTML == "" && image_values.length < 2){
        image_div.style.background = '#FFF';
        image_div.innerHTML = '<img src="img/'+val+'"/>';
        if(image_values.length == 0){
            image_values.push(val);
            image_ids.push(image_div.id);
        } else if(image_values.length == 1){
            image_values.push(val);
            image_ids.push(image_div.id);
            if(image_values[0] == image_values[1]){
                flipped_divs += 2;
                image_values = [];
                image_ids = [];
                if(flipped_divs == image_array.length){
                    alert("You've won. Start again?");
                    document.getElementById('gameBoard').innerHTML = "";
                    newGame();
                }
            } else {
                function closeOpenImages(){
                    var open_image_1 = document.getElementById(image_ids[0]);
                    var open_image_2 = document.getElementById(image_ids[1]);
                    open_image_1.innerHTML = "";
                    open_image_2.innerHTML = "";
                    image_values = [];
                    image_ids = [];
                }
                setTimeout(closeOpenImages, 700);
            }
        }
    }
}

Array.prototype.shuffle = function(){
    var x = this.length, y, temp;
    while(--x > 0){
        y = Math.floor(Math.random() * (x+1));
        temp = this[y];
        this[y] = this[x];
        this[x] = temp;
    }
}

function newGame(){
    flipped_divs = 0;
    var board = '';
    image_array.shuffle();
    for(var i = 0; i < image_array.length; i++){
        board += '<div id="tile_'+i+'" onclick="startGame(this,\''+image_array[i]+'\')"></div>';
    }
    document.getElementById('gameBoard').innerHTML = board;
}

