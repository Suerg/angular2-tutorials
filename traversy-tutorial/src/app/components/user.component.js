"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var UserComponent = (function () {
    function UserComponent() {
        this.name = 'John Doe';
        this.email = 'john@gmail.com';
        this.address = {
            street: '12 Main st',
            city: 'Boston',
            state: 'MA'
        };
        this.hobbies = ['Music', 'Movies', 'Sports'];
        this.showHobbies = false;
    }
    UserComponent.prototype.toggleHobbies = function () {
        this.showHobbies = !this.showHobbies;
    };
    UserComponent = __decorate([
        core_1.Component({
            selector: 'user',
            template: "\n  <h1>\n    Hello {{name}}\n  </h1>\n  <p>Email: {{email}}</p>\n  <p>\n  <strong>\n    Address:\n  </strong>\n    {{address.street}}\n    {{address.city}}\n    {{address.state}}\n  </p>\n  <button (click)=\"toggleHobbies()\">\n    Show Hobbies\n  </button>\n  <div *ngIf=\"showHobbies\">\n    <h3>Hobbies</h3>\n    <ul>\n      <li *ngFor=\"let hobby of hobbies\">\n        {{hobby}}\n      </li>\n    </ul>\n  </div>\n  ",
        }), 
        __metadata('design:paramtypes', [])
    ], UserComponent);
    return UserComponent;
}());
exports.UserComponent = UserComponent;
//# sourceMappingURL=user.component.js.map