import { Component, OnInit } from "@angular/core";
import { Http              } from "@angular/http";
import { Router            } from "@angular/router";
import template              from "./template.html";
import * as $ from "jquery";

var RequestsRejectedLend = Component({
    selector: "prestatario-requests-pending-borrowed-view",
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
            "/requests.json?statusType=rejectedLend"
        ).subscribe(
            function(response) {
                self.requests = response.json().requests;
            }
        );
        $(document).ready(function(){
            $('.dropdown-submenu a#requests-drop-down').on("click", function(e){
                $(this).next('ul').toggle();
                e.stopPropagation();
                e.preventDefault();
            });
        });
    }
});

export { RequestsRejectedLend };
