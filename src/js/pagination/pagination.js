export const Pagination = class {
  page = 1;
  totalPages = 1;
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
    this.totalPages = totalPages;
    this.limit = limit;
    this.sectionBuilderFunction = sectionBuilderFunction;
    const oldPaginationList = document.querySelector('.pagination-list');

    if (oldPaginationList) {
      oldPaginationList.innerHTML = '';
    }

    const paginationList = document.createElement('ul');

    if (!totalPages) {
      paginationList.innerHTML = '';
      return;
    }

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

    this.render();
  }

  createButton(number) {
    const buttonClass = ['pagination-btn'];
    if (number === this.page) buttonClass.push('pagination-btn--active');

    const temlate = `<li>
            <button type='button'
            name="page"
            class='${buttonClass.join(' ')}'
            data-pagination=${number}>${number}</button>
            </li>`;

    return temlate;
  }

  makeButtonsList(totalPages) {
    this.buttonsList = [];

    // Always print first page button
    this.buttonsList.push(this.createButton(1));

    if (this.totalPages === 1) {
      return;
    }

    // Print "..." only if currentPage is > 4
    if (this.page > 4) {
      this.buttonsList.push('...');
    }

    // Print previous pages, current page, and next pages
    for (let i = this.page - 2; i <= this.page + 2; i++) {
      if (i > 1 && i < totalPages) {
        this.buttonsList.push(this.createButton(i));
      }
    }

    // Print "..." if this.page is < lastPage - 3
    if (this.page < totalPages - 3) {
      this.buttonsList.push('...');
    }

    // Always print last page button
    this.buttonsList.push(this.createButton(totalPages));
  }

  render() {
    this.makeButtonsList(this.totalPages);
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
