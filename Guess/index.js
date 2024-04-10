
let number = Math.floor(Math.random() * 100);

const output = document.querySelector("#output");
const prompt = document.querySelector("#prompt");
const input = document.querySelector("#prompt input");

prompt.addEventListener("submit", handleSubmit);

printMessage("Guess the number from 1 to 100");

input.focus();

function handleSubmit(event)
{
    event.preventDefault();

    processInput(input.value);

    input.value = '';
}

function printMessage(message,color)
{
    let text = document.createElement("li");
    
    
    text.textContent = message;
    text.style.color = color;
    output.appendChild(text);
    
}

function clearOutput()
{
    for (let i = 0; i < output.children.length; i++) {
        output.removeChild(output.children[i]);
    }
}

function processInput(input)
{
    

    

    let guess = Number.parseInt(input);

    if (Number.isNaN(guess)) return; 


    if (guess > number) {
        printMessage(input,"red");
        printMessage("Less.","red");
        
    } else if (guess < number)
    {
        printMessage(input,"red");
        printMessage("More.","red");
        
    }
    else
    {
        printMessage(input,"green");
        printMessage(`Correct, it is ${guess}.`,"Green");
        printMessage("The End","Green");

        prompt.remove();
    }
}