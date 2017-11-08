import "polyfills";
import { NgModule                         } from "@angular/core";
import { BrowserModule                    } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { platformBrowserDynamic           } from "@angular/platform-browser-dynamic";
import { HttpModule                       } from "@angular/http";

import { BorrowedToolsViewComponent        } from "BorrowedToolsViewComponent";

var BorrowedToolsAppModule = NgModule({
    imports:    [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule
    ],
    declarations:   [
        BorrowedToolsViewComponent
    ],
    bootstrap: [
        BorrowedToolsViewComponent
    ]
}).Class({
    constructor: function() {}
});

platformBrowserDynamic().bootstrapModule(BorrowedToolsAppModule);