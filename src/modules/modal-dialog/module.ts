import * as ng from 'angular'
import 'angular-animate'

import ModalDialogComponentName, { ModalDialogComponent } from './modal-dialog.component'
import HeaderComponentName, { HeaderComponent } from './header/header.component'
import FooterComponentName, { FooterComponent } from './footer/footer.component'
import ActionComponentName, { ActionComponent } from './footer/action/action.component'
import ContentComponentName, { ContentComponent } from './content/content.component'

import ModalDialogServiceName, { ModalDialogService } from './modal-dialog.service'
import ActionServiceName, { ActionService } from './footer/footer.service'

import footerComponent from './footer/footer.component';

export default ng
    .module('ui-lib', ['ngAnimate'])
    .component(ModalDialogComponentName, ModalDialogComponent)
    .component(HeaderComponentName, HeaderComponent)
    .component(FooterComponentName, FooterComponent)
    .component(ActionComponentName, ActionComponent)
    .component(ContentComponentName, ContentComponent)
    .service(ModalDialogServiceName, ModalDialogService)
    .service(ActionServiceName, ActionService)
    .name

