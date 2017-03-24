import { Component } from '@angular/core';

import { CoreService } from '../services/core.service';

@Component({
    moduleId: module.id.toString(),
    selector: 'profile',
    templateUrl: 'profile.component.html',
})
export class ProfileComponent {
  public userName: string;

  constructor(private coreService: CoreService) {
  }

  public ngOnInit() {
    console.log("ng on init");
    this.loadData();
  }

  public loadData() {
    this.userName = this.coreService.getUser();
  }

  public saveUser() {
    this.coreService.saveUser('test');
  }
}
