class Header {

	openShoping() {
		shopingPage.render();
	}
	render(count) {

		const html = `
		<div class="header-container">
			<div class="header-logo">
				<h3>carSShop</h3>
				<p class="logo-title">demo landing page</p>
			</div>
			<div class="quantity-block" onclick="headerPage.openShoping()">
				<img src="img/Quantity-icon2.png" alt="Quantity" class="quantity-icon">
				<p class="quantity">${count}</p>
			</div>
		</div>`;
		ROOT_HEADER.innerHTML = html;

	}
}
const headerPage = new Header();