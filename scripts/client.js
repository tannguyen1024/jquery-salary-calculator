console.log('client.js Sourced In: Successful');
$(document).ready(handleReady) // This waits until html document is ready.

let employees = [];
const verbose = true;
let totalSalary = 0;

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
    displayEmployee();
}

function displayEmployee() {
    let el = $('#table');
    $('#tableHeader').siblings().empty();
    $('#totalMonthlySpan').empty();
    totalSalary = 0;
    for (let i = 0; i < employees.length; i++) {
        el.append(`<tr>
            <td>${employees[i].firstname}</td>
            <td>${employees[i].lastname}</td>
            <td>${employees[i].id}</td>
            <td>${employees[i].title}</td>
            <td>$${employees[i].annualsalary}</td>
            <td><button class="btn btn-secondary" id="delete">Delete</button></td>
        </tr>`)
        totalSalary += Number(`${employees[i].annualsalary}`);
    } $('#totalMonthlySpan').append(totalSalary);
}