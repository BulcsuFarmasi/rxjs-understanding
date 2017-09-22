var button = document.querySelector('button');
Rx.Observable.fromEvent(button, 'click')
    .subscribe(
        event => {console.log(event.clientX)}
    );