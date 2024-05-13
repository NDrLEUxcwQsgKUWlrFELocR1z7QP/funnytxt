document.addEventListener("DOMContentLoaded", init);

let data = null;

async function init()
{
    let response = await fetch("https://raw.githubusercontent.com/NDrLEUxcwQsgKUWlrFELocR1z7QP/funnytxt/main/funny.txt.json");
    
    data = await response.json();
    document.getElementById("click").addEventListener("click", click);
}

function click()
{
    let themeCount = Object.keys(data["themes"]).length;
    let charCount = Object.keys(data["characters"]).length;

    let theme = Math.floor(Math.random() * themeCount) + 1;

    if(!data["themes"][theme].includes("(2P)"))
    {
        let character = Math.floor(Math.random() * charCount) + 1;
        let text = data["characters"][character] + " " + data["themes"][theme];
        let updatedStr = text.replace("(2P)", "").trim();
        document.getElementById("output").innerHTML = updatedStr;
    }
    else
    {
        let character = Math.floor(Math.random() * charCount) + 1;
        let character2 = Math.floor(Math.random() * charCount) + 1;
        let text = data["characters"][character] + " " + data["themes"][theme] + " con " + data["characters"][character2];
        let updatedStr = text.replace("(2P)", "").trim();
        document.getElementById("output").innerHTML = updatedStr;
    }
}