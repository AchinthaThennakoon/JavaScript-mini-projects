const openPopoverbtn = document.getElementById("PoppoverBtn");
const popoverContainer = document.getElementById("popover");

const openPopOver = () =>{
    // Set the display property to "none"
    openPopoverbtn.style.display = "none";
    popoverContainer.style.display = "block";
    // console.log(popoverContainer)

}

const closePopOver = ()=>{
    popoverContainer.style.display = "none";
    openPopoverbtn.style.display = "block";
}