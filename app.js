/* 
Flow:
Initialize calculator
Have a firstNumber
Choose an operator
Have a secondNumber
Wait for operation to finish
Display result
Clear old results


^AKA Inital State
*/

// don't want to run app until Jquery finished downloading
$( document ).ready(function() {
    // Variables in Global Runtime
    
    let firstNumber = '';
    let secondNumber = '';
    let result = 0;
    let operator = "";
    let isOperatorChosen = false;
    let isCalculated = false;


    // Initialize Calculator
    function initializeCalculator() {
        // set up initial state so user can go through Flow
        firstNumber = '';
        secondNumber = '';
        result = 0;
        operator = "";
        isOperatorChosen = false;
        isCalculated = false;
        // update the UI
        $('#first-number, #second-number, #operator, #result').empty();
    };
    




    // Event Handler Functions
    $('.number').on('click', function(e){
        // check if already ran a calculation
        
        if(isCalculated) {
            return false;
        }

        // check if operation is chosen
        if (isOperatorChosen) {
            // $('#button-1')[0].attributes.id
            // if so, should render 2nd number
            // secondNumber

            //THIS keyword point to elemnt that was clicked. Is a DOM element, 
            // so need to reselect THIS in order to use JQuery methods
            secondNumber += ($(this).val());
            $('#second-number').text(secondNumber);

        } else {
            // else, should render 1st number
            // firstNumber
            firstNumber += ($(this).val());
            
            $('#first-number').text(firstNumber);
        };


    })

    $('.operator').on('click', function(e){
        // check if we've already run a calcultion OR if 1st number has been chosen
        if(!firstNumber || isCalculated){
            return false;
        };
        
        // set isOperatorChosen to True, so we can start choosing 2nd num
        isOperatorChosen = true;

        // save the value of the operator the user has clicked on
        operator = $(this).val();

        // render to the operator h1
        $('#operator').text(operator)
    });

    $('.equal').on('click', function(e){
        /* Flow:
        - has calculation on current numbers finished?
            - if yes, do nothing (early return)
            - if no, set isCalculated = true
        - convert the numbers from strings to numbers
        - check what operator was chosen
        - perform the operation on the two numbers and save to result var
        - render result
        */

        if(isCalculated){
            return false;
        }

        isCalculated = true;

        firstNumber = parseInt(firstNumber);
        secondNumber = parseInt(secondNumber);

        switch (operator) {
            case 'plus':
                result = firstNumber + secondNumber;
                break;
            case 'minus':
                result = firstNumber - secondNumber;
                break;
            case 'times':
                result = firstNumber * secondNumber;
                break;
            case 'divide':
                result = firstNumber / secondNumber;
                break;
            case 'power':
                result = firstNumber ** secondNumber;
                break;
            default:
                operator;
                break;
        }
        $('#result').text(result);
    });

    $('.clear').on('click', function(e){
        // call initializeCalculator
        initializeCalculator();
    })

    // Run app
    initializeCalculator();

});


