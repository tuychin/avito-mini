/*
Client API
*/
export default class AvitoDumpService {

  _apiBase = 'https://avito.dump.academy';

  getResource = (resourse) => {
      const url = `${this._apiBase}${resourse}`;

      return new Promise(function(resolve, reject) {
        const req = new XMLHttpRequest();
        
        req.open('GET', url, true);
        req.send();
      
        req.onreadystatechange = function () {
          if (req.readyState === 4) {
            if(req.status === 200) {
              try {
                const resObj = JSON.parse(req.response);
                resolve(resObj);
              } catch(e) {
                console.warn("There was an error in JSON. Could not parse!");
              }
            } else {
              reject(console.warn("Did not receive 200 OK from response!"));
            }
          }
        }
    });
  }
  
  getAllProducts = async () => {
    const res = await this.getResource(`/products`);
    return res.data;
  }

  getAllSellers = async () => {
    const res = await this.getResource(`/sellers`);
    return res.data;
  }

  getAdsData = async () => {
    const adsData = {
      products: await this.getAllProducts(),
      sellers: await this.getAllSellers()
    }

    //Transform api data
    const _transformProducts = (product) => {
      const sellerId = product.relationships.seller;
      const seller = adsData.sellers[sellerId];

      return {
        id: product.id,
        title: product.title,
        isFavorite: false,
        price: product.price,
        images: product.pictures,
        sellerName: seller.name,
        sellerRating: seller.rating
      }
    }

    //Transform all products
    return adsData.products.map(_transformProducts);
  }

}
