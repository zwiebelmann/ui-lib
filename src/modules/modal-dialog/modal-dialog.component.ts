import * as ng from 'angular'

import { ModalDialog, Action } from './modal-dialog.model'
import ModalDialogServiceName, { ModalDialogService } from './modal-dialog.service'
import './modal-dialog.scss'

export default 'modalDialog';

class ModalDialogController implements ng.IController, ModalDialog  {
    id: string;
    windowTitle: string;
    preventCloseOnBorderClick: boolean = false;
    modalDialogService: ModalDialogService;
    showDialog: boolean = false;

    static $inject = [ModalDialogServiceName];

    constructor(modalDialogService: ModalDialogService) {
        this.modalDialogService = modalDialogService;
    }

    $onInit = () => {
        this.modalDialogService.add(this);
    }

    $onDestroy = () => {
        this.modalDialogService.remove(this);
    }

    show = () => {
        this.showDialog = true;
    } 

    borderClick($event: Event) {
        if(!this.preventCloseOnBorderClick) {
            const element = <HTMLElement>$event.target;
            if(element.classList.contains('modal')) {
                this.modalDialogService.hide();
            }
            $event.stopPropagation();
        }
    }

    hide = () => {
        console.log('hide')
        this.showDialog = false;
    }
}

export const ModalDialogComponent = {
    template: require('./modal-dialog.html'),
    controller: ModalDialogController,
    transclude: true,
    bindings: {
        id: '@',
        windowTitle: '@',
        preventCloseOnBorderClick: '<'
    }
} as ng.IComponentOptions