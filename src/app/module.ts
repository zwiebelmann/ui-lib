import * as ng from 'angular';

import uiLib from '../modules/modal-dialog/module';

import appComponentName, { AppComponent } from './app.component';
import detailComponentName, { DetailComponent } from './detail/detail.component'

export default ng
    .module('demoApp', [uiLib])
    .component(appComponentName, AppComponent)
    .component(detailComponentName, DetailComponent)
    .name;