import { Component  } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Router     } from "@angular/router";
import * as $ from "jquery";
import template              from "./template.html";

var SearchViewComponent = Component({
    selector: "prestatario-search-view",
    template: template
}).Class({
    constructor: [
        HttpClient,
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
    ngOnInit() {
        $('.tools-table li').hover(function () {
            $(this).addClass('hover');
        }, function () {
            $(this).removeClass('hover');
        });
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
            data => {self.tools = data['tools']}
        );
    }
});

export { SearchViewComponent };
