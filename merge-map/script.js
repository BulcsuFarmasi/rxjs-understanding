var input1 = document.querySelector('#input1');
var input2 = document.querySelector('#input2');
var span = document.querySelector('span');

var obs1 = Rx.Observable.fromEvent(input1, 'input')
    .subscribe(
        event => { span.textContent = event.target.value }
    );

var obs2 = Rx.Observable.fromEvent(input2, 'input')
    .subscribe(
        event => { span.textContent = event.target.value }
    );