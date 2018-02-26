export interface ModalDialog {
    id: string;
    show: () => void;
    hide: () => void;
}

export class Action {
    constructor(
        public dialogId: string,
        public name: string,
        public callback: (...parameters:any[]) => any
    ) {}
    
    disabled: boolean = false;
}