const txtInput = document.querySelector(".inputs input");
const txtinput = document.querySelector(".inputs input");
checkBtn = document.querySelector(".inputs .test1");
checkbtn = document.querySelector(".inputs .test2");
infoTxt = document.querySelector(".info-txt");
const clearBtn = document.querySelector(".inputs clearBtn");
let filterInput;

checkbtn.addEventListener("click", () => {
    filInput = Number(txtinput.value);
    infoTxt.style.display = "block";
    checkbtn.classList.remove("active");
    if(filInput == 1){
        return infoTxt.innerHTML = `A prime number is a whole number greater than 1 whose only factors are 1 and itself.Yes, <span>'${filInput}'</span> is a prime!`;
    }else{
        for (let i = 2; i * i <= filInput; i++){
            if (filInput % i == 0){
                return infoTxt.innerHTML = `A prime number is a whole number greater than 1 whose only factors are 1 and itself.Therefore No, <span>'${filInput}'</span> isn't a prime!`;
            }
        }
        infoTxt.innerHTML = `A prime number is a whole number greater than 1 whose only factors are 1 and itself.Yes, <span>'${filInput}'</span> is a prime!`; 
    }
});

checkBtn.addEventListener("click", () => {
    var input = txtInput.value;
    let reverseInput = input.split("").reverse().join("");
    infoTxt.style.display = "block";
    checkBtn.classList.remove("active");
    if(input != reverseInput) {
        return infoTxt.innerHTML = `A palindrome is a word or phrase that reads the same backwards as forwards, e.g. level, refer.Therefore No, <span>'${input}'</span> isn't a palindrome!`;
    }
    infoTxt.innerHTML = `A palindrome is a word or phrase that reads the same backwards as forwards, e.g. level, refer.Yes, <span>'${input}'</span> is a palindrome!`;
});

txtInput.addEventListener("keyup", () => {
    filterInput = txtInput.value;
    if(filterInput) {
        checkbtn.classList.add("active");
        return checkBtn.classList.add("active");
    }
    infoTxt.style.display = "none";
    checkBtn.classList.remove("active");
    checkbtn.classList.remove("active");
});
function clearInput() {
    txtInput.value = "";
    checkBtn.classList.remove("active");
    checkbtn.classList.remove("active");
    infoTxt.style.display = "none"

}
clearBtn.addEventListener("click", clearInput);
