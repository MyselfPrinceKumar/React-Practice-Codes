let validateForm = () => {
    let uName = document.querySelector("#userName").value;
    let errorIcon = document.getElementById("img1");
    // let paragraphs = document.getElementsByClassName('hide'); // Get all elements with class 'hide'
    let hidename = document.getElementById("hideError");
    let gmail = document.getElementById("gmail").value;
    let hideEmail = document.getElementById("hideEmail");
    let aadhar = document.getElementById("aadhar").value;
    let hideAadhar = document.getElementById("hideAadhar");
    let PAN = document.getElementById("PAN").value;
    let hidePAN = document.getElementById("hidePAN");
    let phone = document.getElementById("phone").value;
    let hidePhone = document.getElementById("hidePhone");
    console.log(uName);
    uName = uName.trim();
    gmail = gmail.trim();
    aadhar = aadhar.trim();
    PAN = PAN.trim();
    phone = phone.trim();
    if (uName.length < 4) {
        errorIcon.style.visibility = "visible";
        hidename.style.visibility = "visible";
        return false;
    }
    else {
        errorIcon.style.visibility = "hidden";
        hidename.style.visibility = "hidden";
        // return false;
    }
    if (!gmail.includes("@gmail.com")) {
        hideEmail.style.visibility = "visible";
        return false;
    } else {
        hideEmail.style.visibility = "hidden";
        // return false;
    }
    if (aadhar.length !== 12) {
        hideAadhar.style.visibility = "visible";
        return false;
    }
    else {
        hideAadhar.style.visibility = "hidden";
        // return false;
    }
    if (PAN.length != 10) {
        hidePAN.style.visibility = "visible";
        return false;
    }
    else {
        hidePAN.style.visibility = "hidden";
        // return false;
    }
    if (phone.length != 10) {
        hidePhone.style.visibility = "visible";
        return false;
    }
    else {
        hidePhone.style.visibility = "hidden";
        // return false;
    }
}
