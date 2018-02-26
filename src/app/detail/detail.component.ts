import * as ng from 'angular'

import { Action } from '../../modules/modal-dialog/modal-dialog.model'
import ActionServiceName, { ActionService } from '../../modules/modal-dialog/footer/footer.service'

export default 'detail'

class DetailController implements ng.IController {

    static $inject = ['$http', ActionServiceName]
    
    constructor(public $http: ng.IHttpService, public actionService: ActionService) {}

    $onInit = () => {
        this.setActions();
    }

    setActions = () => {
        this.actionService.add(
            new Action("Approve", () => { return this.$http.get("https://crossorigin.me/http://www.github.com").then((response) => {
                console.log('und jetzt aus dem detail.component.ts')
                console.log(response)
                return response
            } )})
        )
        this.actionService.add(
            new Action("Save", () => { return this.$http.get("https://crossorigin.me/http://www.google.com").then((res) => {
                console.log(res)
                return res;
            }) }, false)
        )
    }
}

export const DetailComponent = {
    template: require('./detail.html'),
    controller: DetailController
} as ng.IComponentOptions