function validate_form() {
    let x = document.forms["myfirstform"]["fname"].value;
    if (x == "") {
        alert("name must be filled out");
        return false;
    }
}