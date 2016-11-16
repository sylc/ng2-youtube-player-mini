import { NgModule }           from '@angular/core';

import { YoutubePlayerModule } from './module/youtube-player.module';

@NgModule({
  exports: [YoutubePlayerModule]
})
export class YoutubePlayerMiniModule {}