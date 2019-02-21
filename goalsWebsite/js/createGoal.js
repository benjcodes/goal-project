var addToGoalList = document.querySelector('#put-to-goal-list');
var goalItem = document.querySelector('#goal-item');
var goalList = document.querySelector('#goal-list');

var today = new Date();
var dd = today.getDate();
var mm = today.getMonth() + 1;
var yyyy = today.getFullYear();

if (dd < 10) {
    dd = '0' + dd;
}

if (mm < 10) {
    mm = '0' + mm;
}

today = dd + '/' + mm + '/' + yyyy;

    addToGoalList.addEventListener('submit', function (event) {

        event.preventDefault();
        if(goalItem.value.length < 1) return;
        goalList.innerHTML += '<li>' + goalItem.value + ' ' + 'Created: ' + today + '</li>'; 
        goalItem.value = '';
        localStorage.setItem('goalListItems', goalList.innerHTML);

    }, false );

    var saved = localStorage.getItem('goalListItems');
    if (saved) {
        goalList.innerHTML = saved;
    }
