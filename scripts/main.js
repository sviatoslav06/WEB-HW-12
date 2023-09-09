const newWindow = window.open('', '', 'width=410,height=410');

console.log(newWindow.screenX, newWindow.screenY);

setTimeout(function () {
    newWindow.resizeTo(500, 500);
    console.log(newWindow.screenX, newWindow.screenY);
}, 2000);

setTimeout(function () {
    newWindow.moveTo(200, 200);
    console.log(newWindow.screenX, newWindow.screenY);
}, 4000);

setTimeout(function () {
    newWindow.close();
    console.log(newWindow.screenX, newWindow.screenY);
}, 6000);