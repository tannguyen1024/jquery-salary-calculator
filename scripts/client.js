console.log('client.js Sourced In: Successful');
$(document).ready(handleReady) // This waits until html document is ready.

let employees = [];
const verbose = true;
let totalSalary = 0;

function handleReady() {
    if (verbose) console.log('jQuery is Ready!');
    $('#submitButton').on('click', clickSubmit);
    $('.delete').on('click', clickDelete);
} // End of handleReady

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
} // End of clickSubmit

function clickDelete() {
    console.log('You clicked delete!');
    // console.log($("tbody tr:nth-child(2)"));
    // $("table:nth-child(1)").append("<span> - 2nd!</span>");
    console.log($(this).parent().parent().text());
    let delArray = [];
    let delObject = $(this).parent().parent().text();
    delArray.push(delObject);
    console.log(delArray);

    $(this).parent().parent().remove();
} // End of clickDelete

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
            <td id="annualSalaryTD">$${employees[i].annualsalary}</td>
            <td><button class="btn btn-secondary delete">Delete</button></td>
        </tr>`)
        totalSalary += (Number(`${employees[i].annualsalary}`)/12);
        $('.delete').on('click', clickDelete);
    } // End For Loop
    $('#totalMonthlySpan').append(totalSalary.toLocaleString('en-US'));
    // $('#totalMonthlySpan').append(totalSalary.toFixed(2));
    if (totalSalary > 20000) {
        if (verbose) console.log('GREATER THAN 20K');
        $('#totalMonthlyDiv').addClass('turnsRed')
    }
    // Empty Input Fields
    $('#firstnameInput').val('');
    $('#lastnameInput').val('');
    $('#idInput').val('');
    $('#titleInput').val('');
    $('#salaryInput').val('');
} // End of displayEmployee