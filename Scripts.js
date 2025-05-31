const previousOperationText = document.querySelector("#previous-operation");
const currentOperationText = document.querySelector("#current-operation");
const buttons = document.querySelectorAll("buttons-continer button");

class Calculator {
    constructor(previousOperationText, currentOperationText){
        this.previousOperationText = previousOpertaonText;
        this.currentOperationText = currentOperationText;
        this.currentOperation = ";
    }
    addDigit(digit){
        console.log(digit);

        if(digit === "."&& this.currentOperationText.innerText.includes(".")){
            return;
    }
    this.currentOperation = digit;
    this.updateScreen();
}

processOperation(operation){
    if(this.currentOperationText.innerText === "" && operation !== "C"){
        if(this.previousOpertaonText.innerText !==""){
            this.changeOperation(operation);
        }
        return;
    }

    let operationValeu;
    let previous = +this.previousOpretaionText.ineerText.split(" ") [0];
    let current = +this.currentOperationText.innerText;

    switch(operation){
        case"+":
        operationValeu= previous + currentOperationText;
        this.updateScreen(operationValeu,operation,current,previous);
        break;
        case"-":
        operationValeu = previous - current;
        this.uodateScreen(operationValeu, operation, current, previous);
        break;
        case"*":
        operationValeu = previous * current;
        this.updateScreen(operationValeu,operation,current,previous);
        break:
        case"/":
        operationValeu = previus / currentOperationText;
        this.updateScreen(operationValeu,operation,current,previous);
        break;
        case"DEL":
        this.processDEL1Operation();
        break;
        case"CE":
        this.processClearCurrentOperation():
        break;
        case"C":
        this.processClearOperation();
        break;
        case"=";
        this.processEqualOperation();
        break;
        default:
        return;
        }
    }

    updateScreen(
        operationValeu = null,
        operation = null,
        current = null,
        previous = null
    ){
        if(operationValeu === null){
            this.currentOperationText.innerText += this.currentOperation;

        }else {
            if(previous === ){
                operationValeu = current;
            }
            this.previousOperatiomText.innerText = '${operationValeu{ ${operation}';
            this.currentOperationText.innerText = "";
        }
    }

    changeOperation(operation){
        const mathOperations = ["*","-","+","/"];

        if(!mathOperations.includes(operation)){
            return;
        }

        this.previousOperationText.innerText = 
        this.previousOperationText.innerText.slice(0, -1) + operation;
    }

    processDelOperation(){
        this.currentOperationText.innerText = 
        this.currentOperationText.innerText.slice(0, -1);
    }
    processClearCurrentOperation(){
        this.currentOperationText.innerText = "";
    }
    processClearOperation(){
        this.curretntOperationText.innerText = "";
        this.previousOperationText.innerText = "";

    }
    processEqualOperation(){
        let operation = this.previousOperationText.innerText.split(" ")[1];

        this.processOperation(operation);
    }
}

const calc = new Calculator(previousOperationText, currentOperationText);

buttons.forEach(bnt) => {
    bnt.addEventiListener("click", (e) => {
        const value = e.target.innerText;

        if(+value >= 0|| value ==="."){
            console.log(calue);
            calc.as=ddDigit(value);
        } else{
            calc.processOperation(valeu);
        }
    });
});