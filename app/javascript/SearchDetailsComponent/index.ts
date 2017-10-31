import { Component       } from "@angular/core";
import { Http            } from "@angular/http";
import { ActivatedRoute  } from "@angular/router";
import template            from "./template.html";

var SearchDetailsComponent = Component({
    selector: "prestatario-search-details",
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
                    self.http.get(
                        "/profiles.json?user_id=" + self.tool.user_id
                    ).subscribe(
                        function(response) {
                            self.profile = response.json().profile;
                        }
                    )
                }

            );
        })
    },
    requestBorrow: function(tool) {
        console.log(tool)
    }

});

export { SearchDetailsComponent };
