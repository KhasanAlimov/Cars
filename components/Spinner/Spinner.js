class Spinner {
  handleClear() {
    ROOT_SPINNER.innerHTML = '';
  }

  render() {
    const html = `
    <div class="spinner-container">
    	<img src="components/Spinner/img/Infinity-spinner.svg" class="infinity-spinner">
    </div>
    `;

    ROOT_SPINNER.innerHTML = html;
  }
}
const spinnerPage = new Spinner();