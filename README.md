# ng2-youtube-player-mini
lightweight wrapper for youtube player


## Installation:

```bash
npm install ng2-youtube-player-mini --save
```

## Use Example:

In systemjs.config.js:
```typescript
System.config({
    paths: {
      // paths serve as alias
      'npm:': 'node_modules/'
    },
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
    <youtube-player [playerId]='"player"' [width]="640" [height]="480" [videoId]='"vntAEVjPBzQ"'> </youtube-player>
  `,
})

class App {

}
```
## Notes
You can also pass an http type link to videoId. 

## Security Notes
videoId is considered Safe. Ensure these values are not provided by unknown source. 

## Author

[Sylvain Cau]()

## Licence

This project is licensed under the MIT license. See the [LICENSE](LICENSE) file for more info.
