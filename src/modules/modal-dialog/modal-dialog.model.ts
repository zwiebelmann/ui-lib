import * as ng from 'angular'

export interface ModalDialog {
    id: string;
    show: () => void;
    hide: () => void;
}

export class Action<T> {
    constructor(
        public name: string,
        public callback: () => ng.IPromise<T>,
        public closeAfterCallback: boolean = true
    ) {}

    disabled: boolean = false;
}