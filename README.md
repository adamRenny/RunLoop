# RunLoop

Run loop is a light wrapper around the requestAnimationFrame API. The run loop is just as it sounds, a run loop. It follows a dynamic timing pattern, with an update and render function callback structure. Objects may subscribe to its callback by calling ```addCall```, and passing a callback and the appropriate callback mask.

Callback mask types available:
- ```RunLoop.UPDATE_CYCLE```
- ```RunLoop.RENDER_CYCLE```

Update calls receive an elapsed time in milliseconds, where the render calls will not.

The order for each loop goes ```update``` then ```render```