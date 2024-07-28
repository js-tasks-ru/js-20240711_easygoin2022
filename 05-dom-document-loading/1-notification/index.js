export default class NotificationMessage {
    static currentElem;
    constructor(message = '', props = {}){
        
        const {duration = 0, type = ''} = props;

        this.message = message;
        this.duration = duration;
        this.type = type;

        this.element = this.createElement(this.createTemplate());
    }

    createElement(template){
        const div = document.createElement('div');
        div.innerHTML = template;
        return div.firstElementChild;
    }

    createTemplate(){
        return `
        <div class="${this.createNotifClass()}" style="--value:${this.duration}">
            <div class="timer" style="--value:${this.duration / 1000}s"></div>
            <div class="inner-wrapper">
                <div class="notification-header">${this.type}</div>
                <div class="notification-body">
                 ${this.message}
                </div>
            </div>
        </div>
        `;
    }

    createNotifClass(){
        return this.type === 'success' ? 'notification success' : 'notification error';
    }

    show(context = document.body){
        if(!NotificationMessage.currentElem){
            NotificationMessage.currentElem = this.element;
            context.appendChild(this.element);
            setTimeout(() => {
                this.destroy();
                NotificationMessage.currentElem = false;
            }, this.duration);
        }
       
    }

    destroy(){
        this.remove();
    }

    remove(){
        this.element.remove();
    }
}
