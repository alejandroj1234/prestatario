import "polyfills";
import { Component, NgModule              } from "@angular/core";
import { BrowserModule                    } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { platformBrowserDynamic           } from "@angular/platform-browser-dynamic";
import { HttpModule                       } from "@angular/http";
import { RouterModule                     } from "@angular/router";

import { ProfilesViewComponent    } from "ProfilesViewComponent";

var ProfilesAppModule = NgModule({
    imports:    [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule
    ],
    declarations:   [
        ProfilesViewComponent,
    ],
    bootstrap: [
        ProfilesViewComponent
    ]
}).Class({
    constructor: function() {}
});

platformBrowserDynamic().bootstrapModule(ProfilesAppModule);