function render() {

	const qountityProducts = localStorageUtil.getProducts();

	headerPage.render(qountityProducts.length);
	productsPage.render();

}

spinnerPage.render();

let CATALOG = [];

fetch('server/catalog.json')
	.then(res => res.json())
    .then(body => {
		CATALOG = body;

		spinnerPage.handleClear();
		render();

	})
	.catch(error => {
		spinnerPage.handleClear();
		errorPage.render();
	});
	