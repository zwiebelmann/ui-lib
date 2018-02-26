import * as ng from 'angular'
import { Action } from '../modal-dialog.model';
import ModalDialogServiceName, { ModalDialogService } from '../modal-dialog.service';
import ActionServiceName, { ActionService } from './footer.service'

export default 'footer';

class FooterController implements ng.IController {
    actions: Action<{}>[];
    cancelAction: Action<{}>;

    static $inject = ['$q', ModalDialogServiceName, ActionServiceName]

    constructor(public $q: ng.IQService, public modalService: ModalDialogService, public actionService: ActionService) {
        this.cancelAction = new Action("Cancel", () => { return $q(this.modalService.hide) });
    }

    $onInit = () => {
        this.actions = this.actionService.getAll();
    }
}

export const FooterComponent = {
    controller: FooterController,
    template: require('./footer.html')
} as ng.IComponentOptions

