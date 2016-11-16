"use strict";
var core_1 = require('@angular/core');
//import { BrowserModule }      from '@angular/platform-browser';
var youtube_player_component_1 = require('./youtube-player.component');
var YoutubePlayerMiniModule = (function () {
    function YoutubePlayerMiniModule() {
    }
    YoutubePlayerMiniModule.decorators = [
        { type: core_1.NgModule, args: [{
                    declarations: [youtube_player_component_1.YoutubePlayer],
                    exports: [youtube_player_component_1.YoutubePlayer]
                },] },
    ];
    /** @nocollapse */
    YoutubePlayerMiniModule.ctorParameters = [];
    return YoutubePlayerMiniModule;
}());
exports.YoutubePlayerMiniModule = YoutubePlayerMiniModule;
