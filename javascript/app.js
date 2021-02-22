'use strict';
alert(' Welcome to Pat’s Salmon Cookies !');

const seatle = {
  name: ' seatle',
  maxNumberOfCustomers: 65,
  minNumberOfCustomers: 23,
  averageNumberOfCookiesSale: 6.3,
  numberOfCustomers: 0,
  numberOfCookies: 0,
  dayHours: ['06 am', '07 am', '08 am', '09 am', '10 am', '11 am', '12 pm', '01 pm', '02 pm', '03 pm', '04 pm', '05 pm', '06 pm', '07 pm'];

  totalCookies: 0,
  customersNumber: function (min, max) {
    this.numberOfCustomers = RandomNumber(min, max);
  },
  cookiesByHour: function (randomNumber, multiplyNumber) {
    this.numberOfCookies = calcCookiesNumber(randomNumber, multiplyNumber);
  }
}



const Tokyo = {
  name: 'Tokyo',
  maxNumberOfCustomers: 24,
  minNumberOfCustomers: 3,
  averageNumberOfCookiesSale: 1.2,
  numberOfCustomers: 0,
  numberOfCookies: 0,
  totalCookies: 0,
  dayHours: ['06 am', '07 am', '08 am', '09 am', '10 am', '11 am', '12 pm', '01 pm', '02 pm', '03 pm', '04 pm', '05 pm', '06 pm', '07 pm'],
  customersNumber: function (min, max) {
    this.numberOfCustomers = RandomNumber(min, max);
  },
  cookiesByHour: function (randomNumber, multiplyNumber) {
    this.numberOfCookies = calcCookiesNumber(randomNumber, multiplyNumber);
  }
}


const Dubai = {
  name: 'Dubai',
  maxNumberOfCustomers: 38,
  minNumberOfCustomers: 11,
  averageNumberOfCookiesSale: 3.7,
  numberOfCustomers: 0,
  numberOfCookies: 0,
  totalCookies: 0,
  dayHours: ['06 am', '07 am', '08 am', '09 am', '10 am', '11 am', '12 pm', '01 pm', '02 pm', '03 pm', '04 pm', '05 pm', '06 pm', '07 pm'],
  customersNumber: function (min, max) {
    this.numberOfCustomers = RandomNumber(min, max);
  },
  cookiesByHour: function (randomNumber, multiplyNumber) {
    this.numberOfCookies = calcCookiesNumber(randomNumber, multiplyNumber);
  }
}


const Paris = {
  name: 'Paris',
  maxNumberOfCustomers: 38,
  minNumberOfCustomers: 20,
  averageNumberOfCookiesSale:2.3,
  numberOfCustomers: 0,
  numberOfCookies: 0,
  totalCookies: 0,
  dayHours: ['06 am', '07 am', '08 am', '09 am', '10 am', '11 am', '12 pm', '01 pm', '02 pm', '03 pm', '04 pm', '05 pm', '06 pm', '07 pm'],
  customersNumber: function (min, max) {
    this.numberOfCustomers = RandomNumber(min, max);
  },
  cookiesByHour: function (randomNumber, multiplyNumber) {
    this.numberOfCookies = calcCookiesNumber(randomNumber, multiplyNumber);
  }
}

const Lima = {
  name: 'Lima',
  maxNumberOfCustomers: 38,
  minNumberOfCustomers: 20,
  averageNumberOfCookiesSale:2.3,
  numberOfCustomers: 0,
  numberOfCookies: 0,
  totalCookies: 0,
  dayHours: ['06 am', '07 am', '08 am', '09 am', '10 am', '11 am', '12 pm', '01 pm', '02 pm', '03 pm', '04 pm', '05 pm', '06 pm', '07 pm'],
  customersNumber: function (min, max) {
    this.numberOfCustomers = RandomNumber(min, max);
  },
  cookiesByHour: function (randomNumber, multiplyNumber) {
    this.numberOfCookies = calcCookiesNumber(randomNumber, multiplyNumber);
  }
}


function RandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
function calcCookiesNumber (randomNumber,multiplyNumber){
  randomNumber = randomNumber*multiplyNumber;
  return Math.ceil(randomNumber);
}
function renderObjects(objectName){
  const parentElement = document.getElementById('Salamon Cookies');
}

const articleElement = document.createElement('article');
  parentElement.appendChild(articleElement);
  const h2Element = document.createElement('h2');
  articleElement.appendChild(h2Element);
  h2Element.textContent = objectName.cityName;
  const ulElement = document.createElement('ul');
  articleElement.appendChild(ulElement);


  for(let i = 0; i < objectName.dayHours.length; i++) {
    const liElement = document.createElement('li');
    ulElement.appendChild(liElement);
    objectName.numberOfCustomers(objectName.minNumberOfCustomers,objectName.maxNumberOfCustomers);
    objectName.hourlyCookies(objectName.numberOfCustomers,objectName.averageNumberOfCookiesSale);
    liElement.textContent = `${objectName.dayHours[i]}: ${objectName.numberOfCookies} cookies.`;
    objectName.totalCookies = objectName.totalCookies + objectName.numberOfCookies;
    objectName.numberOfCustomers = 0;
    objectName.cookiesNumber = 0;
  }

  const liElement = document.createElement('li');
  ulElement.appendChild(liElement);
  liElement.textContent = `Total: ${objectName.totalCookies} cookies.`;

renderObjects(seatle);
renderObjects(tokyo);
renderObjects(dubai);
renderObjects(paris);
renderObjects(lima);

