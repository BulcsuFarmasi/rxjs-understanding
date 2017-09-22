var input = document.querySelector('input')
var observable = Rx.Observable.fromEvent(input, 'input');

observable
    .subscribe({
    next: function (event) {
        console.log(event.target.value)
    }
})