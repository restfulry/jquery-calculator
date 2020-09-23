/* 
Flow:
Have a firstNumber
Choose an operator
Have a secondNumber
Wait for operation to finish
Display result


^AKA Inital State
*/

// don't want to run app until Jquery finished downloading
$( document ).ready(function() {
    // Variables in Global Runtime
    
    let firstNumber = 0;
    let secondNumber = 0;
    let result = 0;
    let operator = "";
    let isOperatorChosen = false;
    let isCalculated = false;


    // Initialize Calculator
    function initializeCalculator() {
        // set up initial state so user can go through Flow
    };
    




    // Event Handler Functions
    $('.number').on('click', function(e){
        // check if already ran a calculation
        
        // check if operation is chosen
        if (isOperatorChosen) {
            // $('#button-1')[0].attributes.id
            // if so, should render 2nd number
            // secondNumber

            //THIS keyword point to elemnt that was clicked. Is a DOM element, 
            // so need to reselect THIS in order to use JQuery methods
            console.log($(this).val());
        } else {
            // else, should render 1st number
            // firstNumber
            console.log($(this).val());
        };


    })

    $('.operator').on('click', function(e){
        console.log(this);
    })

    $('.equal').on('click', function(e){
        console.log(this);
    })

    $('.clear').on('click', function(e){
        console.log(this);
    })

    // Run app
    initializeCalculator();

});


