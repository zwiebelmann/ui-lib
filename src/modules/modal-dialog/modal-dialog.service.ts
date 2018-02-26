import { ModalDialog } from './modal-dialog.model'
import ActionServiceName, { ActionService } from './footer/footer.service'

export default "modalDialogService";

export class ModalDialogService {
    modalDialogCollection: ModalDialog[];
    currentModalDialog: ModalDialog;

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
            if (modalDialog.id == modalDialogId) {
                this.currentModalDialog = modalDialog;
                this.currentModalDialog.show();
            } 
        })
    }

    hide = () => {
        this.currentModalDialog.hide();
        this.currentModalDialog = null;

        this.actionService.clear();
    }
}