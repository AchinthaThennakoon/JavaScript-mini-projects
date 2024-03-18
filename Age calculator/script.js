const calculateAge = () => {
    const dob = new Date(document.getElementById("dob").value);
    const currentDate = new Date();

    console.log(currentDate.getFullYear()-dob.getFullYear());
    const age= currentDate.getFullYear()-dob.getFullYear()

    const display = document.getElementById("result");
    display.innerHTML = `Your age is ${age}`;
}