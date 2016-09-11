# ng2-youtube-player-mini
ng2-youtube-player-mini is an Angular2 Module to integrate quickly the most basic youtube player as a component.


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
import { YoutubePlayerMiniModule }  from 'ng2-youtube-player-mini/ng2-youtube-player-mini'
...
imports:[YoutubePlayerMiniModule]
```

in Component
```typescript
import {Component} from '@angular/core';

@Component({
  template: `
    <youtube-player [playerId]='"player"' [width]="640" [height]="480" [videoId]='"vntAEVjPBzQ"' [style]='"border: solid 1px #83207d;"'> </youtube-player>
  `,
})

class App {

}
```

## Author

[Sylvain Cau]()

## Licence

This project is licensed under the MIT license. See the [LICENSE](LICENSE) file for more info.
