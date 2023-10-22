function nameOfTheDay(dayNumber) {
    let dayName;

    switch (dayNumber) {
        case 0:
            dayName = 'Domingo';
            break;
        case 1:
            dayName = 'Segunda-Feira';
            break;
        case 2:
            dayName = 'Terça-Feira';
            break;
        case 3:
            dayName = 'Quarta-Feira';
            break;
        case 4:
            dayName = 'Quinta-Feira';
            break;
        case 5:
            dayName = 'Sexta-Feira';
            break;
        case 6:
            dayName = 'Sábado';
            break;
        default:
            dayName = 'Dia-inválido';
    }
    return dayName;
}

function NameOfTheMonth(monthNumber) {
    let MonthName;

    switch (monthNumber) {
        case 0:
            MonthName = 'Janeiro';
            break;
        case 1:
            MonthName = 'Fevereiro';
            break;
        case 2:
            MonthName = 'Março';
            break;
        case 3:
            MonthName = 'Abril';
            break;
        case 4:
            MonthName = 'Maio';
            break;
        case 5:
            MonthName = 'Junho';
            break;
        case 6:
            MonthName = 'Julho';
            break;
        case 7:
            MonthName = 'Agosto';
            break;
        case 8:
            MonthName = 'Setembro';
            break;
        case 9:
            MonthName = 'Outubro';
            break;
        case 10:
            MonthName = 'Novembro';
            break;
        case 11:
            MonthName = 'Dezembro';
            break;
        default:
            MonthName = 'Mês inválido';
    }
    return MonthName;
}

function formatHours(hour, minute, second) {

    const formatSecond = second<10 ? (`0${second}`) : second
    const formatMinute = minute<10 ? (`0${minute}`) : minute
    const formatHour = hour<10 ? (`0${hour}`) : hour
    const formatFullHour = `${formatHour}:${formatMinute}:${formatSecond}`;
    return formatFullHour;
}

let horario = document.querySelector('#horario');

function updateClock() {
    let date = new Date();
    const dayNumber = date.getDay();
    const monthNumber = date.getMonth();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();

    const dayWeek = nameOfTheDay(dayNumber);
    const dayMonth = date.getDate();
    const month = NameOfTheMonth(monthNumber);
    const year = date.getFullYear();
    const format = formatHours(hour, minute, second);

    const formattedDate = `${dayWeek}, ${dayMonth} de ${month} de ${year}. ${format}`;

    horario.innerHTML = `<p>${formattedDate}</p>`;
}

setInterval(updateClock, 1000);
