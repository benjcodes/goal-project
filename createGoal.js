var addToGoalList = document.querySelector('#put-to-goal-list');
var goalItem = document.querySelector('#goal-item');
var goalList = document.querySelector('#goal-list');

    addToGoalList.addEventListener('submit', function (event) {

        event.preventDefault();


        if(goalItem.value.length < 1) return;


        goalList.innerHTML += '<li>' + goalItem.value + '</li>';

        goalItem.value = '';

        localStorage.setItem('goalListItems', goalList.innerHTML);

    }, false );

    var saved = localStorage.getItem('goalListItems');

    if (saved) {
        goalList.innerHTML = saved;
    }
