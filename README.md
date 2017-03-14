# uwp-keycodes

A simple TypeScript enum for keycodes including Gamepad keys in Universal Windows Platform (UWP)

### Installation

```
npm install --save uwp-keycodes
```

### Usage

Instead of using
```ts
  Observable.fromEvent<KeyboardEvent>(window, 'keydown', true)
    .filter(ev => ev.keyCode === 196)
```

you can write

```ts
  import {keys} from 'uwp-keycodes';

  Observable.fromEvent<KeyboardEvent>(window, 'keydown', true)
    .filter(ev => ev.keyCode === keys.GamepadB)
```
