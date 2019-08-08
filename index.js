//CW 1
var i = -10;

while(i <= 5)
{
    console.log(i);
    i++;
}

//CW 2
var x = 10;

while(x >= 0)
{
    if (x !== 5)
    {
        console.log(x);
    }
    x--;
}

//CW 3
var quitKey = true;

while (quitKey)
{
    var userInput = prompt("Enter a word. Press 'q' to quit.");
    if (userInput === "q")
    {
        quitKey = false
    }
}