// geting all the inputs into variables

let inp = document.querySelectorAll('input')

let day = document.querySelector('#day')
let month = document.querySelector('#month')
let year = document.querySelector('#year')

let button = document.querySelector('button')

// getting the label elements
let labelDay = document.querySelector('label[for="day"]');
let labelMonth = document.querySelector('label[for="month"]');
let labelYear = document.querySelector('label[for="year"]');


// error variabels
let errorDay = document.querySelector('#errorday');
let errorMonth = document.querySelector('#errormonth');
let errorYear = document.querySelector('#erroryear');


// output placeholders element
let yearElement = document.querySelector('#years')
let monthElement = document.querySelector('#months');
let dayElement = document.querySelector('#days');


button.onclick = function calculatingDates (){
    

    // getting the dates
    let inputDay = day.value;
    let inputMonth = month.value;
    let inputYear = year.value;

    let current_date = new Date()

    // reseting the content of errors

    errorYear.textContent = '';
    errorMonth.textContent = '';
    errorDay.textContent = '';
    

    // reseting the format of the form after error
    day.style.outline = ''
    labelDay.style.color = ''
    month.style.outline = '';
    labelMonth.style.color = ''
    year.style.outline = '';
    labelYear.style.color = ''

    // checking for valid numbers

    if (inputYear > current_date.getFullYear()){
        errorYear.textContent = 'Must be in the past';
    }

    if(inputMonth < 0 || inputMonth > 12){
        errorMonth.textContent = 'Must be a valid month';
    }

    if (inputDay <= 0 || inputDay > 31 ){
        errorDay.textContent = 'Must be a valid day';
    }

    if ((inputMonth == 2 && (inputDay > 29 && inputDay<31)) || ( ((inputMonth <= 7 && inputMonth%2 == 0 ) || (inputMonth > 7 && inputMonth%2 == 1)) && inputDay == 31)|| (inputMonth == 2 && inputDay == 29 && inputYear % 4 != 0)){
        errorDay.textContent = 'Must be a valid date';
        errorMonth.textContent = ' '
        errorYear.textContent = ' '
    }


    // checking if fields are empty
    if (inputYear == ''){
        errorYear.textContent = 'This field is required';
    }

    if (inputMonth == ''){
        errorMonth.textContent = 'This field is required';
    }

    if (inputDay == ''){
        errorDay.textContent = 'This field is required' ;
    }

    // styling and returning function if error aqured

    if( errorDay.textContent != ''){
        day.style.outline = '1px solid hsl(0, 100%, 67%)';
        labelDay.style.color = 'hsl(0, 100%, 67%)'
    }
    if (errorMonth.textContent != ''){
        month.style.outline = '1px solid hsl(0, 100%, 67%)';
        labelMonth.style.color = 'hsl(0, 100%, 67%)'
    }
    if (errorYear.textContent != ''){
        year.style.outline = '1px solid hsl(0, 100%, 67%)';
        labelYear.style.color = 'hsl(0, 100%, 67%)'
    }

    if (errorDay.textContent != '' || errorMonth.textContent != '' || errorYear.textContent != ''){
        return;
    }
    
    // calculating the difference from the dates
    let differenceYear = current_date.getFullYear() - inputYear;

    let differenceMonth = current_date.getMonth() - (inputMonth - 1);

    let differenceDay = current_date.getDate() - (inputDay) ;

    
    
    // check for negative days and amend them

    if (differenceDay < 0){
        let prevMonth = null;

        // to determen the days of the previous month to add them
        if(inputMonth == 2){
            if (inputYear % 4 != 0){
                prevMonth = 28;
            }
            else{
                prevMonth = 29;
            }
        }
        else if ((inputMonth <= 7 && inputMonth%2 == 0 ) || (inputMonth > 7 && inputMonth%2 == 1)){
            prevMonth = 30;
        }

        else{
            prevMonth = 31;
        }
        differenceMonth --;
        differenceDay += prevMonth;
    }

    // check for negative months to change the year

    if( differenceMonth <0 ){
        differenceYear --;
        differenceMonth += 12;
    }

    // making the elements appear on the screan    
    dayElement.textContent = differenceDay;
    monthElement.textContent = differenceMonth;
    yearElement.textContent = differenceYear;

    
}