import * as ng from 'angular'

export default 'header';

export const HeaderComponent = {
    template: require('./header.html'),
    bindings: {
        windowTitle: '<'
    }
} as ng.IComponentOptions