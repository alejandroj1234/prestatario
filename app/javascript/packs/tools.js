import "polyfills";
import { Component, NgModule              } from "@angular/core";
import { BrowserModule                    } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { platformBrowserDynamic           } from "@angular/platform-browser-dynamic";
import { HttpClientModule                 } from '@angular/common/http';
import { RouterModule                     } from "@angular/router";

import { ToolsViewComponent    } from "ToolsViewComponent";
import { ToolsDetailsComponent } from "ToolsDetailsComponent";
import { ToolsAddToolComponent } from "ToolsAddToolComponent";

var ToolsAppComponent = Component({
    selector: "prestatario-tools-app",
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
        component: ToolsViewComponent
    },
    {
        path: "viewTools/:id",
        component: ToolsDetailsComponent
    },
    {
        path: "addTool",
        component: ToolsAddToolComponent
    }
]);

var ToolsAppModule = NgModule({
    imports:    [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        routing
    ],
    declarations:   [
        ToolsViewComponent,
        ToolsDetailsComponent,
        ToolsAddToolComponent,
        ToolsAppComponent
    ],
    bootstrap: [
        ToolsAppComponent
    ]
}).Class({
        constructor: function() {}
    });

platformBrowserDynamic().bootstrapModule(ToolsAppModule);