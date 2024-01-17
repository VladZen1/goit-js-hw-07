
const inputV = document.querySelector('#name-input');
const userName = document.querySelector('#name-output');

const inputValueName = (event) => {
    if (event.target.value.trim() !=='') {
        userName.textContent = event.target.value.trim();
    } else { userName.textContent = 'Anonymous'   
    }
};

inputV.addEventListener('input', inputValueName);
