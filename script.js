const Modal = document.querySelector(".modal");
const Overlay = document.querySelector(".overlay");

function OpenModal() {
    console.log(Modal);
    Modal.classList.add("active");
    Overlay.classList.add("overlayactive");
}

function CloseModal() {
    Modal.classList.remove("active")
    Overlay.classList.remove("overlayactive");

}