"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var YoutubePlayer = (function () {
    //@Input() style: string;
    function YoutubePlayer(sanitizer) {
        this.sanitizer = sanitizer;
        this.width = 640;
        this.height = 390;
        this.videoId = "vntAEVjPBzQ"; //Ghostbusters :)
        this.playerId = "player";
        //this.style = ""
    }
    YoutubePlayer.prototype.ngOnInit = function () {
        //Extract videoId if it is an HTTP address and return Id
        if (this.videoId) {
            this.videoId = this.getIdFromURL(this.videoId);
        }
        //"https://www.youtube.com/embed/M7lc1UVf-VE?enablejsapi=1"
        //Sanitize the entry
        this.src = this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/" + this.videoId + "?enablejsapi=1");
        //this.styleSafe = this.sanitizer.bypassSecurityTrustStyle(this.style)
    };
    YoutubePlayer.prototype.getIdFromURL = function (url) {
        // adapted from http://brandly.github.io/angular-youtube-embed/ and http://stackoverflow.com/a/5831191/1614967  
        var youtubeRegexp = /https?:\/\/(?:[0-9A-Z-]+\.)?(?:youtu\.be\/|youtube(?:-nocookie)?\.com\S*?[^\w\s-])([\w-]{11})(?=[^\w-]|$)(?![?=&+%\w.-]*(?:['"][^<>]*>|<\/a>))[?=&+%\w.-]*/ig;
        // /https?:\/\/(?:[0-9A-Z-]+\.)?(?:youtu\.be\/|youtube(?:-nocookie)?\.com\S*?[^\w\s-])([\w-]{11})(?=[^\w-]|$)(?![?=&+%\w.-]*(?:['"][^<>]*>|<\/a>))[?=&+%\w.-]*/ig
        function contains(str, substr) {
            return (str.indexOf(substr) > -1);
        }
        var id = url.replace(youtubeRegexp, '$1');
        if (contains(id, ';')) {
            var pieces = id.split(';');
            if (contains(pieces[1], '%')) {
                // links like this:
                // "http://www.youtube.com/attribution_link?a=pxa6goHqzaA&amp;u=%2Fwatch%3Fv%3DdPdgx30w9sU%26feature%3Dshare"
                // have the real query string URI encoded behind a ';'.
                // at this point, `id is 'pxa6goHqzaA;u=%2Fwatch%3Fv%3DdPdgx30w9sU%26feature%3Dshare'
                var uriComponent = decodeURIComponent(id.split(';')[1]);
                id = ('http://youtube.com' + uriComponent)
                    .replace(youtubeRegexp, '$1');
            }
            else {
                // https://www.youtube.com/watch?v=VbNF9X1waSc&amp;feature=youtu.be
                // `id` looks like 'VbNF9X1waSc;feature=youtu.be' currently.
                // strip the ';feature=youtu.be'
                id = pieces[0];
            }
        }
        else if (contains(id, '#')) {
            // id might look like '93LvTKF_jW0#t=1'
            // and we want '93LvTKF_jW0'
            id = id.split('#')[0];
        }
        return id;
    };
    ;
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], YoutubePlayer.prototype, "width", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], YoutubePlayer.prototype, "height", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], YoutubePlayer.prototype, "videoId", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], YoutubePlayer.prototype, "playerId", void 0);
    YoutubePlayer = __decorate([
        core_1.Component({
            selector: 'youtube-player',
            template: "\n      <iframe [id]=\"playerId\"\n         [width]=\"width\"\n         [height]=\"height\"\n         [src]=\"src\"\n         frameborder=\"0\"\n         allowfullscreen\n         >\n      </iframe>\n      "
        }), 
        __metadata('design:paramtypes', [platform_browser_1.DomSanitizer])
    ], YoutubePlayer);
    return YoutubePlayer;
}());
exports.YoutubePlayer = YoutubePlayer;
//# sourceMappingURL=youtube-player.component.js.map