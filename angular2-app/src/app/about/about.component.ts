import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'about',
  templateUrl: 'about.component.html',
})
export class AboutComponent {
  public name: string = 'James';
  public show: boolean = false;

  constructor() {

  }

  public changeShow() {
    this.show = !this.show;
  }
}
