import * as ng from 'angular'

import { Action } from '../../modal-dialog.model'
import ModalDialogServiceName, { ModalDialogService } from '../../modal-dialog.service'

export default 'action';

class ActionController {
    action: Action<{}>;
    loading: boolean = false;
    loadingImage: string = require('./loading.gif');

    static $inject = [ModalDialogServiceName]

    constructor(public modalService: ModalDialogService) {
        console.log(this.loadingImage)
    }

    doAction = () => {
        this.loading = true;
        this.action.callback()
            .then(() => { 
                if(this.action.closeAfterCallback) {
                    this.modalService.hide();
                }
            })
            .finally(() => { 
                this.loading = false; 
            });
    }
}

export const ActionComponent = {
    template: require('./action.html'),
    controller: ActionController,
    bindings: {
        action: '<'
    }
} as ng.IComponentOptions