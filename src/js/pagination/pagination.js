export const Pagination = class {
  page = 1;
  limit = 12;
  buttonsList = [];
  event = null;

  constructor(name, container) {
    this.name = name;
    this.container = container;
  }
  get currentPage() {
    return this.page;
  }
  set currentPage(newPage) {
    this.page = newPage;
  }
  incrementPage() {
    this.page += 1;
  }
  decrementPage() {
    this.page -= 1;
  }
  resetPage() {
    this.page = 1;
  }

  create({ totalPages, renderFunction, limit = 12 }) {
    this.limit = limit;
    const oldPaginationList = document.querySelector('.pagination-list');
    if (oldPaginationList) {
      oldPaginationList.remove();
    }

    if (totalPages <= 1) return;

    const paginationList = document.createElement('ul');
    paginationList.classList.add('pagination-list');
    this.container.append(paginationList);

    paginationList.addEventListener('click', onButtonClick.bind(this));

    async function onButtonClick(e) {
      if (e.target.hasAttribute('data-pagination')) {
        const oldCurrentPage = this.page;

        this.page = Number(e.target.getAttribute('data-pagination'));

        const newCurrentPage = this.page;

        if (oldCurrentPage !== newCurrentPage) {
          await renderFunction(this.page, this.limit);
          this.render();
        }
      }
    }

    const paginationPageButtons = () => {
      for (let i = 1; i <= totalPages; i += 1) {
        const buttonClass = ['pagination-btn'];
        if (i === this.page) buttonClass.push('pagination-btn--active');
        this.buttonsList.push(
          `<li>
          <button type='button'
          name="page"
          class='${buttonClass.join(' ')}'
          data-pagination=${i}>${i}</button>
          </li>`
        );
      }
    };

    paginationPageButtons();
    this.render();
  }

  render() {
    const paginationList = document.querySelector('.pagination-list');

    paginationList.innerHTML = this.buttonsList.join('');

    const currentActiveBtn = document.querySelector('.pagination-btn--active');
    currentActiveBtn?.classList.remove('pagination-btn--active');

    const activeBtn = document.querySelector(
      `.pagination-btn[data-pagination='${this.page}']`
    );
    activeBtn.classList.add('pagination-btn--active');
  }
};
