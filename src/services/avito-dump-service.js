/*
Client API
*/
export default class AvitoDumpService {

  /** URL https://avito.dump.academy - not working **/

  // _apiBase = 'https://avito.dump.academy';

  // getData = (resourse) => {
  //     const url = `${this._apiBase}${resourse}`;

  //     return new Promise(function(resolve, reject) {
  //       const req = new XMLHttpRequest();
        
  //       req.open('GET', url, true);
  //       req.send();
      
  //       req.onreadystatechange = function () {
  //         if (req.readyState === 4) {
  //           if(req.status === 200) {
  //             try {
  //               const resObj = JSON.parse(req.response);
  //               resolve(resObj);
  //             } catch(e) {
  //               console.error("There was an error in JSON. Could not parse!");
  //             }
  //           } else {
  //             reject(console.error("Did not receive 200 OK from response!"));
  //           }
  //         }
  //       }
  //   });
  // }

  getData = (dataName) => {
    return new Promise(async (resolve, reject) => {
      const mockData = await import(`./mock-data-${dataName}`);

      if (mockData) {
        setTimeout(() => {
          resolve(mockData.default);
        }, 1000);
      } else {
        reject(console.error('Import error!'));
      }
    });
  }
  
  getAllProducts = async () => {
    const res = await this.getData('products');
    return res.data;
  }

  getAllSellers = async () => {
    const res = await this.getData('sellers');
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
        price: product.price,
        images: product.pictures,
        category: product.category,
        isFavorite: false,
        sellerName: seller.name,
        sellerRating: seller.rating
      }
    }

    //Transform all products
    return adsData.products.map(_transformProducts);
  }

}
