function Clock(clock) {
    this.clock = clock;
    this.render = function() {
        this.clock.innerHTML = this.getTime();
    }
}

Clock.prototype.getTime = function() {
    let isFullTime = this.clock.classList.contains('isFull');
    const time = new Date();
    const hours = (time.getHours() < 10) ? '0' + time.getHours() : time.getHours();
    const minutes = (time.getMinutes() < 10) ? '0' + time.getMinutes() : time.getMinutes();
    const seconds = (time.getSeconds() < 10) ? '0' + time.getSeconds() : time.getSeconds();

    if(isFullTime) {
        return `${hours}:${minutes}:${seconds}`;
    } else {
        return `${hours}:${minutes}`;
    }
}

function ShortTimeFormat(clock) {
    Clock.call(this, clock);
    this.clock.addEventListener('click', () => this.clock.classList.toggle('isFull'));
}

function FullTimeFormat(clock) {
    Clock.call(this, clock);
    this.clock.addEventListener('click', () => this.clock.classList.toggle('isShort'));
}

let shortTimeBlock = document.getElementById('short-time');
let fullTimeBlock = document.getElementById('full-time');

let clock = new Clock();
ShortTimeFormat.prototype = Object.create(Clock.prototype);
FullTimeFormat.prototype = Object.create(Clock.prototype);

let shortTimeFormat = new ShortTimeFormat(shortTimeBlock);
let fullTimeFormat = new FullTimeFormat(fullTimeBlock);

FullTimeFormat.prototype.getTime = function() {
    let isShortTime = this.clock.classList.contains('isShort');
    const time = new Date();
    const hours = (time.getHours() < 10) ? '0' + time.getHours() : time.getHours();
    const minutes = (time.getMinutes() < 10) ? '0' + time.getMinutes() : time.getMinutes();
    const seconds = (time.getSeconds() < 10) ? '0' + time.getSeconds() : time.getSeconds();

    if(isShortTime) {
        return `${hours}:${minutes}`;
    } else {
        return `${hours}:${minutes}:${seconds}`;
    }
}

setInterval(() => shortTimeFormat.render(), 250);
setInterval(() => fullTimeFormat.render(), 250);