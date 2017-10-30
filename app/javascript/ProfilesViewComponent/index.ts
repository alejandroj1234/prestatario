import { Component, OnInit } from "@angular/core";
import { Http              } from "@angular/http";
import template              from "./template.html";

var ProfilesViewComponent = Component({
    selector: "prestatario-profiles-view",
    template: template
}).Class({
    constructor: [
        Http,
        function(http) {
            this.http   = http;
        }
    ],
    ngOnInit: function()  {
        var self = this;
        self.http.get(
            "/profiles.json?"
        ).subscribe(
            function(response) {
                self.profile = response.json().profile;
                console.log(self.profile)
            }
        );
    },
    onSubmit(form: any) {
        console.log(form)
        var self = this;
        self.http.put(
            "/profiles/", form
        ).subscribe(
            function(response) {

            }
        );
    },
});

export { ProfilesViewComponent };
