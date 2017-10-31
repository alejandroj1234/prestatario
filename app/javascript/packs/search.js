import "polyfills";
import { Component, NgModule              } from "@angular/core";
import { BrowserModule                    } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { platformBrowserDynamic           } from "@angular/platform-browser-dynamic";
import { HttpModule                       } from "@angular/http";
import { RouterModule                     } from "@angular/router";

import { SearchViewComponent    } from "SearchViewComponent";
import { SearchDetailsComponent } from "SearchDetailsComponent";

var SearchAppComponent = Component({
    selector: "prestatario-search-app",
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
            component: SearchViewComponent
        },
        {
            path: "viewSearchDetail/:id",
            component: SearchDetailsComponent
        }
    ]);

var SearchAppModule = NgModule({
    imports:    [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        routing
    ],
    declarations:   [
        SearchViewComponent,
        SearchDetailsComponent,
        SearchAppComponent
    ],
    bootstrap: [
        SearchAppComponent
    ]
}).Class({
    constructor: function() {}
});

platformBrowserDynamic().bootstrapModule(SearchAppModule);