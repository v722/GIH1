var modal = document.getElementById("simpleModal");
var modalBtn = document.getElementById("modalBtn");
var closeBtn = document.getElementById("closeBtn");



// close

closeBtn.addEventListener('click',closeModal);

window.addEventListener('click',closeOutside);


function openModal(){
    modal.style.display = "block";
}

function closeModal(){
    modal.style.display = "none";
}

function closeOutside(e){
    if(e.target == modal){
        modal.style.display = "none";
    }
}
