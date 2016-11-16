import { OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
export declare class YoutubePlayerComponent implements OnInit {
    private sanitizer;
    player: any;
    src: SafeResourceUrl;
    width: number;
    height: number;
    videoId: string;
    playerId: string;
    playlistId: string;
    constructor(sanitizer: DomSanitizer);
    ngOnInit(): void;
    private getIdFromURL(url);
}
