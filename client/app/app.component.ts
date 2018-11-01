import { AfterViewChecked, ChangeDetectorRef, Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Output } from './shared/models/outp';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements AfterViewChecked {

  outdata:Output;
  constructor(public auth: AuthService,
    private changeDetector: ChangeDetectorRef) { }

  // This fixes: https://github.com/DavideViolante/Angular-Full-Stack/issues/105
  ngAfterViewChecked() {
    this.changeDetector.detectChanges();

  }

 
  parentModel = { username: this.auth.currentUser.username, isLoggedin:this.auth.loggedIn,isAdmin: this.auth.isAdmin };
  
  
}


