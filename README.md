<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# Logarithm of Probability Density Function

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Evaluate the natural logarithm of the [probability density function][pdf] for a [Kumaraswamy's double bounded][kumaraswamy-distribution] distribution.

<section class="intro">

The [probability density function][pdf] (PDF) for a [Kumaraswamy's double bounded][kumaraswamy-distribution] random variable is

<!-- <equation class="equation" label="eq:kumaraswamy_pdf" align="center" raw="f(x;a,b)= \begin{cases} abx^{{a-1}}(1-x^{a})^{{b-1}} & \text{ for } x \in (0,1) \\ 0 & \text{ otherwise } \end{cases}" alt="Probability density function (PDF) for a Kumaraswamy's double bounded distribution."> -->

```math
f(x;a,b)= \begin{cases} abx^{{a-1}}(1-x^{a})^{{b-1}} & \text{ for } x \in (0,1) \\ 0 & \text{ otherwise } \end{cases}
```

<!-- <div class="equation" align="center" data-raw-text="f(x;a,b)= \begin{cases} abx^{{a-1}}(1-x^{a})^{{b-1}} &amp; \text{ for } x \in (0,1) \\ 0 &amp; \text{ otherwise } \end{cases}" data-equation="eq:kumaraswamy_pdf">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@51534079fef45e990850102147e8945fb023d1d0/lib/node_modules/@stdlib/stats/base/dists/kumaraswamy/logpdf/docs/img/equation_kumaraswamy_pdf.svg" alt="Probability density function (PDF) for a Kumaraswamy's double bounded distribution.">
    <br>
</div> -->

<!-- </equation> -->

where `a > 0` is the first shape parameter and `b > 0` is the second shape parameter.

</section>

<!-- /.intro -->



<section class="usage">

## Usage

```javascript
import logpdf from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-kumaraswamy-logpdf@v0.3.0-deno/mod.js';
```

You can also import the following named exports from the package:

```javascript
import { factory } from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-kumaraswamy-logpdf@v0.3.0-deno/mod.js';
```

#### logpdf( x, a, b )

Evaluates the natural logarithm of the [probability density function][pdf] (PDF) for a [Kumaraswamy's double bounded][kumaraswamy-distribution] distribution with parameters `a` (first shape parameter) and `b` (second shape parameter).

```javascript
var y = logpdf( 0.5, 1.0, 1.0 );
// returns 0.0

y = logpdf( 0.5, 2.0, 4.0 );
// returns ~0.523

y = logpdf( 0.2, 2.0, 2.0 );
// returns ~-0.264

y = logpdf( 0.8, 4.0, 4.0 );
// returns ~0.522

y = logpdf( -0.5, 4.0, 2.0 );
// returns -Infinity

y = logpdf( -Infinity, 4.0, 2.0 );
// returns -Infinity

y = logpdf( 1.5, 4.0, 2.0 );
// returns -Infinity

y = logpdf( +Infinity, 4.0, 2.0 );
// returns -Infinity
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var y = logpdf( NaN, 1.0, 1.0 );
// returns NaN

y = logpdf( 0.0, NaN, 1.0 );
// returns NaN

y = logpdf( 0.0, 1.0, NaN );
// returns NaN
```

If provided `a <= 0`, the function returns `NaN`.

```javascript
var y = logpdf( 2.0, -1.0, 0.5 );
// returns NaN

y = logpdf( 2.0, 0.0, 0.5 );
// returns NaN
```

If provided `b <= 0`, the function returns `NaN`.

```javascript
var y = logpdf( 2.0, 0.5, -1.0 );
// returns NaN

y = logpdf( 2.0, 0.5, 0.0 );
// returns NaN
```

#### logpdf.factory( a, b )

Returns a function for evaluating the natural logarithm of the [probability density function][pdf] (PDF) for a [Kumaraswamy's double bounded][kumaraswamy-distribution] distribution with parameters `a` (first shape parameter) and `b` (second shape parameter).

```javascript
var mylogpdf = logpdf.factory( 0.5, 0.5 );

var y = mylogpdf( 0.8 );
// returns ~-0.151

y = mylogpdf( 0.3 );
// returns ~-0.388
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   In virtually all cases, using the `logpdf` or `logcdf` functions is preferable to manually computing the logarithm of the `pdf` or `cdf`, respectively, since the latter is prone to overflow and underflow.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
import EPS from 'https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-eps@deno/mod.js';
import uniform from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-array-uniform@deno/mod.js';
import logEachMap from 'https://cdn.jsdelivr.net/gh/stdlib-js/console-log-each-map@deno/mod.js';
import logpdf from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-kumaraswamy-logpdf@v0.3.0-deno/mod.js';

var opts = {
    'dtype': 'float64'
};
var x = uniform( 10, 0.0, 1.0, opts );
var a = uniform( 10, EPS, 5.0, opts );
var b = uniform( 10, EPS, 5.0, opts );

logEachMap( 'x: %0.4f, a: %0.4f, b: %0.4f, ln(f(x;a,b)): %0.4f', x, a, b, logpdf );
```

</section>

<!-- /.examples -->

<!-- C interface documentation. -->



<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2026. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats-base-dists-kumaraswamy-logpdf.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats-base-dists-kumaraswamy-logpdf

[test-image]: https://github.com/stdlib-js/stats-base-dists-kumaraswamy-logpdf/actions/workflows/test.yml/badge.svg?branch=v0.3.0
[test-url]: https://github.com/stdlib-js/stats-base-dists-kumaraswamy-logpdf/actions/workflows/test.yml?query=branch:v0.3.0

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats-base-dists-kumaraswamy-logpdf/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats-base-dists-kumaraswamy-logpdf?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats-base-dists-kumaraswamy-logpdf.svg
[dependencies-url]: https://david-dm.org/stdlib-js/stats-base-dists-kumaraswamy-logpdf/main

-->

[chat-image]: https://img.shields.io/badge/zulip-join_chat-brightgreen.svg
[chat-url]: https://stdlib.zulipchat.com

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/stats-base-dists-kumaraswamy-logpdf/tree/deno
[deno-readme]: https://github.com/stdlib-js/stats-base-dists-kumaraswamy-logpdf/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/stats-base-dists-kumaraswamy-logpdf/tree/umd
[umd-readme]: https://github.com/stdlib-js/stats-base-dists-kumaraswamy-logpdf/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/stats-base-dists-kumaraswamy-logpdf/tree/esm
[esm-readme]: https://github.com/stdlib-js/stats-base-dists-kumaraswamy-logpdf/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/stats-base-dists-kumaraswamy-logpdf/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/stats-base-dists-kumaraswamy-logpdf/main/LICENSE

[kumaraswamy-distribution]: https://en.wikipedia.org/wiki/Kumaraswamy_distribution

[pdf]: https://en.wikipedia.org/wiki/Probability_density_function

</section>

<!-- /.links -->
