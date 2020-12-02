class Products {
	storageLocation(element, id) {
		const { pushProduct, products } = localStorageUtil.putProducts(id);

		if (pushProduct) {
			element.classList.add('active_btn');
			element.innerHTML = 'Удалить из списка';
		} else {
			element.classList.remove('active_btn');
			element.innerHTML = 'В список покупок';
		}
		headerPage.render(products.length);
	}

	render() {
		const productsStore = localStorageUtil.getProducts();
		let htmlCatalog = '';
		CATALOG.forEach(({ id, name, price, img }) => {
			let activeClass;
			let activeText;

			if (productsStore.indexOf(id) === -1) {
				activeText = 'В список покупок';
			} else {
				activeClass = 'active_btn';
				activeText = 'Удалить из списка';
			}

			htmlCatalog += `
			<div class="products-card">
				<span class="products-name">
					${name}
				</span>
				<img src="${img}" alt="${name}">
				<span class="products-price">
					$${price}
				</span>
				<button class="${activeClass}" onclick="productsPage.storageLocation(this, '${id}')">${activeText}</button>
			</div>`;
		});

		const html = `
		<div class="products-container">
			${htmlCatalog}
		</div>`
		ROOT_PRODUCTS.innerHTML = html;
	}
}

const productsPage = new Products();