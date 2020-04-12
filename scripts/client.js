console.log('client.js Sourced In: Successful');
$(document).ready(handleReady) // This waits until html document is ready.

let employees = [];
const verbose = false;
let totalSalary = 0;
let indexValue = 0;

function handleReady() {
    if (verbose) console.log('jQuery is Ready!');
    $('#submitButton').on('click', clickSubmit);
    // $('.delete').on('click', clickDelete);  // Doesn't need to be here.
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
    if (verbose) console.log(employees);
    displayEmployee();
} // End of clickSubmit

function clickDelete() {
    // let removeValue = 0;
    if (verbose) console.log('You clicked delete!');
    // console.log($("tbody tr:nth-child(2)"));
    // console.log($(this).parent().parent().text());
    // console.log('Testing!');
    // console.log($(this).closest('.row').find('.idElement').text());
    // $(this).closest('.row').find('.idElement').append(`Yes`);

    // WORKING KIND OF
    indexValue = Number($(this).closest('tr').find('#idElement').text());
    indexValue -= 1;
    if (verbose) console.log('indexValue:',(indexValue));
    employees.splice(indexValue, 1);
    if (verbose) console.log(employees);
    indexValue = 0;
    
    // let indexValue=$(this).parent().parent().find('.idElement').text();
    // indexValue = indexValue[0].length - 1;
    // console.log('indexValue:',(indexValue));

    // console.log($('#thead').find('.salaryElement').text());
    // removeValue = $(this).closest().empty();
    
    // console.log(removeValue);
    
// WHY IS THIS NOT WORKING?  START HERE
    // Attempt to push that value into an array?
    // let delArray = [];
    // let delObject = $(this).parent().parent().text();
    // delArray.push(delObject);
    // console.log(delArray);

    // Remove this's grandpa
    // $(this).parent().parent().remove();
    displayEmployee();
} // End of clickDelete

function displayEmployee() {
    let el = $('#table');
    $('#tableHeader').siblings().empty();
    $('#totalMonthlySpan').empty();
    $('#totalAnnualSpan').empty();
    totalSalary = 0;
    for (let i = 0; i < employees.length; i++) {
        // console.log(i);
        let index = i;
        el.append(`<tr>
            <td id="idElement">${index + 1}</td>
            <td>${employees[i].firstname}</td>
            <td>${employees[i].lastname}</td>
            <td>${employees[i].id}</td>
            <td>${employees[i].title}</td>
            <td>$${employees[i].annualsalary}</td>
            <td><button class="btn btn-secondary delete">Delete</button></td>
        </tr>`)
        totalSalary += (Number(`${employees[i].annualsalary}`)/12);
        
    } // End For Loop
    $('#totalAnnualSpan').append((totalSalary.toLocaleString('en-US')*12));
    $('#totalMonthlySpan').append(totalSalary.toLocaleString('en-US'));
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
    $('.delete').on('click', clickDelete);
} // End of displayEmployee