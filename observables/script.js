var button = document.querySelector('button');

var observer = {
    next: function (value) {
        console.log(value)
    },
    error: function (error) {
        console.log(error)
    },
    complete: function () {
        console.log('Completed!')
    }
}
//Rx.Observable.fromEvent(button, 'click')

Rx.Observable.create(function (obs) {
    obs.next('A value');
    //obs.error('Error');
    obs.complete();
    obs.next('Another value');
}).subscribe(observer);