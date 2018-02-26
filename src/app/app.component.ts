import * as ng from 'angular'
import ModalDialogServiceName, { ModalDialogService } from '../modules/modal-dialog/modal-dialog.service'

import './app.scss';

export default 'demoApp';
class AppController implements ng.IController {
    modalService: ModalDialogService;

    static $inject = [ModalDialogServiceName];

    constructor(modalService: ModalDialogService) {
        this.modalService = modalService;
    }

    $onInit = () => {
    }

    clicked = (id: string) => {
        this.modalService.show(id);
    }
}

export const AppComponent = {
    template: require('./app.html'),
    controller: AppController
} as ng.IComponentOptions;