
// ---------------------  Javascript functionality for image slider on home page --------------------------------//

const slider = document.querySelector(".slider"),
firstImg = slider.querySelectorAll("img")[0];
arrowIcons = document.querySelectorAll(".wrapper i");

let isDragStart = false, prevPageX, prevScrollLeft;




const showHiddenIcons = () => {
    //shows and hides the left and right icons.
    let scrollWidth = slider.scrollWidth - slider.clientWidth;

    if (slider.scrollLeft == 0) {
        arrowIcons[0].style.display = "none";
    }else{
        arrowIcons[0].style.display = "block";
    }

    if (slider.scrollLeft == scrollWidth) {
        arrowIcons[1].style.display = "none";
    }else{
        arrowIcons[1].style.display = "block";
    }
}

arrowIcons.forEach(icon => {
    icon.addEventListener("click", () => {

        let firstImgWidth = firstImg.clientWidth + 15; // gets the first img width and adds 15px to the margin.
        // if left icon = clicked, reduce width value, else increase it.
        slider.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
        if (icon.id == "left") {
            slider.scrollLeft -= firstImgWidth;
        } else {
            slider.scrollLeft += firstImgWidth;
        }

        setTimeout(() => showHiddenIcons(), 60); // waits 60ms then calls method.
    });
});

// ---------------------  scroll functionality methods --------------------------------//
const dragStart = (e) => {
    //updates the values on mouse down event.
    isDragStart = true;
    prevPageX = e.pageX
    prevScrollLeft = slider.scrollLeft;
}

const dragging = (e) => {
    // scrolls the image slider to the left, based on mouse movement.
    if (!isDragStart) return;
    e.preventDefault();
    slider.classList.add("dragging");
    let positionDiff = e.pageX - prevPageX;
    slider.scrollLeft = prevScrollLeft - positionDiff;
}

const dragStop = () => {
    isDragStart = false;
    slider.classList.remove("dragging");
}

slider.addEventListener("mousedown", dragStart);
slider.addEventListener("mousemove", dragging);
slider.addEventListener("mouseup", dragStop);

// ---------------------  end of Javascript functionality for Home page --------------------------------//


// ---------------------  Javascript validation for HTML Form --------------------------------//

function validateForm() {
    var firstName = document.getElementById("firstname").value;
    var lastName = document.getElementById("lastname").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
  
    if (firstName == "") {
      alert("Please enter your first name.");
      return false;
    }

    if (lastName == "") {
        alert("Please enter your last name.");
        return false;
      }
  
    if (email == "") {
      alert("Please enter your email address.");
      return false;
    }
  
    if (message == "") {
      alert("Please enter your message.");
      return false;
    }
  
    return true;
  }