export const Pagination = class {
  page = 1;
  limit = 12;
  buttonsList = [];
  event = null;
  sectionBuilderFunction = () => console.log('sectionBuilderFunction ');

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
  resetPage() {
    this.page = 1;
  }

  build({ totalPages, sectionBuilderFunction, limit = 12 }) {
    this.page = 1;
    this.buttonsList = [];
    this.limit = limit;
    this.sectionBuilderFunction = sectionBuilderFunction;
    const oldPaginationList = document.querySelector('.pagination-list');

    if (oldPaginationList) {
      oldPaginationList.innerHTML = '';
    }

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
          await this.sectionBuilderFunction();

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
