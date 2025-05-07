// set up event listener for submit button

var submitButton = document.querySelector("#get-age");

submitButton.addEventListener("click", (event)=>{
    event.preventDefault();
    calculateAnimalAge();
});

function calculateAnimalAge(){
    var firstName = document.querySelector("#first");
    var lastName = document.querySelector("#last");
    var age = document.querySelector("#age");
    var displayinfo = document.querySelector("#display-info");

    if(firstName.value === "" || lastName.value === "" || age.value === ""){
        alert("Please enter the missing data");
        return;
    }

    //calculate
    var dogYears = (Number(age.value) * 7).toFixed();
    var catYears = (Number(age.value) * 4).toFixed();

    displayinfo.innerHTML = `Here is your info
                            <br>
                            <br>
                            Your name is ${firstName}`
}