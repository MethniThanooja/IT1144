function showName() {
    const name = document.getElementById("nameBox").value.trim();

    if (name === "") {
        document.getElementById("output").innerHTML = "Please enter a name.";
    } else {
        document.getElementById("output").innerHTML = "Hello " + name + "!";
    }
}