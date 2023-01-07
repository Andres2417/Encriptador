const btnEncript = document.getElementById("encriptador");
const btndesEncript = document.getElementById("desEncriptador");
const copyButton = document.getElementById("copy");

btnEncript.onclick = encriptado;
btndesEncript.onclick = desEncriptado;

function encriptado() {
    var msj = document.getElementById("input").value;
    if (!msj) {
        alert("Debe ingresar el texto a ser encriptado");
        return location.reload();
    }

    let msjArray = msj.split("");
    for (let i = 0; i < msj.length; i++) {
        if (msjArray[i] === "e") {
            msjArray[i] = "enter";
        }
        if (msjArray[i] === "i") {
            msjArray[i] = "imes";
        }
        if (msjArray[i] === "a") {
            msjArray[i] = "ai";
        }
        if (msjArray[i] === "o") {
            msjArray[i] = "ober";
        }
        if (msjArray[i] === "u") {
            msjArray[i] = "ufat";
        }
    }
    encriptado = msjArray.toString().replace(/,/g, "");
    document.getElementById("img-container").innerHTML =
        "<textarea id='outputText' readonly>" + encriptado + "</textarea>";
    copyButton.style = "visibility:visible;";
    return encriptado;
}

function desEncriptado() {
    var msj = document.getElementById("input").value;
    if (!msj) {
        alert("Debe ingresar el texto a ser desencriptado");
        return location.reload();
    }

    let msjArray = msj.split("");
    for (let i = 0; i < msj.length; i++) {
        if (msjArray[i] === "e" && msjArray[i + 1] === "n") {
            msjArray.splice(i + 1, 4);
        }
        if (msjArray[i] === "i" && msjArray[i + 1] === "m") {
            msjArray.splice(i + 1, 3);
        }
        if (msjArray[i] === "a" && msjArray[i + 1] === "i") {
            msjArray.splice(i + 1, 1);
        }
        if (msjArray[i] === "o" && msjArray[i + 1] === "b") {
            msjArray.splice(i + 1, 3);
        }
        if (msjArray[i] === "u" && msjArray[i + 1] === "f") {
            msjArray.splice(i + 1, 3);
        }
    }
    desEncriptado = msjArray.toString().replace(/,/g, "");
    document.getElementById("img-container").innerHTML =
        "<textarea id='outputText' readonly>" + desEncriptado + "</textarea>";
    copyButton.style = "visibility:visible;";
    return desEncriptado;
}

copyButton.addEventListener("click", function () {
    const textCopied = document.getElementById("outputText").innerHTML;
    navigator.clipboard.writeText(textCopied);
});
