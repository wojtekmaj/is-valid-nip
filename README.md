[![npm](https://img.shields.io/npm/v/is-valid-nip.svg)](https://www.npmjs.com/package/is-valid-nip) ![downloads](https://img.shields.io/npm/dt/is-valid-nip.svg) [![CI](https://github.com/wojtekmaj/is-valid-nip/actions/workflows/ci.yml/badge.svg)](https://github.com/wojtekmaj/is-valid-nip/actions)

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

```ts
isValidNIP('5252611332'); // true

isValidNIP('525-261-13-32'); // true

isValidNIP('525-26-11-332'); // true
```

## License

The MIT License.

## Author

<table>
  <tr>
    <td >
      <img src="https://avatars.githubusercontent.com/u/5426427?v=4&s=128" width="64" height="64" alt="Wojciech Maj">
    </td>
    <td>
      <a href="https://github.com/wojtekmaj">Wojciech Maj</a>
    </td>
  </tr>
</table>
