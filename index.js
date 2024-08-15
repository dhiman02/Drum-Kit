for(var i = 0; i < document.querySelectorAll(".drum").length; i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click", function ()
    {
        var buttonInnerHTML = this.innerHTML;
        switch (buttonInnerHTML) 
        {
            case "w":
                var aw = new Audio('sounds/tom-1.mp3');
                aw.play();
                break;
            case "a":
                var aa = new Audio('sounds/tom-2.mp3');
                aa.play();
                break;
            case "s":
                var as = new Audio('sounds/tom-3.mp3');
                as.play();
                break;
            case "d":
                var ad = new Audio('sounds/tom-4.mp3');
                ad.play();
                break;
            case "j":
                var aj = new Audio('sounds/crash.mp3');
                aj.play();
                break;
            case "k":
                var ak = new Audio('sounds/snare.mp3');
                ak.play();
                break;
            case "l":
                var al = new Audio('sounds/kick-bass.mp3');
                al.play();
                break;    
            default:
                console.log(buttonInnerHTML);
                break;
        }

    }    
    );  
}
function makeSound(key)
{

}
