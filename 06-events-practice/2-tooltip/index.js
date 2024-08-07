class Tooltip {
  static instance;
  element;

  constructor(){
    if(Tooltip.instance){

      return Tooltip.instance;

    } else {

      Tooltip.instance = this;

      this.handleMouseEvent = this.handleMouseEvent.bind(this);
      this.removeTooltip = this.removeTooltip.bind(this);
      this.updateTooltipPosition = this.updateTooltipPosition.bind(this);
    }
  }

  initialize(){
    document.addEventListener('pointerover', this.handleMouseEvent);
    document.addEventListener('pointerout', this.removeTooltip);
  }

  handleMouseEvent(event){
    if(event.target.dataset.tooltip){
      if(this.element){
        this.removeTooltip()
      }

      this.render(event.target.dataset.tooltip);
      document.addEventListener('pointermove', this.updateTooltipPosition);
    }
  }

  render(text){
    const div = document.createElement('div');
    div.innerHTML = `<div class="tooltip">${text}</div>`;
    this.element = div.firstElementChild;
    document.body.appendChild(this.element);
  }

  updateTooltipPosition(event){
    this.element.style.top = `${event.clientY + 10}px`;
    this.element.style.left = `${event.clientX + 10}px`;
  }

  removeTooltip(){
    if(this.element){

      this.element.remove();
      this.element = null;

      document.removeEventListener('pointermove', this.updateTooltipPosition);
    }
  }

  destroy(){
    this.removeTooltip();
    this.element = null;

    document.removeEventListener('pointerover', this.handleMouseEvent);
    document.removeEventListener('pointerout', this.removeTooltip);
  }


}

export default Tooltip;
