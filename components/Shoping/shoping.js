class Shoping {
	handleClear() {
		ROOT_SHOPING.innerHTML = '';
	}

	render() {

		const productsStore = localStorageUtil.getProducts();
		let htmlCatalog = '';
		let sumCatalog = 0;

		CATALOG.forEach(({ id, name, price}) => {
			if (productsStore.indexOf(id) !== -1) {
				htmlCatalog += '<tr><td class="name-td">' + name + '</td><td class="price-td">$' + price + '</td></tr>';
				sumCatalog += price;
			}
		});

		const html = '<div class="shoping-container"><i class="fas fa-times" onclick="shopingPage.handleClear()"></i><table><tr><th>Имя</th><th>Цена</th></tr>' + htmlCatalog + '<tr><td>Сумма</td><td>' + sumCatalog + '</td></tr></table></div>';
		ROOT_SHOPING.innerHTML = html;
	}
}

const shopingPage = new Shoping();