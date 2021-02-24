'use strict';
alert(' Welcome to Pat’s Salmon Cookies !');
let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
 
let columnHeader = ['Sales/h','6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm','Daily Location Total'];

const article = document.createElement('article');
const table = document.createElement('table');
const tbody = document.createElement('tbody');
function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function City(name, maxNumber, minNumber, averageNumberOfCookiesSale, [], [], totalCookiesSales) {
this.name;
this.maxNumber;
this.minNumber;
this.averageNumberOfCookiesSale;
this.numberOfCustomersPerHour;
this.numberOfCookiesSales;
this.totalCookiesSales;
}


/*{const seattle = {
  name: 'Seatle',
  maxNumber: 65,
  minNumber: 23,
  averageNumberOfCookiesSale: 6.3,
  numberOfCustomersPerHour: [],
  numberOfCookiesSales: [],
  totalCookiesSales: 0,*/

  City.prototype.customersNumber =  function () {
    for (let i = 0; i < hours.length; i++) {
      this.numberOfCustomersPerHour.push(generateRandomNumber(this.minNumber, this.maxNumber));
    }
  };

  
  City.prototype.cookiesByHour = function () {
    for (let i = 0; i < hours.length; i++) {
      let personNumberOfCookies = Math.floor(generateRandomNumber(this.minNumber, this.maxNumber) * this.averageNumberOfCookiesSale);
      this.numberOfCookiesSales.push(numberOfCookiesSales);

      this.totalCookiesSales += personNumberOfCookies;
    }
  },


  City.prototype.render = function () {
    const parentElement = document.getElementById('Salamon');
    const articleElement = document.createElement('article');
    parentElement.appendChild(articleElement);

    const tableElement = document.createElement('table');
    articleElement.appendChild(tableElement);
    

    const trElement = document.createElement('tr');
    tableElement.appendChild(trElement);

    for (let i = 0; i < columnHeader.length; i++) {
      const liElement = document.createElement('th');
      tr1Element.appendChild(th1Element);
      th1Element.textContent = columnHeader[i] ;

  
    
    }

    const tr1Element = document.createElement('tr');
    tableElement.appendChild(tr1Element);
    const td1Element = document.createElement('td');
    tr1Element.appendChild(td1Element);
    td1Element.textContent = 'Seattle';

    const tr2Element = document.createElement('tr');
    tableElement.appendChild(tr2Element);
    const td2Element = document.createElement('td');
    tr2Element.appendChild(td2Element);
    td2Element.textContent = 'Tokyo';

    const tr3Element = document.createElement('tr');
    tableElement.appendChild(tr3Element);
    const td3Element = document.createElement('td');
    tr3Element.appendChild(td3Element);
    td3Element.textContent = 'Dubai';


    const tr4Element = document.createElement('tr');
    tableElement.appendChild(tr4Element);
    const td4Element = document.createElement('td');
    tr4Element.appendChild(td4Element);
    td4Element.textContent = 'Paris';

    
    const tr5Element = document.createElement('tr');
    tableElement.appendChild(tr5Element);
    const td5Element = document.createElement('td');
    tr5Element.appendChild(td5Element);
    td5Element.textContent = 'Lima';


    const tr6Element = document.createElement('tr');
    tableElement.appendChild(tr6Element);
    const td6Element = document.createElement('td');
    tr6Element.appendChild(td6Element);
    td6Element.textContent = 'Totals';
      
  };

  const Seattle = new City('Seattle', 23, 65, 6.3, [], [], 0);
  Seattle.numberOfCookiesSale();
  console.log(seattle);

  const tokyo = new City('Tokyo', 3, 24, 1.2, [], [], 0);
  tokyo.numberOfCookiesSale();
  console.log(tokyo);

  const dubai = new City('Dubai', 11, 38, 3.7, [], [], 0);
  dubai.numberOfCookiesSale();
  console.log(dubai);

  const paris = new City('Paris', 20, 38, 2.3, [], [], 0);
  paris.numberOfCookiesSale();
  console.log(paris);

  const lima = new City('Lima', 2, 16, 4.6, [], [], 0);
  lima.numberOfCookiesSale();
  console.log(lima);

  City.prototype.render();

  /*elem.addEventListener(type, handler, {
    once: true
});*/








    

   /* const liElement = document.createElement('li');
    trElement.appendChild(liElement);
    liElement.textContent = `Total: ` + this.totalCookiesSales + ` cookies`;
    */
  


/*seattle.customersNumber();
seattle.cookiesByHour();
seattle.render();



const Tokyo = {
  name: 'Tokyo',
  maxNumber: 24,
  minNumber: 3,
  averageNumberOfCookiesSale: 1.2,
  numberOfCustomersPerHour: [],
  numberOfCookiesSales: [],
  totalCookiesSales: 0,

  customersNumber: function () {
    for (let i = 0; i < hours.length; i++) {
      this.numberOfCustomersPerHour.push(generateRandomNumber(this.minNumber, this.maxNumber));
    }
  },

  
  cookiesByHour: function () {
    for (let i = 0; i < hours.length; i++) {
      let personNumberOfCookies = Math.floor(generateRandomNumber(this.minNumber, this.maxNumber) * this.averageNumberOfCookiesSale);
      this.numberOfCookiesSales.push(personNumberOfCookies);

      this.totalCookiesSales += personNumberOfCookies;
    }
  },
  */


 // render: function () {
   /* const parentElement = document.getElementById('Salamon');
    const articleElement = document.createElement('article');
    parentElement.appendChild(articleElement);
*/
 /* const h2Element = document.createElement('h2');
    articleElement.appendChild(h2Element);
    h2Element.textContent = this.name;

 /*   const ulElement = document.createElement('ul');
    articleElement.appendChild(ulElement);

    for (let i = 0; i < hours.length; i++) {
      const liElement = document.createElement('li');
      ulElement.appendChild(liElement);
      liElement.textContent = hours[i] + `:` + this.numberOfCookiesSales[i] + ` cookies`;
    }
    const liElement = document.createElement('li');
    ulElement.appendChild(liElement);
    liElement.textContent = `Total: ` + this.totalCookiesSales + ` cookies`;

  }
};

Tokyo.customersNumber();
Tokyo.cookiesByHour();
Tokyo.render();
/*

const Dubai = {
  name: 'Dubai',
  maxNumber: 38,
  minNumber: 11,
  averageNumberOfCookiesSale: 3.7,
  numberOfCustomersPerHour: [],
  numberOfCookiesSales: [],
  totalCookiesSales: 0,

  customersNumber: function () {
    for (let i = 0; i < hours.length; i++) {
      this.numberOfCustomersPerHour.push(generateRandomNumber(this.minNumber, this.maxNumber));
    }
  },

  
  cookiesByHour: function () {
    for (let i = 0; i < hours.length; i++) {
      let personNumberOfCookies = Math.floor(generateRandomNumber(this.minNumber, this.maxNumber) * this.averageNumberOfCookiesSale);
      this.numberOfCookiesSales.push(personNumberOfCookies);

      this.totalCookiesSales += personNumberOfCookies;
    }
  },


  render: function () {
    const parentElement = document.getElementById('Salamon');
    const articleElement = document.createElement('article');
    parentElement.appendChild(articleElement);

    const h2Element = document.createElement('h2');
    articleElement.appendChild(h2Element);
    h2Element.textContent = this.name;

    const ulElement = document.createElement('ul');
    articleElement.appendChild(ulElement);

    for (let i = 0; i < hours.length; i++) {
      const liElement = document.createElement('li');
      ulElement.appendChild(liElement);
      liElement.textContent = hours[i] + `:` + this.numberOfCookiesSales[i] + ` cookies`;
    }
    const liElement = document.createElement('li');
    ulElement.appendChild(liElement);
    liElement.textContent = `Total: ` + this.totalCookiesSales + ` cookies`;

  }
};

Dubai.customersNumber();
Dubai.cookiesByHour();
Dubai.render();


const Paris = {
  name: 'Paris',
  maxNumber: 38,
  minNumber: 20,
  averageNumberOfCookiesSale: 2.3,
  numberOfCustomersPerHour: [],
  numberOfCookiesSales: [],
  totalCookiesSales: 0,

  customersNumber: function () {
    for (let i = 0; i < hours.length; i++) {
      this.numberOfCustomersPerHour.push(generateRandomNumber(this.minNumber, this.maxNumber));
    }
  },

  
  cookiesByHour: function () {
    for (let i = 0; i < hours.length; i++) {
      let personNumberOfCookies = Math.floor(generateRandomNumber(this.minNumber, this.maxNumber) * this.averageNumberOfCookiesSale);
      this.numberOfCookiesSales.push(personNumberOfCookies);

      this.totalCookiesSales += personNumberOfCookies;
    }
  },


  render: function () {
    const parentElement = document.getElementById('Salamon');
    const articleElement = document.createElement('article');
    parentElement.appendChild(articleElement);

    const h2Element = document.createElement('h2');
    articleElement.appendChild(h2Element);
    h2Element.textContent = this.name;

    const ulElement = document.createElement('ul');
    articleElement.appendChild(ulElement);

    for (let i = 0; i < hours.length; i++) {
      const liElement = document.createElement('li');
      ulElement.appendChild(liElement);
      liElement.textContent = hours[i] + `:` + this.numberOfCookiesSales[i] + ` cookies`;
    }
    const liElement = document.createElement('li');
    ulElement.appendChild(liElement);
    liElement.textContent = `Total: ` + this.totalCookiesSales + ` cookies`;

  }
};

Paris.customersNumber();
Paris.cookiesByHour();
Paris.render();


const Lima = {
  name: 'Lima',
  maxNumber: 16,
  minNumber: 2,
  averageNumberOfCookiesSale: 4.6,
  numberOfCustomersPerHour: [],
  numberOfCookiesSales: [],
  totalCookiesSales: 0,

  customersNumber: function () {
    for (let i = 0; i < hours.length; i++) {
      this.numberOfCustomersPerHour.push(generateRandomNumber(this.minNumber, this.maxNumber));
    }
  },

  
  cookiesByHour: function () {
    for (let i = 0; i < hours.length; i++) {
      let personNumberOfCookies = Math.floor(generateRandomNumber(this.minNumber, this.maxNumber) * this.averageNumberOfCookiesSale);
      this.numberOfCookiesSales.push(personNumberOfCookies);

      this.totalCookiesSales += personNumberOfCookies;
    }
  },


  render: function () {
    const parentElement = document.getElementById('Salamon');
    const articleElement = document.createElement('article');
    parentElement.appendChild(articleElement);

    const h2Element = document.createElement('h2');
    articleElement.appendChild(h2Element);
    h2Element.textContent = this.name;

    const ulElement = document.createElement('ul');
    articleElement.appendChild(ulElement);

    for (let i = 0; i < hours.length; i++) {
      const liElement = document.createElement('li');
      ulElement.appendChild(liElement);
      liElement.textContent = hours[i] + `:` + this.numberOfCookiesSales[i] + ` cookies`;
    }
    const liElement = document.createElement('li');
    ulElement.appendChild(liElement);
    liElement.textContent = `Total: ` + this.totalCookiesSales + ` cookies`;

  }
};

Lima.customersNumber();
Lima.cookiesByHour();
Lima.render();*/