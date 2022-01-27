[![npm](https://img.shields.io/npm/v/is-valid-nip.svg)](https://www.npmjs.com/package/is-valid-nip) ![downloads](https://img.shields.io/npm/dt/is-valid-nip.svg) [![CI](https://github.com/wojtekmaj/is-valid-nip/workflows/CI/badge.svg)](https://github.com/wojtekmaj/is-valid-nip/actions) [![tested with jest](https://img.shields.io/badge/tested_with-jest-99424f.svg)](https://github.com/facebook/jest)

# Is-Valid-NIP

Check if a number is a valid Numer Identyfikacji Podatkowej (NIP).

## tl;dr

- Install by executing `npm install is-valid-nip` or `yarn add is-valid-nip`.
- Import by adding `import isValidNIP from 'is-valid-nip'`.
- Use it by writing `const valid = isValidNIP('5252611332')`

## See also

- [is-valid-pesel](https://github.com/wojtekmaj/is-valid-pesel): Check if a number is a valid PESEL.
- [is-valid-regon](https://github.com/wojtekmaj/is-valid-regon): Check if a number is a valid REGON.

## Examples

```js
> isValidNIP('5252611332');
< true

> isValidNIP('525-261-13-32');
< true

> isValidNIP('525-26-11-332');
< true
```

## License

The MIT License.

## Author

<table>
  <tr>
    <td>
      <img src="https://github.com/wojtekmaj.png?s=100" width="100">
    </td>
    <td>
      Wojciech Maj<br />
      <a href="mailto:kontakt@wojtekmaj.pl">kontakt@wojtekmaj.pl</a><br />
      <a href="https://wojtekmaj.pl">https://wojtekmaj.pl</a>
    </td>
  </tr>
</table>
