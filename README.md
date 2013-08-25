# RunLoop

Run loop is a light wrapper around the requestAnimationFrame API. The run loop is just as it sounds, a run loop. It follows a dynamic timing pattern, with an update and render function callback structure. Objects may subscribe to its callback by calling ```addCall```, and passing a callback and the appropriate callback mask.

Callback mask types available:
- ```RunLoop.UPDATE_CYCLE```
- ```RunLoop.RENDER_CYCLE```

Update calls receive an elapsed time in milliseconds, where the render calls will not.

The order for each loop goes ```update``` then ```render```. The elapsed time is only provided to the ```update``` call.

## ```requestAnimFrame``` Polyfill

```requestAnimFrame``` is a polyfill to support requestAnimationFrame and cancelAnimationFrame across browser. This uses an internally provided ```performance.now()```. If this polyfill is used, ```performanceNow``` polyfill does not need to be included, it is already included. Since ```cancelAnimationFrame``` was widely unsupported while the ```requestAnimationFrame``` was used, a noop will be provided in the event that a ```cancelAnimationFrame``` does not exist.

Polyfills the following methods, and allows access via UMD, and appends it to the global space, if necessary:

- ```requestAnimFrame```
- ```cancelAnimFrame```
- ```performance```

## ```performance.now()``` Polyfill

```performance.now()``` uses the native Web Timing API, but if it is not supported, it uses ```Date``` patterns to polyfill. This includes a ```timing.navigationStart``` property. The polyfill does not include any of the events or other features beyond the ```now()``` functionality, and will not provide microsecond level resolution when the native API isn't available.