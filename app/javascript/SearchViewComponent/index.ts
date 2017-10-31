import { Component         } from "@angular/core";
import { Http              } from "@angular/http";
import { Router            } from "@angular/router";
import template              from "./template.html";

var SearchViewComponent = Component({
    selector: "prestatario-search-view",
    template: template
}).Class({
    constructor: [
        Http,
        Router,
        function(http, router) {
            this.tools    = null;
            this.keywords = "";
            this.http     = http;
            this.router   = router;
        }
    ],
    viewSearchDetails: function(tool) {
        this.router.navigate(["viewSearchDetail/", tool.id]);
    },
    search: function($event) {
        var self = this;
        self.keywords = $event;
        if (self.keywords.length < 3) {
            return;
        }
        self.http.get(
            "/search.json?keywords=" + self.keywords
        ).subscribe(
            function(response) {
                self.tools = response.json().tools;
            }
        );
    }
});

export { SearchViewComponent };
