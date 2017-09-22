var input = document.querySelector('input')
var observable = Rx.Observable.fromEvent(input, 'input');

observable
    .debounceTime(500)
    .subscribe({
    next: function (event) {
        console.log(event.target.value)
    }
})