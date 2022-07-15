function lerp(x, minX, maxX, minY, maxY)
{
    return (x-minX) * (maxY-minY)/(maxX-minX) + minY;
}

fish_red = [
    ["flagtail", "https://1.bp.blogspot.com/-56Y9cIeGpE0/X5OcS9dZIhI/AAAAAAABb8A/nN9aD-ZvOp86FZuQa-Zhp7QlpX3cFGQOwCNcBGAsYHQ/s829/fish_ginyugoi.png"],
    ["amberjack", "https://1.bp.blogspot.com/-SmXDvlhYF2w/XzXkyv-YZuI/AAAAAAABal4/V34t7_HzQW0Vn9EeVIXG4MtSuo47dm3LgCNcBGAsYHQ/s1600/fish_buri.png"],
    ["sweeper", "https://1.bp.blogspot.com/-utG6I90wyjs/XxU0c_Y7TMI/AAAAAAABaLQ/OsTcpkol1XIueZGjKVHuYMRVvsnSgeLKQCNcBGAsYHQ/s1600/fish_hatanpo.png"],
    ["mullet", "https://1.bp.blogspot.com/-FEy2YwNkdyI/Xhwp_TbUlhI/AAAAAAABW6Q/n-0c2AZUV2M0OQz9PvIVSw3yFhjNtsNqgCNcBGAsYHQ/s1600/fish_bora.png"],
    ["char", "https://1.bp.blogspot.com/-1hQaw1LANXY/XZR9Wcca0KI/AAAAAAABVRs/m3xT7MKZG7ADd7qgvWf8cHDc8mRz1TISACNcBGAsYHQ/s1600/fish_iwana.png"]
];

fish_orange = [
    ["black scraper", "https://2.bp.blogspot.com/-ReYngIZ87xA/XNPUsY8dI7I/AAAAAAABS20/Aq9JPLN8Bg4ujGCR8bHqexD3t9VeDePlwCLcBGAs/s800/fish_umadura_hagi.png"],
    ["anchovy", "https://1.bp.blogspot.com/-DKTjE-EvcWQ/XVd7FsdBeAI/AAAAAAABUMI/smLyoFcAwpc03d7khqElVWvL5K77u6GCACLcBGAs/s1600/fish_katakuchi_iwashi.png"],
    ["salmon", "https://1.bp.blogspot.com/-6tG_gbh_22g/XlyfstkjNJI/AAAAAAABXoM/qImqCHBvk_kNCCUTH61kMiwJxY1cKZcrACNcBGAsYHQ/s1600/fish_benizake.png"]
]

fish_yellow = [
    ["sea roach", "https://1.bp.blogspot.com/-camzFggE1J4/WZP3Um4j-qI/AAAAAAABF9U/39LAYH0Wwic5BGL88ferIWBPqQfgIuR6ACLcBGAs/s800/bug_funamushi.png"]
]

fish_green = [
    ["message in a bottle", "https://3.bp.blogspot.com/-i1lokFIPyKw/WASJE3lw_II/AAAAAAAA-8w/Y4z5JBad75cUSXGaTGbIEGIlHgElHagpQCLcB/s800/bin_tegami.png"],
    ["pudgy cusk-eel", "https://2.bp.blogspot.com/-Pr-yp-ANK3E/W9592dVfVmI/AAAAAAABP5U/kp4n8woJiGQ9vqrCumwBHxHwdCuPmNhmwCLcBGAs/s800/shinkai_fish_sokobouzu.png"]
]

bottle_messages = [
    "To whoever finds this, you will win the lottery in 8234 years!",
    "Did you know that chocolate milk comes from brown cows?",
    "The average shortest country is Indonesia with the average person being 5'2\"",
    "The average human adult's skin has a total area of 22 ft²",
    "Technoblade never dies",
    "Hello, world!"
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