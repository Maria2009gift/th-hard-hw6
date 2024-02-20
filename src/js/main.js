
import { library } from "./libraryOfMessage.js";

const name = document.querySelector("#input1")
const email = document.querySelector("#input2")
const message = document.querySelector("#input3")
const btnGet = document.querySelector("#btnTpoGet")



btnGet.addEventListener("click", sandMessegeToLibrary)

function sandMessegeToLibrary() {
    library.push({
        author: name.value,
        email: email.value,
        message: message.value,
    })
    console.log(library)
    alert("Форму успішно відправлено, очікуйте відровіді!")
}


