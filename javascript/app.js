'use strict';
alert(' Welcome to Pat’s Salmon Cookies !');
let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
 
function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}


const seattle = {
  name: 'Seatle',
  maxNumber: 65,
  minNumber: 23,
  averageNumberOfCookiesSale: 6.3,
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

seattle.customersNumber();
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

Tokyo.customersNumber();
Tokyo.cookiesByHour();
Tokyo.render();


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
Lima.render();