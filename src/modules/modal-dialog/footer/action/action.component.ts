import * as ng from 'angular'

import { Action } from '../../modal-dialog.model'

export default 'action';

class ActionController {
    action: Action;
    closeModal: any;

    doAction = () => {
        this.action.callback();
        this.closeModal({
            action: this.action
        })
    }
}

export const ActionComponent = {
    template: require('./action.html'),
    controller: ActionController,
    bindings: {
        action: '<',
        closeModal: '&'
    }
} as ng.IComponentOptions