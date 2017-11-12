import { Component         } from "@angular/core";
import { HttpClient        } from '@angular/common/http';
import { Router            } from "@angular/router";
import template              from "./template.html";

var ToolsViewComponent = Component({
    selector: "prestatario-tools-view",
    template: template
}).Class({
    constructor: [
        HttpClient,
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
            data => { self.tools = data['tools']}
        );
    },
    deleteTool: function(tool) {
        var self = this;
        self.http.delete(
            "/tools/" + tool.id
        ).subscribe(
            data => { self.ngOnInit() }
        );
    }
});

export { ToolsViewComponent };
