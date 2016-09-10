# ng2-youtube-player-mini

***ng2-youtube-player-mini*** is an Angular2 component to integrate a youtube player quickly


## Demo



## Installation:

```bash
npm install ng2-youtube-player-mini --save
```

## Use Example:

In systemJS:
```typescript
map: {
         //add line
         'ng2-youtube-player-mini': 'npm:ng2-youtube-player-mini'
      },
      // packages tells the System loader how to load when no filename and/or no extension
      packages: {
         //add line
         'ng2-youtube-player-mini': { defaultExtension: 'js' },
```

In app.module
```typescript
import { YoutubePlayer }  from 'ng2-youtube-player-mini/youtube-player.component'
...
declarations:[YoutubePlayer]
```

in Component
```typescript
import {Component} from '@angular/core';

@Component({
  template: `
    <youtube-player [playerId]='"player"' [width]="640" [height]="480" [videoId]='"vntAEVjPBzQ"'> </youtube-player>
  `,
})

class App {

}
```

## Author

[Sylvain Cau]()

## Licence

This project is licensed under the MIT license. See the [LICENSE](LICENSE) file for more info.
