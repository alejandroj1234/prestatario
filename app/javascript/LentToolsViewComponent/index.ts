import { Component } from "@angular/core";
import { Http      } from "@angular/http";
import template      from "./template.html";

var LentToolsViewComponent = Component({
    selector: "lent-tools-view",
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
            "/lentTools.json"
        ).subscribe(
            function(response) {
                self.lentTools = response.json().lentTools;
            }
        );
    },
    toolReturned: function(lentTool) {
        var self = this;
        var tool_id = lentTool.id;
        self.tool_id = tool_id;
        self.http.put(
            "/lentTools/returned/" + self.tool_id
        ).subscribe(
            function() {
                self.ngOnInit()
            }
        );
    }
});

export { LentToolsViewComponent };
