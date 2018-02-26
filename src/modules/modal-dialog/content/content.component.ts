import * as ng from 'angular'

export default 'content';

export const  ContentComponent = {
    template: require('./content.html'),
    transclude: true
} as ng.IComponentOptions