import SortableTable from '../../05-dom-document-loading/2-sortable-table-v1/index.js';

export default class SortableTableV2 extends SortableTable{
  isSortLocally = true;
  sortField;
  sortOrder;

  constructor(headersConfig, {
    data = [],
    sorted = {
      id: 'title',
      order: 'asc'
    }
  } = {}) {

    super(headersConfig, data);
    
    this.sorted = sorted;

    
    super.createElement(super.getTable());
    super.sort(this.sorted.id, this.sorted.order);
    this.createListeners();
    
  }

  sort () {
    if (this.isSortLocally) {
      this.sortOnClient();
    } else {
      this.sortOnServer();
    }
  }

  sortOnClient(){
    super.sort(this.sortField, this.sortOrder);
  }

  sortOnServer(){}


  createListeners(){
    document.addEventListener('pointerdown', this.handleElementPointerdown, true);
  }

  destroyListeners(){
    document.removeEventListener('pointerdown', this.handleElementPointerdown);
  }


  handleElementPointerdown = (event) => {
    const target = event.target.closest('.sortable-table__cell[data-id]');

    if (!target) {
      return;
    }

    const id = target.dataset.id;
    const sortOrder = target.dataset.order === `desc` ? `desc` : `desc`;

    this.sorted.id = id;
    this.sorted.order = sortOrder; 

    super.sort(this.sorted.id, this.sorted.order);
  }

  destroy(){
    super.destroy();
    this.destroyListeners();
  }
}
