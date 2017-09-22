var observable = Rx.Observable.interval(1000);

observable
    .filter()
    .subscribe({
    next: function (value) {
        console.log(value)
    },
    error: function (error) {
        console.log('Error: ' + error);
    }
})