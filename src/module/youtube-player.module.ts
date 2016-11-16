import { NgModule }           from '@angular/core';

import { YoutubePlayerComponent } from './youtube-player.component';


@NgModule({
   declarations: [YoutubePlayerComponent], 
   exports: [YoutubePlayerComponent]
})
export class YoutubePlayerModule {}