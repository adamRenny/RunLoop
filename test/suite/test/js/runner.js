require([
    'assets/mocha',
    'assets/expect'
], function(
) {
    'use strict';
    mocha.setup('bdd');
    
    require([
        '../../../../dist/RunLoop'
    ], function(RunLoop) {
        mocha.run();
    });
});