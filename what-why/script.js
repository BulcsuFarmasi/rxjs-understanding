var button = document.querySelector('button');
//button.addEventListener('click', event => {console.log(event)});
Rx.Observable.fromEvent(button, 'click')
    .subscribe(
        event => {console.log(event)}
    );