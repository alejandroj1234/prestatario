import "polyfills";
import { Component, NgModule              } from "@angular/core";
import { BrowserModule                    } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { platformBrowserDynamic           } from "@angular/platform-browser-dynamic";
import { HttpModule                       } from "@angular/http";
import { RouterModule                     } from "@angular/router";

import { LentToolsViewComponent           } from "LentToolsViewComponent";

var LentToolsAppModule = NgModule({
    imports:    [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule
    ],
    declarations:   [
        LentToolsViewComponent
    ],
    bootstrap: [
        LentToolsViewComponent
    ]
}).Class({
    constructor: function() {}
});

platformBrowserDynamic().bootstrapModule(LentToolsAppModule);