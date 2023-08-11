const inputbox = document.getElementById("input");
const list = document.getElementById("list-container");

function addTask(){
    if(inputbox.value === ''){
        alert("Kamu harus tulis sesuatu");
    } 
    else{
        let li = document.createElement('li');
        li.innerHTML = input.value;
        list.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = '\u00d7';
        li.appendChild(span);
    }
    input.value = '';
    saveData()
}


// ============= check and un check ===============

list.addEventListener('click', function(e){
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('centang');
        saveData()
    }
    else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
        saveData()
    }
}, false);

function saveData(){
    localStorage.setItem('data', list.innerHTML);
}
function showTask(){
    list.innerHTML = localStorage.getItem('data');
}
showTask()