import { Component       } from "@angular/core";
import { Http            } from "@angular/http";
import { ActivatedRoute  } from "@angular/router";
import template            from "./template.html";

var ToolsAddToolComponent = Component({
    selector: "prestatario-tools-add",
    template: template
}).Class({
    constructor: [
        Http,
        ActivatedRoute,
        function(http, activatedRoute) {
            this.activatedRoute = activatedRoute;
            this.id             = null;
            this.http           = http;
        }
    ],
    onSubmit(form: any) {
        var self = this;
        self.http.post(
            "/tools/ng/addTool", form
        ).subscribe(
            function(response) {

            }
        );
    },
});

export { ToolsAddToolComponent };
