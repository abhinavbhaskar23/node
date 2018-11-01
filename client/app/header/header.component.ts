import { Component, Input } from "@angular/core";
import { AuthService } from "../services/auth.service";

@Component({

    selector: 'app-header',
    templateUrl: './header.component.html'

})
export class HeaderComponent{
    @Input() parentModel: {
        username:string,
        loggedIn: boolean,
        isAdmin: boolean
    };
    // @Input() loggedIn: boolean;
    // @Input() isAdmin: boolean;
constructor() {
    
    
}


}