import { Injectable } from '@angular/core';

import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';

@Injectable()
export class CoreService {
    constructor() {

    }

    public getUser(): string {
      return 'James';
    }

    public saveUser(user: any) {
        console.log('saving the user...');
    }
}
