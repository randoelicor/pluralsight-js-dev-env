 // This file isn;t transpile so we must use CommonJS and ES5

 // Register babel to transpile before our test run.
 require('@babel/register')();

 // Disable webpack features that Mocha doesn't understand.
 require.extensions['.css'] = function() {};
