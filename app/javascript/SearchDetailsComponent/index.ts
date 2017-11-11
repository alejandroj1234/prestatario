import { Component       } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute  } from "@angular/router";
import template            from "./template.html";

var SearchDetailsComponent = Component({
    selector: "prestatario-search-details",
    template: template
}).Class({
    constructor: [
        HttpClient,
        ActivatedRoute,
        function(http, activatedRoute) {
            this.activatedRoute = activatedRoute;
            this.http           = http;
            this.id             = null;
            this.tool           = null;
            this.profile        = null;
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
                data => { self.tool = data['tool']
                self.http.get(
                    "/profiles.json?user_id=" + self.tool.user_id
                ).subscribe(
                    data => {
                    self.profile = data['profile'];
                    self.street = data['profile']['street'].toString();
                    self.city = data['profile']['city'].toString();
                    self.state = data['profile']['state'].toString();
                    self.http.get(
                        `https://maps.googleapis.com/maps/api/geocode/json?address=${self.street},+${self.city},+${self.state}&key=AIzaSyCdbhcWxslK_UA66M-YWpigIcpvQejBnGM`
                    ).subscribe(
                        data => {
                            self.lat = data['results'][0]['geometry']['location']['lat']
                            self.lng = data['results'][0]['geometry']['location']['lng']
                        }
                    )}
                )}
            )
        })
    },
    onSubmit(form: any) {
        var self = this;
        form["tool_id"] = self.tool.id;
        form["requester_id"] = self.tool.user_id;
        self.http.post(
            "/requests", form
        ).subscribe();
    },
});

export { SearchDetailsComponent };
