import { Component } from "@angular/core";
import { Http      } from "@angular/http";
import template      from "./template.html";

var BorrowedToolsViewComponent = Component({
    selector: "borrowed-tools-view",
    template: template
}).Class({
    constructor: [
        Http,
        function (http) {
            this.http = http;
        }
    ],
    ngOnInit() {
        var self = this;
        self.http.get(
            "/borrowedTools.json"
        ).subscribe(
            function(response) {
                self.borrowedTools = response.json().borrowedTools;
            }
        );
    },
});

export { BorrowedToolsViewComponent };
