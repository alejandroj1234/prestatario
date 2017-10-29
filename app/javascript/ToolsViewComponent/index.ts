import { Component, OnInit } from "@angular/core";
import { Http              } from "@angular/http";
import { Router            } from "@angular/router";
import template              from "./template.html";

var ToolsViewComponent = Component({
    selector: "prestatario-tools-view",
    template: template
}).Class({
    constructor: [
        Http,
        Router,
        function(http, router) {
            this.tools  = null;
            this.http   = http;
            this.router = router;
        }
    ],
    viewDetails: function(tool) {
        this.router.navigate(["viewTools/", tool.id]);
    },
    addTool: function() {
        this.router.navigate(["addTool"]);
    },
    ngOnInit() {
        var self = this;
        self.http.get(
            "/tools.json"
        ).subscribe(
            function(response) {
                self.tools = response.json().tools;
            }
        );
    },
    deleteTool: function(tool) {
        var self = this;
        self.http.delete(
            "/tools/" + tool.id
        ).subscribe(
            function() {
                self.ngOnInit()
            }
        );
    }
});

export { ToolsViewComponent };
