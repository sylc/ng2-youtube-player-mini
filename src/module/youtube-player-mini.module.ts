import { NgModule }           from '@angular/core';
//import { BrowserModule }      from '@angular/platform-browser';

import { YoutubePlayer } from './youtube-player.component';


@NgModule({
   declarations: [YoutubePlayer], 
   exports: [YoutubePlayer]
})
export class YoutubePlayerMiniModule {}