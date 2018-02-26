import * as ng from 'angular'

import { Action } from '../../modules/modal-dialog/modal-dialog.model'
import ActionServiceName, { ActionService } from '../../modules/modal-dialog/footer/footer.service'

export default 'detail'

class DetailController implements ng.IController {
    dialogId: string;

    static $inject = [ActionServiceName]
    
    constructor(public actionService: ActionService) {}

    $onInit = () => {
        this.setActions();
    }

    setActions = () => {
        this.actionService.add(
            new Action(this.dialogId, "Approve", () => {console.log('ist approved')})
        )
        this.actionService.add(
            new Action(this.dialogId, "Save", () => {console.log('läuft.')})
        )
    }
}

export const DetailComponent = {
    template: require('./detail.html'),
    controller: DetailController,
    bindings: {
        dialogId: '@'
    }
} as ng.IComponentOptions