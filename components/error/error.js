class Error {
  render() {
    const html = `
    <div class="error-img-container">
      <img src="components/error/img/404-error-page.jpg" class="error-img">
    </div>`;

    ROOT_ERROR.innerHTML = html;
  }
}

const errorPage = new Error();