//let myImage = document.querySelector('img');

/*myImage.onclick = function () {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/google.jpg') {
        myImage.setAttribute('src', 'images/google2.jpg');
    } else {
        myImage.setAttribute('src', 'images/google.jpg');
    }
}*/
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.textContent = 'Google is cool, ' + myName;
    }

}

myButton.onclick = function () {
    setUserName();
}

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Google is cool, ' + storedName;
}