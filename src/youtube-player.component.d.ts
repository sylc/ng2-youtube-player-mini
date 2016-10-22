import { OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
export declare class YoutubePlayer implements OnInit {
    private sanitizer;
    player: any;
    src: SafeResourceUrl;
    width: number;
    height: number;
    videoId: string;
    playerId: string;
    constructor(sanitizer: DomSanitizer);
    ngOnInit(): void;
    getIdFromURL(url: string): string;
}
