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
    const formathour = `${hour}:${minute}:${formatSecond}`;
    return formathour;
}

const dayNumber = new Date().getDay();
const monthNumber = new Date().getMonth();
const hour = new Date().getHours();
const minute = new Date().getMinutes();
const second = new Date().getSeconds();

const dayWeek = nameOfTheDay(dayNumber);
const date = new Date().getDate();
const month = NameOfTheMonth(monthNumber);
const year = new Date().getFullYear();
const format = formatHours(hour, minute, second);

const formattedDate = `${dayWeek}, ${date} de ${month} de ${year}. ${format}`;

const horario = document.querySelector('#horario')

horario.innerHTML += `<p> ${formattedDate} </p> `
