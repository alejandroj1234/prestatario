import "polyfills";
import { Component, NgModule              } from "@angular/core";
import { BrowserModule                    } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { platformBrowserDynamic           } from "@angular/platform-browser-dynamic";
import { HttpModule                       } from "@angular/http";
import { RouterModule                     } from "@angular/router";

import { RequestsAcceptedBorrow } from "RequestsAcceptedBorrow";
import { RequestsPendingBorrow  } from "RequestsPendingBorrow";
import { RequestsRejectedBorrow } from "RequestsRejectedBorrow";
import { RequestsAcceptedLend   } from "RequestsAcceptedLend";
import { RequestsPendingLend    } from "RequestsPendingLend";
import { RequestsRejectedLend   } from "RequestsRejectedLend";

var RequestsAppComponent = Component({
    selector: "prestatario-requests-app",
    template: "<router-outlet></router-outlet>"
}).Class({
    constructor: [
        function() {}
    ]
});

var routing = RouterModule.forRoot(
    [
        {
            path: "",
            component: RequestsAcceptedBorrow
        },
        {
            path: "pendingBorrow",
            component: RequestsPendingBorrow
        },
        {
            path: "rejectedBorrow",
            component: RequestsRejectedBorrow
        },
        {
            path: "acceptedLend",
            component: RequestsAcceptedLend
        },
        {
            path: "pendingLend",
            component: RequestsPendingLend
        },
        {
            path: "rejectedLend",
            component: RequestsRejectedLend
        }
    ]);

var RequestsAppModule = NgModule({
    imports:    [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        routing
    ],
    declarations:   [
        RequestsAcceptedBorrow,
        RequestsPendingBorrow,
        RequestsRejectedBorrow,
        RequestsAcceptedLend,
        RequestsPendingLend,
        RequestsRejectedLend,
        RequestsAppComponent
    ],
    bootstrap: [
        RequestsAppComponent
    ]
}).Class({
    constructor: function() {}
});

platformBrowserDynamic().bootstrapModule(RequestsAppModule);