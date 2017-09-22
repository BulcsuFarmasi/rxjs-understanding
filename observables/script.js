var button = document.querySelector('button');
//button.addEventListener('click', event => {console.log(event)});
Rx.Observable.fromEvent(button, 'click')
    .throttleTime(1000)
    .map(data => data.clientY)
    .subscribe(
        cooardinate => {console.log(cooardinate)}
    );