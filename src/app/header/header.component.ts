import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',

})
export class HeaderComponent {

    @Output() tabEmitter = new EventEmitter<string>();

    emitActiveTab(tab: string): void {
        this.tabEmitter.emit(tab);
    }

}
