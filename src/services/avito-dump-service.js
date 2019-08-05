/*
Client API
*/
export default class AvitoDumpService {

  _apiBase = 'https://avito.dump.academy';

  getResource = (resourse, callback) => {
    const url = `${this._apiBase}${resourse}`;
    const req = new XMLHttpRequest();
  
    req.open('GET', url, true);
    req.send();
  
    req.onreadystatechange = function () {
      if (req.readyState === 4) {
        if(req.status === 200) {
          try {
            const resObj = JSON.parse(req.response);
            callback(resObj);
          } catch(e) {
            console.warn("There was an error in JSON. Could not parse!");
          }
        } else {
          console.warn("Did not receive 200 OK from response!");
        }
      }
    }
  }

  getAllProducts = () => {
    this.getResource('/products', function(data) {
      return data;
    });
  }

  getProduct = (id) => {
    this.getResource(`/products/${id}`, function(data) {
      return console.log(data);
    });
  }
  
  getAllSellers = () => {
    this.getResource('/sellers', function(data) {
      return data;
    });
  }

  getSeller = (id) => {
    this.getResource(`/sellers/${id}`, function(data) {
      return console.log(data);
    });
  }

}