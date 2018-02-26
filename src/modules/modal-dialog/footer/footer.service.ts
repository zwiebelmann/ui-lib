import { Action } from '../modal-dialog.model'

export default 'actionService';

export class ActionService {
    actionCollection: Action<{}>[];

    constructor() {
        this.actionCollection = new Array<Action<{}>>();
    }

    add = (action: Action<{}>) => {
        this.actionCollection = [...this.actionCollection, action];
    }

    clear = () => {
        this.actionCollection = new Array<Action<{}>>();
    }

    getAll = () => {
        return this.actionCollection;
    }
}