"use strict";
var core_1 = require('@angular/core');
var youtube_player_module_1 = require('./module/youtube-player.module');
var YoutubePlayerMiniModule = (function () {
    function YoutubePlayerMiniModule() {
    }
    YoutubePlayerMiniModule.decorators = [
        { type: core_1.NgModule, args: [{
                    exports: [youtube_player_module_1.YoutubePlayerModule]
                },] },
    ];
    /** @nocollapse */
    YoutubePlayerMiniModule.ctorParameters = [];
    return YoutubePlayerMiniModule;
}());
exports.YoutubePlayerMiniModule = YoutubePlayerMiniModule;
