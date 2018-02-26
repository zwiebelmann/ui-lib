import { Action } from '../modal-dialog.model'

export default 'actionService';

export class ActionService {
    actionCollection: Action[];

    constructor() {
        this.actionCollection = new Array<Action>();
    }

    add = (action: Action) => {
        this.actionCollection = [...this.actionCollection, action];
    }

    remove = (dialogId: string) => {
        this.actionCollection = this.actionCollection.filter(a => {
            return a.dialogId != dialogId
        })
    }

    getBy = (dialogId: string) => {
        return this.actionCollection.filter(a => {
            return a.dialogId == dialogId
        })
    }
}