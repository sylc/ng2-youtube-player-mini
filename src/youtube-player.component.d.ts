import { OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
export declare class YoutubePlayer implements OnInit {
    private sanitizer;
    player: any;
    private src;
    private styleSafe;
    width: number;
    height: number;
    videoId: string;
    playerId: string;
    style: string;
    constructor(sanitizer: DomSanitizer);
    ngOnInit(): void;
    getIdFromURL(url: string): string;
}
