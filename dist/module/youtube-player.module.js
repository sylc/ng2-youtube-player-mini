"use strict";
var core_1 = require('@angular/core');
var youtube_player_component_1 = require('./youtube-player.component');
var YoutubePlayerModule = (function () {
    function YoutubePlayerModule() {
    }
    YoutubePlayerModule.decorators = [
        { type: core_1.NgModule, args: [{
                    declarations: [youtube_player_component_1.YoutubePlayerComponent],
                    exports: [youtube_player_component_1.YoutubePlayerComponent]
                },] },
    ];
    /** @nocollapse */
    YoutubePlayerModule.ctorParameters = [];
    return YoutubePlayerModule;
}());
exports.YoutubePlayerModule = YoutubePlayerModule;
