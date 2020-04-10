console.log('client.js Sourced In: Successful');
$(document).ready(handleReady) // This waits until html document is ready.

let employees = [];
const verbose = true;

function handleReady() {
    if (verbose) console.log('jQuery is Ready!');
    $('#submitButton').on('click', clickSubmit);
}

function clickSubmit() {
    if (verbose) console.log('Button clicked!');
    let itemToAdd = {
        firstname: $('#firstnameInput').val(),
        lastname: $('#lastnameInput').val(),
        id: $('#idInput').val(),
        title: $('#titleInput').val(),
        annualsalary: $('#salaryInput').val()
    }
    employees.push(itemToAdd);
    console.log(employees);
}