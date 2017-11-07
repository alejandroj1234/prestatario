import { Component, OnInit } from "@angular/core";
import { Http              } from "@angular/http";
import { Router            } from "@angular/router";
import template              from "./template.html";

var RequestsPendingLend = Component({
    selector: "prestatario-requests-accepted-lent-view",
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
            "/requests.json?statusType=pendingLend"
        ).subscribe(
            function(response) {
                self.requests = response.json().requests;
            }
        );
    },
    acceptRequest: function(request) {
        var self = this;
        self.http.put(
            "/requests/rq/statusUpdate/" + "accepted/" + request.id
        ).subscribe(
            function() {
                self.ngOnInit()
            }
        );
    },
    declineRequest: function(request) {
        var self = this;
        console.log(request.id)
        self.http.put(
            "/requests/rq/statusUpdate/" + "rejected/" + request.id
        ).subscribe(
            function() {
                self.ngOnInit()
            }
        );
    }
});

export { RequestsPendingLend };
