 function checkMobile() {
    let check = false;
    (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
    return check;
};

if(checkMobile() == true)
{
    alert("This website was designed for desktop browsers. Please visit this site on a computer for better viewing.");
}

function lerp(x, minX, maxX, minY, maxY)
{
    return (x-minX) * (maxY-minY)/(maxX-minX) + minY;
}

tempImg = new Image()
tempImg.src="pattern_uroko.png"
var tempImg = []

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

for(var x=0;x<fish_red.length;x++) {
    tempImg[x] = new Image()
    tempImg[x].src = fish_red[x][1]
}
for(var x=0;x<fish_orange.length;x++) {
    tempImg[x] = new Image()
    tempImg[x].src = fish_orange[x][1]
}
for(var x=0;x<fish_yellow.length;x++) {
    tempImg[x] = new Image()
    tempImg[x].src = fish_yellow[x][1]
}
for(var x=0;x<fish_green.length;x++) {
    tempImg[x] = new Image()
    tempImg[x].src = fish_green[x][1]
}

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