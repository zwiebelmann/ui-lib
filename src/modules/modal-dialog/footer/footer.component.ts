import * as ng from 'angular'
import { Action } from '../modal-dialog.model';
import ModalDialogServiceName, { ModalDialogService } from '../modal-dialog.service';
import ActionServiceName, { ActionService } from './footer.service'

export default 'footer';

interface FooterBindings {
    actions: Action[];
    dialogId: string;
}

class FooterController implements ng.IController, FooterBindings {
    actions: Action[];
    dialogId: string;
    cancelAction: Action;

    static $inject = [ModalDialogServiceName, ActionServiceName]

    constructor(public modalService: ModalDialogService, public actionService: ActionService) {
        this.cancelAction = new Action(this.dialogId, "Cancel", this.hide);
    }

    $onInit = () => {
        this.actions = this.actionService.getBy(this.dialogId);
    }

    hide = () => {
        this.modalService.hide(this.dialogId);
    }

    close = () => {
        this.hide()
    }
}

export const FooterComponent = {
    controller: FooterController,
    template: require('./footer.html'),
    bindings: {
        dialogId: '<'
    }
} as ng.IComponentOptions

