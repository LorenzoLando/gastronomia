
var modal = document.querySelector(".modal");
    var trigger = document.querySelectorAll(".trigger");
    var closeButton = document.querySelector(".close-button");

    function toggleModal() {
        modal.classList.toggle("show-modal");
    }

    function windowOnClick(event) {
        if (event.target === modal) {
            toggleModal();
        }
    }
//uso un for loop per accedere a tutti i bottono trigger
    for(var i = 0; i < trigger.length; i++) {
        trigger[i].addEventListener("click", toggleModal);    
    }
     closeButton.addEventListener("click", toggleModal);
    window.addEventListener("click", windowOnClick);