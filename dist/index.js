/** @license Apache-2.0 */

'use strict';

/**
* Evaluate the natural logarithm of the probability density function (PDF) for a Kumaraswamy's double bounded distribution.
*
* @module @stdlib/stats-base-dists-kumaraswamy-logpdf
*
* @example
* var logpdf = require( '@stdlib/stats-base-dists-kumaraswamy-logpdf' );
*
* var y = logpdf( 0.5, 1.0, 1.0 );
* // returns 0.0
*
* y = logpdf( 0.5, 2.0, 4.0 );
* // returns ~0.523
*
* @example
* var factory = require( '@stdlib/stats-base-dists-kumaraswamy-logpdf' ).factory;
*
* var logpdf = factory( 0.5, 0.5 );
*
* var y = logpdf( 0.8 );
* // returns ~-0.151
*
* y = logpdf( 0.3 );
* // returns ~-0.388
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils-define-nonenumerable-read-only-property/dist' );
var main = require( './main.js' );
var factory = require( './factory.js' );


// MAIN //

setReadOnly( main, 'factory', factory );


// EXPORTS //

module.exports = main;
