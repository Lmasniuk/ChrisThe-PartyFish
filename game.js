var map_width = 20;
var map_height = 14;
var grid;
var player_x;
var player_y;
var trophy_x;
var trophy_y;
var bubbles_x;
var bubbles_y;
var speaker_x;
var speaker_y;
var orientation;
var tile;
var walk_level;
bubbles_status;
speaker_status;



function initialize()
    {

                /*
                *
                *     Below is a frame of reference of how the tank sits.
                *
                *
                *     left side
                * ***************************
                *                           *
                *                           *
           top  *                           * btm
           of   *                           * of
           tank *                           * tank
                *                           *
                *                           *

                *                           *
                *                           *
                * ***************************
                *     right side
                * */



        grid = new Array();
        grid[0] =  new Array(5,5,5,5,5,5,5,5,5,5,5,5,5,5);
        grid[1] =  new Array(5,3,3,3,3,3,1,1,1,6,2,2,2,5);
        grid[2] =  new Array(5,3,3,3,3,6,1,1,1,6,2,2,2,5);
        grid[3] =  new Array(5,3,3,3,3,6,1,1,1,6,2,2,2,5);
        grid[4] =  new Array(5,3,3,3,3,6,1,1,1,6,6,2,2,5);
        grid[5] =  new Array(5,3,3,3,3,6,1,1,1,1,6,2,2,5);
        grid[6] =  new Array(5,3,3,3,3,6,1,1,1,1,6,2,2,5);
        grid[7] =  new Array(5,3,3,3,3,6,1,1,1,1,6,6,2,5);
        grid[8] =  new Array(5,3,6,6,6,6,1,6,6,6,6,2,2,5);
        grid[9] =  new Array(5,3,3,3,6,6,1,2,2,2,2,2,2,5);
        grid[10] = new Array(5,3,3,3,3,6,1,6,6,6,6,6,6,5);
        grid[11] = new Array(5,3,3,3,3,6,1,1,1,1,1,1,1,5);
        grid[12] = new Array(5,3,3,3,6,6,1,1,1,1,1,1,1,5);
        grid[13] = new Array(5,3,3,3,3,6,1,6,6,6,6,6,6,5);
        grid[14] = new Array(5,3,6,6,6,6,1,1,1,1,1,1,1,5);
        grid[15] = new Array(5,3,3,3,3,6,6,6,6,6,6,6,1,5);
        grid[16] = new Array(5,3,4,4,4,6,1,1,1,1,1,1,1,5);
        grid[17] = new Array(5,3,3,3,4,6,1,6,6,6,6,6,6,5);
        grid[18] = new Array(5,4,4,4,4,6,1,1,1,1,1,1,1,5);
        grid[19] = new Array(5,5,5,5,5,5,5,5,5,5,5,5,5,5);
        player_x = 18;
        player_y = 12;
        trophy_x = 17;
        trophy_y = 3;
        bubbles_x = 1;
        bubbles_y = 12;
        speaker_x = 7;
        speaker_y = 9;
        orientation = "left";
        bubbles_status = false;
        speaker_status = false;
        walk_level = 1;
        tile = new Array(
                '#FFFFFF',	/* not used */
                '#0066FF',	/* deeper water */
                'teal',		/* dance floor */
                '#5C9DFF',	/* seaWeed */
                'brown',	/* crate sitting on target */
                'black',	/* brick */
                '#5C9DFF',	/* shallower water */
                'purple'
        );
        document.getElementById("crillzPlaya").style.visibility = 'hidden';
        draw_background();
        position_chris();
        position_trophy();
        position_bubbles();
        position_speaker();
}

function draw_background()
			{
                for (var y = 0; y < map_height; ++y)
                {
                for (var x = 0; x < map_width; ++x)
                {
                    var box = document.getElementById('box_' + x + '_' + y);

                    if (grid[x][y] == 6 ){
                        box.style.backgroundImage = "url('imgs/seaWeed.png')";

                    }else if(grid[x][y] == 5){
                        box.style.backgroundImage = "url('imgs/border.png')";
                    }else if(grid[x][y] == 2){
                        box.style.backgroundImage = "url('imgs/dancefloor.png')";
                    } else {
                        box.style.backgroundColor = tile[grid[x][y]];
                    }
                }
            }
}

function position_chris(){
    var chris = document.getElementById('chrisCrillz');
    switch(orientation){

        case 'left':
        chris.src = "imgs/chrisLeft.png";
        break;

        case 'right':
        chris.src = "imgs/chris.png";
        break;

        case 'up':
        chris.src = "imgs/chrisUp.png";
        break;

        case 'down':
        chris.src = "imgs/chrisDown.png";
        break;
    }
    chris.style.position = 'absolute';
    chris.style.left = 40 * player_x + 'px';
    chris.style.top = 40 * player_y + 'px';
}


function position_trophy(){

    var trophy = document.getElementById('theTrophy');
    trophy.style.position = 'absolute';
    trophy.style.left =  40 * trophy_x + 'px';
    trophy.style.top =  40 * trophy_y + 'px';

}
function position_bubbles(){

    var bubblez = document.getElementById('theBubs');
    bubblez.style.position = 'absolute';
    bubblez.style.left =  40 * bubbles_x + 'px';
    bubblez.style.top =  40 * bubbles_y + 'px';
}

function position_speaker(){

    var speakz = document.getElementById('theSpeaker');
    speakz.style.position = 'absolute';
    speakz.style.left =  40 * speaker_x + 'px';
    speakz.style.top =  40 * speaker_y + 'px';
}

function safe_check(x, y){
    if (x >= 0 && x < map_width && y >= 0 && y < map_height){
        return grid[x][y];
    }
    return -1;
}

function bubbles_check(x, y){
    if (x == 1 && y == 12 && bubbles_status == false){
        alert("Now you drank that good bottle of bubbly, you can breath out of water.\n Now go get that trophy!");
        bubbles_status = true;
        walk_level = 3;
        document.getElementById("theBubs").style.visibility = 'hidden';
    }
}
function music_check(x, y){
    if (x == 7 && y == 9 && speaker_status == false ){
        alert("Time to get funky! \n Hit that dance floor and get some of that bubbly so you can go outside!");
        music_status = true;
        walk_level = 2;
        speaker_status = true;
        document.getElementById("theSpeaker").style.visibility = 'hidden';
        document.getElementById("crillzPlaya").play();
    }
}
function trophy_check(x, y){
    if (x == 17 && y == 3){
        alert("You Win!");
        document.getElementById("theTrophy").style.visibility = 'hidden';
    }
}

function handle_key(e){

    var move_x = 0;
    var move_y = 0;

    switch(String.fromCharCode(e.which).toLowerCase()){

        case 'w':
        move_y = -1;
        orientation = "up";
        break;

        case 'a':
        move_x = -1;
        orientation = "left";
        break;

        case 's':
        move_y = 1;
        orientation = "down";
        break;

        case 'd':
        move_x = 1;
        orientation = "right";
        break;

        default:
        return false;

    }
    var s = safe_check(player_x + move_x, player_y + move_y);
    if (s > walk_level){
        return true;
    }

    player_x += move_x;
    player_y += move_y;
    bubbles_check(player_x , player_y);
    music_check(player_x , player_y);
    trophy_check(player_x , player_y);
    position_chris();


    return true;
}

