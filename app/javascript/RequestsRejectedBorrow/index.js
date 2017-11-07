import { Component, OnInit } from "@angular/core";
import { Http              } from "@angular/http";
import { Router            } from "@angular/router";
import template              from "./template.html";

var RequestsRejectedBorrow = Component({
    selector: "prestatario-requests-rejected-borrowed-view",
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
    viewRequestsAcceptedBorrow: function() {
        this.router.navigate([""]);
    },
    viewRequestsPendingBorrow: function() {
        this.router.navigate(["pendingBorrow"]);
    },
    viewRequestsRejectedBorrow: function() {
        this.router.navigate(["rejectedBorrow"]);
    },
    viewRequestsAcceptedLend: function() {
        this.router.navigate(["acceptedLend"]);
    },
    viewRequestsPendingLend: function() {
        this.router.navigate(["pendingLend"]);
    },
    viewRequestsRejectedLend: function() {
        this.router.navigate(["rejectedLend"]);
    },
    ngOnInit() {
        var self = this;
        self.http.get(
            "/requests.json?statusType=rejectedBorrow"
        ).subscribe(
            function(response) {
                self.requests = response.json().requests;
            }
        );
    }
});

export { RequestsRejectedBorrow };
