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

# Binary String

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Return a string giving the literal bit representation of a [double-precision floating-point number][ieee754].

<section class="installation">

## Installation

```bash
npm install @stdlib/number-float64-base-to-binary-string
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm` branch][esm-url].
-   If you are using Deno, visit the [`deno` branch][deno-url].
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd` branch][umd-url].

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

</section>

<section class="usage">

## Usage

```javascript
var toBinaryString = require( '@stdlib/number-float64-base-to-binary-string' );
```

#### toBinaryString( x )

Returns a `string` giving the literal bit representation of a [double-precision floating-point number][ieee754].

```javascript
var str = toBinaryString( 4.0 );
// returns '0100000000010000000000000000000000000000000000000000000000000000'

str = toBinaryString( 3.141592653589793 );
// returns '0100000000001001001000011111101101010100010001000010110100011000'

str = toBinaryString( -1.0e308 );
// returns '1111111111100001110011001111001110000101111010111100100010100000'
```

The function handles [subnormals][subnormals].

```javascript
str = toBinaryString( -3.14e-320 );
// returns '1000000000000000000000000000000000000000000000000001100011010011'

str = toBinaryString( 5.0e-324 );
// returns '0000000000000000000000000000000000000000000000000000000000000001'
```

The function handles special values.

```javascript
str = toBinaryString( 0.0 );
// returns '0000000000000000000000000000000000000000000000000000000000000000'

str = toBinaryString( -0.0 );
// returns '1000000000000000000000000000000000000000000000000000000000000000'

str = toBinaryString( NaN );
// returns '0111111111111000000000000000000000000000000000000000000000000000'

str = toBinaryString( Infinity );
// returns '0111111111110000000000000000000000000000000000000000000000000000'

str = toBinaryString( -Infinity );
// returns '1111111111110000000000000000000000000000000000000000000000000000'
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random-base-randu' );
var round = require( '@stdlib/math-base-special-round' );
var pow = require( '@stdlib/math-base-special-pow' );
var toBinaryString = require( '@stdlib/number-float64-base-to-binary-string' );

var frac;
var sign;
var exp;
var b;
var x;
var i;

// Convert random numbers to literal bit representations...
for ( i = 0; i < 100; i++ ) {
    if ( randu() < 0.5 ) {
        sign = -1.0;
    } else {
        sign = 1.0;
    }
    frac = randu() * 10.0;
    exp = round( randu()*100.0 );
    if ( randu() < 0.5 ) {
        exp = -exp;
    }
    x = sign * frac * pow( 2.0, exp );
    b = toBinaryString( x );
    console.log( b );
}
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2022. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/number-float64-base-to-binary-string.svg
[npm-url]: https://npmjs.org/package/@stdlib/number-float64-base-to-binary-string

[test-image]: https://github.com/stdlib-js/number-float64-base-to-binary-string/actions/workflows/test.yml/badge.svg?branch=v0.0.7
[test-url]: https://github.com/stdlib-js/number-float64-base-to-binary-string/actions/workflows/test.yml?query=branch:v0.0.7

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/number-float64-base-to-binary-string/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/number-float64-base-to-binary-string?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/number-float64-base-to-binary-string.svg
[dependencies-url]: https://david-dm.org/stdlib-js/number-float64-base-to-binary-string/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/number-float64-base-to-binary-string/tree/deno
[umd-url]: https://github.com/stdlib-js/number-float64-base-to-binary-string/tree/umd
[esm-url]: https://github.com/stdlib-js/number-float64-base-to-binary-string/tree/esm
[branches-url]: https://github.com/stdlib-js/number-float64-base-to-binary-string/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/number-float64-base-to-binary-string/main/LICENSE

[ieee754]: https://en.wikipedia.org/wiki/IEEE_754-1985

[subnormals]: https://en.wikipedia.org/wiki/Denormal_number

</section>

<!-- /.links -->
