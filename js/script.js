const hour = document.querySelector('.h'),
    min = document.querySelector('.m'),
    sec = document.querySelector('.s'),
    hoursNumber = document.querySelector('.hours'),
    minutesNumber = document.querySelector('.minutes');



function clock() {
    let time = new Date(),
        second = time.getSeconds() * 6,
        minutes = time.getMinutes() * 6,
        hours = time.getHours() * 30;


    sec.style = `transform: rotate(${second}deg); transition: 1s linear`;
    min.style = `transform: rotate(${minutes}deg); transition: 1s linear`;
    hour.style = `transform: rotate(${hours}deg); transition: 1s linear`;

    minutesNumber.innerHTML = time.getMinutes() < 10 ? '0' + time.getMinutes() : time.getMinutes();
    hoursNumber.innerHTML = time.getHours() < 10 ? '0' + time.getHours() : time.getHours();

    setTimeout(() => clock(), 1000)
}

clock()

// setInterval(() => clock(), 1000)

const links = document.querySelectorAll('.tabsItem'),
    tabs = document.querySelectorAll('.tabsContentItem');

for (let i = 0; i < links.length; i++) {
    links[i].addEventListener('click', function (e) {
        e.preventDefault();

        for (let a = 0; a < links.length; a++) {
            // classList - действия с классами
            // classList.add - добавление класса
            // classList.remove - удаление класса

            links[a].classList.remove('active');
            tabs[a].classList.remove('active');
        }

        links[i].classList.add('active');
        tabs[i].classList.add('active');

    })
}


// === Секундомер ===

const watchBtn = document.querySelector('.stopwatch__btn'),
    secondWatch = document.querySelector('.stopwatch__seconds'),
    minutesWatch = document.querySelector('.stopwatch__minutes'),
    hoursWatch = document.querySelector('.stopwatch__hours'),
    secondInfo = document.querySelector('.tabsLink__span');

watchBtn.addEventListener('click', function () {
    if (this.innerHTML == 'start') {
        this.innerHTML = 'stop';
        secondInfo.classList.add('active');
        setTimeout(() => stopwatch(this),1000);
    } else if (this.innerHTML == 'stop') {
        this.innerHTML = 'clear';
        secondInfo.classList.remove('active');
        secondInfo.classList.add('active_clear');
    } else {
        this.innerHTML = 'start';
        secondInfo.classList.remove('active_clear');
        secondWatch.innerHTML = 0;
        minutesWatch.innerHTML = 0;
        hoursWatch.innerHTML = 0;
    }
})


function stopwatch(element) {
    if (element.innerHTML == 'stop') {
        if (secondWatch.innerHTML == 59){
            secondWatch.innerHTML = 0;
            if (minutesWatch.innerHTML == 59) {
                minutesWatch.innerHTML = 0;
                hoursWatch.innerHTML++;
            } else{
                minutesWatch.innerHTML++;
            }
        } else {
            secondWatch.innerHTML++;
        }

        setTimeout(() => stopwatch(element), 1000);
    }
}

