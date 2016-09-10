import { OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
export declare class YoutubePlayer implements OnInit {
    private sanitizer;
    player: any;
    private src;
    width: number;
    height: number;
    videoId: string;
    playerId: string;
    constructor(sanitizer: DomSanitizer);
    ngOnInit(): void;
    getIdFromURL(url: string): string;
}
