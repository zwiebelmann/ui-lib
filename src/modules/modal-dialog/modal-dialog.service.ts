import { ModalDialog } from './modal-dialog.model'
import ActionServiceName, { ActionService } from './footer/footer.service'

export default "modalDialogService";

export class ModalDialogService {
    modalDialogCollection: ModalDialog[];

    static $inject = [ActionServiceName]

    constructor(public actionService: ActionService) {
        this.modalDialogCollection = new Array<ModalDialog>();
    }

    add = (modalDialog: ModalDialog) => {
        this.modalDialogCollection.push(modalDialog);
    }

    remove = (modalDialog: ModalDialog) => {
        this.modalDialogCollection = 
            this.modalDialogCollection.filter((md) => {
                return md != modalDialog
            });
    }

    show = (modalDialogId: string) => {
        this.modalDialogCollection.map((modalDialog) => {
            if (modalDialog.id == modalDialogId) modalDialog.show();
        })
    }

    hide = (modalDialogId: string) => {
        this.modalDialogCollection.map((modalDialog) => {
            if (modalDialog.id == modalDialogId) modalDialog.hide();
        })
        this.actionService.remove(modalDialogId);
    }
}