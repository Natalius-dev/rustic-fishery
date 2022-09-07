function lerp(x, minX, maxX, minY, maxY)
{
    return (x-minX) * (maxY-minY)/(maxX-minX) + minY;
}

fish_red = [
    ["flagtail", "assets/fish_ginyugoi.png"],
    ["amberjack", "assets/fish_buri.png"],
    ["sweeper", "assets/fish_hatanpo.png"],
    ["mullet", "assets/fish_bora.png"],
    ["char", "assets/fish_iwana.png"]
];

fish_orange = [
    ["black scraper", "assets/fish_umadura_hagi.png"],
    ["anchovy", "assets/fish_katakuchi_iwashi.png"],
    ["salmon", "assets/fish_benizake.png"]
]

fish_yellow = [
    ["sea roach", "assets/bug_funamushi.png"]
]

fish_green = [
    ["message in a bottle", "assets/bin_tegami.png"],
    ["pudgy cusk-eel", "assets/shinkai_fish_sokobouzu.png"]
]

const fish_dom = document.getElementById("fish_dom");
const fish_text = document.getElementById("fish_text");
const stats = document.getElementById("stats-content");
const marker = document.getElementById("marker");
const reveal = document.getElementById("reveal");

const green_bar = 4;
const yellow_bar = 16.667;
const orange_bar = 50;

const vowel = new RegExp("([aiueo])");

function getFish(fish_color)
{
    var size = randomInterval(35,52.5);
    var rot = randomInterval(-30,30);
    let fish = parseInt(randomInterval(0,fish_color.length-1));
    
    fish_dom.setAttribute("src", fish_color[fish][1]);
    fish_dom.style.zIndex = "0";
    fish_dom.style.transform = "scale("+size+"%) rotate("+rot+"deg)";
    
    if(vowel.test(fish_color[fish][0][0]))
    {
        fish_text.innerHTML = "You found an " + fish_color[fish][0] + "!";
        fish_dom.setAttribute("alt", "Illustration of an " + fish_color[fish][0]);
    }
    else {
        fish_text.innerHTML = "You found a " + fish_color[fish][0] + "!";
        fish_dom.setAttribute("alt", "Illustration of a " + fish_color[fish][0]);
    }
}

function catchFish()
{
    var marker_x = 0;

    reveal.classList.toggle("anim-play");
    setTimeout(function(){
        reveal.remove();
    }, 750);

    marker.classList.toggle("anim-pause");
    
    setTimeout(function(){
        var marker_x = lerp(parseFloat(getComputedStyle(marker).getPropertyValue('left').slice(0,-2)), parseFloat(getComputedStyle(document.getElementById("red")).getPropertyValue('width').slice(0,-2))*(0.25/100), parseFloat(getComputedStyle(document.getElementById("red")).getPropertyValue('width').slice(0,-2))*(99.75/100), 0, 100);
        if(marker_x > (50-(green_bar/2)) && marker_x < (50+(green_bar/2)) && marker.classList.contains("anim-pause"))
        {
            getFish(fish_green);
        }
        else if(marker_x > (50-(yellow_bar/2)) && marker_x < (50+(yellow_bar/2)) && marker.classList.contains("anim-pause"))
        {
            getFish(fish_yellow);
        }
        else if(marker_x > (50-(orange_bar/2)) && marker_x < (50+(orange_bar/2)) && marker.classList.contains("anim-pause"))
        {
            getFish(fish_orange);
        }
        else if(marker.classList.contains("anim-pause"))
        {
            getFish(fish_red);
        }
    }, 50);
}

function getTranslateY(element) {
    const style = window.getComputedStyle(element)
    const matrix = new DOMMatrixReadOnly(style.transform)
    return matrix.m42
}

function randomInterval(min, max) { // min and max included 
    return Math.random() * (max - min + 1) + min;
}