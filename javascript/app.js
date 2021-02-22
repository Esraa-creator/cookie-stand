'use strict';
alert(' Welcome to Pat’s Salmon Cookies !');
let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm']; function generateRandomNumber(min, max) {
 
function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const seattle = {
  name: ' seatle',
  maxNumber: 65,
  minNumber: 23,
  averageNumberOfCookiesSale: 6.3,
  numberOfCustomersPerHour: [],
  numberOfCookiesSales: [],
  totalCookiesSales: 0,

  customersNumber: function () {
    for (let i = 0; i < hours.length; i++) {
      this.numberOfCustomersPerHour.push(generateRandomNumber(this.minNumber, this.maxnNumber));
    }
  },

  cookiesByHour: function () {
    for (let i = 0; i < hours.length; i++) {
      let numberOfCookiesSales = Math.floor(generateRandomNumber(this.minNumber, this.maxNumber) * this.averageNumberOfCookiesSale);
      this.totalCookiesSales.push(numberOfCookiesSales);

      this.totalCookiesSales += numberOfCookiesSales;
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
  maxNumberOfCustomers: 24,
  minNumberOfCustomers: 3,
  averageNumberOfCookiesSale: 1.2,
  numberOfCustomersPerHour: [],
  numberOfCookiesSales: [],
  totalCookies: 0,

  customersNumber: function () {
    for (let i = 0; i < hours.length; i++) {
      this.numberOfCustomersPerHour.push(generateRandomNumber(this.minNumber, this.maxnNumber));
    }
  },

  cookiesByHour: function () {
    for (let i = 0; i < hours.length; i++) {
      let numberOfCookiesSales = Math.floor(generateRandomNumber(this.minNumber, this.maxNumber) * this.averageNumberOfCookiesSale);
      this.totalCookiesSales.push(numberOfCookiesSales);

      this.totalCookiesSales += numberOfCookiesSales;
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

eattle.customersNumber();
seattle.cookiesByHour();
seattle.render();





const Dubai = {
  name: 'Dubai',
  maxNumberOfCustomers: 38,
  minNumberOfCustomers: 11,
  averageNumberOfCookiesSale: 3.7,
  numberOfCustomersPerHour: [],
  numberOfCookiesSales: [],
  totalCookies: 0,


  customersNumber: function () {
    for (let i = 0; i < hours.length; i++) {
      this.numberOfCustomersPerHour.push(generateRandomNumber(this.minNumber, this.maxnNumber));
    }
  },

  cookiesByHour: function () {
    for (let i = 0; i < hours.length; i++) {
      let numberOfCookiesSales = Math.floor(generateRandomNumber(this.minNumber, this.maxNumber) * this.averageNumberOfCookiesSale);
      this.totalCookiesSales.push(cookiesNum);

      this.totalCookiesSales += cookiesNum;
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
  maxNumberOfCustomers: 38,
  minNumberOfCustomers: 20,
  averageNumberOfCookiesSale: 2.3,
  numberOfCustomersPerHour: [],
  numberOfCookiesSales: [],
  totalCookies: 0,

  customersNumber: function () {
    for (let i = 0; i < hours.length; i++) {
      this.numberOfCustomers.push(generateRandomNumber(this.minNumber, this.maxnNumber));
    }
  },

  cookiesByHour: function () {
    for (let i = 0; i < hours.length; i++) {
      let numberOfCookiesSales = Math.floor(generateRandomNumber(this.minNumber, this.maxNumber) * this.averageNumberOfCookiesSale);
      this.totalCookiesSales.push(cookiesNum);

      this.totalCookiesSales += cookiesNum;
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
  maxNumberOfCustomers: 38,
  minNumberOfCustomers: 20,
  averageNumberOfCookiesSale: 2.3,
  numberOfCustomersPerHour: [],
  numberOfCookiesSales: [],
  totalCookies: 0,
  customersNumber: function () {
    for (let i = 0; i < hours.length; i++) {
      this.numberOfCustomersPerHour.push(generateRandomNumber(this.minNumber, this.maxnNumber));
    }
  },

  cookiesByHour: function () {
    for (let i = 0; i < hours.length; i++) {
      let numberOfCookiesSales = Math.floor(generateRandomNumber(this.minNumber, this.maxNumber) * this.averageNumberOfCookiesSale);
      this.totalCookiesSales.push(cookiesNum);

      this.totalCookiesSales += cookiesNum;
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
}
