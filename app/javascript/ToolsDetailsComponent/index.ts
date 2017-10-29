import { Component       } from "@angular/core";
import { Http            } from "@angular/http";
import { ActivatedRoute  } from "@angular/router";
import template            from "./template.html";

var ToolsDetailsComponent = Component({
    selector: "prestatario-tools-details",
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
    ngOnInit: function()  {
        var self = this;
        self.activatedRoute.params.subscribe(function(params) {
            var id = +params['id'];
            self.id = id;
            self.http.get(
                "/tools.json?id=" + self.id
            ).subscribe(
                function(response) {
                    self.tool = response.json().tool;
                }
            );
        })
    },
    onSubmit(form: any) {
        var self = this;
        self.activatedRoute.params.subscribe(function(params) {
            var id = +params['id'];
            self.id = id;
            self.http.put(
            "/tools/ng/viewTools/" + self.id, form
            ).subscribe(
                function(response) {

                }
            );
        })

    },

});

export { ToolsDetailsComponent };
