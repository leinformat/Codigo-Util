fetch('https://shop.dakotastorage.com/collections/kennels/products.json?limit=250')
    .then(res => res.json())
    .then(res => {
        const products = res.products.filter(item => item.tags.indexOf('Packages_Dog_Kennel') >= 0);
        console.log(products);
    })