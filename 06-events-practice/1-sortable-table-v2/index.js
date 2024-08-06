import SortableTable from '../../05-dom-document-loading/2-sortable-table-v1/index.js';

export default class SortableTableV2 extends SortableTable{


  constructor(headersConfig, {
    data = [],
    sorted = {
      id: 'title',
      order: 'asc'
    }
  } = {}) {

    super(headersConfig, data);
    
    this.sorted = sorted;

    
    super.render();
    super.sort(this.sorted.id, this.sorted.order);
    this.createListeners();
    
  }


  createListeners(){
    document.addEventListener('click', this.handleDocumentClick, true);
  }

  destroyListeners(){
    document.removeEventListener('click', this.handleDocumentClick);
  }


  handleDocumentClick(event) {
    const target = event.target.closest('[data-id]');
    
    if (target) {
      const id = target.dataset.id;
      
      if (id) {
        this.sorted.id = id;
        this.sorted.order = this.sorted.order === 'asc' ? 'desc' : 'asc'; 
        super.sort(this.sorted.id, this.sorted.order);
      }
    }
  }

  destroy(){
    super.destroy();
    this.destroyListeners();
  }
}
