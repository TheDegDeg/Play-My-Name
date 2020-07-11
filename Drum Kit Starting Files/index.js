var allButtons = document.querySelectorAll(".drum");


allButtons.forEach(element => {
    element.addEventListener("click", function(e) {
        console.log(this.innerHTML);
        console.log(e);
        console.log(e.classList)
        console.log(this.classList);

        switch (this.innerHTML) {
            case "k":
                var audio = new Audio('sounds/tom-1.mp3');
                audio.play();
                this.classList.add("pressed");
                setTimeout(() => {
                    this.classList.remove("pressed");
                }, 100);
                break;

            case "h":
                var audio = new Audio('sounds/tom-2.mp3');
                audio.play();
                this.classList.add("pressed");
                this.classList.add("pressed");
                setTimeout(() => {
                    this.classList.remove("pressed");
                }, 100);
                break;

            case "a":
                var audio = new Audio('sounds/tom-3.mp3');
                audio.play();
                this.classList.add("pressed");
                this.classList.add("pressed");
                setTimeout(() => {
                    this.classList.remove("pressed");
                }, 100);
                break;

            case "l":
                var audio = new Audio('sounds/tom-4.mp3');
                audio.play();
                this.classList.add("pressed");
                this.classList.add("pressed");
                setTimeout(() => {
                    this.classList.remove("pressed");
                }, 100);
                break;

            case "i":
                var audio = new Audio('sounds/snare.mp3');
                audio.play();
                this.classList.add("pressed");
                this.classList.add("pressed");
                setTimeout(() => {
                    this.classList.remove("pressed");
                }, 100);
            default:
                break;
        }
    })
});

document.addEventListener("keydown", function(e) {
    console.log(e.key);
    console.log(this.head);

    switch (e.key) {
        case "k":
            var audio = new Audio('sounds/tom-1.mp3');
            audio.play();
            break;

        case "h":
            var audio = new Audio('sounds/tom-2.mp3');
            audio.play();

            break;

        case "a":
            var audio = new Audio('sounds/tom-3.mp3');
            audio.play();

            break;

        case "l":
            var audio = new Audio('sounds/tom-4.mp3');
            audio.play();

            break;

        case "i":
            var audio = new Audio('sounds/snare.mp3');
            audio.play();
        default:
            break;
    }
});