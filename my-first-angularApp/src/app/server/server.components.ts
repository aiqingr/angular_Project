import { Component } from '@angular/core';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
})
export class ServerComponet{
    serverId: number = 10;
    serverStatus: string = 'offine';
    
    getServerStatus(){
        return this.serverStatus;
    }
}