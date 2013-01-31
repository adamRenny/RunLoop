({
	baseUrl: '../../src',

    name: '../tool/compiler/almond',

    include: 'RunLoop',

    out: '../../dist/RunLoop.js',

    wrap: {
        start: '' +
'(function(root, factory) {\n' +
    'if (typeof exports === \'object\') {\n' +
        '// Node. Does not work with strict CommonJS, but\n' +
        '// only CommonJS-like enviroments that support module.exports,\n' +
        '// like Node.\n' +
        'module.exports = factory(global);\n' +
    '} else if (typeof define === \'function\' && define.amd) {\n' +
        '// AMD. Register as an anonymous module.\n' +
        'define([], function() {\n' +
            '// Not using a global object to avoid setting globally\n' +
            'return factory(null);\n' +
        '});\n' +
    '} else {\n' +
        '// Browser globals\n' +
        'factory(root);\n' +
    '}\n' +
'}(this, function(root) {\n',
        end: '' +
        'var RunLoop = require(\'RunLoop\');\n' +
        'if (root) {\n' +
            'root.RunLoop = RunLoop;\n' +
        '}\n' +
        'return RunLoop;\n' +
        '}));'
    }
})