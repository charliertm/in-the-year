<img src='https://i.imgur.com/JMMNEFB.png' width="600" alt='in the year'>

Get information about events, births, and deaths in any year
according to Wikipedia.

## Usage

**GET**

```code
https://www.in-the-year.vercel.app/api/{year}/
```

**Response**

```ts
// Success, status code 200
{
   events: string[]
   births: string[]
   deaths: string[]
}
```

## Notes

- Valid years are _4000 BC - 2030_ AD with the obivious abscence
  of 0.
- Years BC are encoded as negative such that the year _44 BC_ equals
  _-44_.
- Not all years will work and will return error 404. This is likely due to a lack of content for that year.

## Example

```js
// Request
fetch("https://www.in-the-year.vercel.app/api/-44/")

// Response
{
  "events": [
    "Consuls: Gaius Julius Caesar and Mark Antony.",
    "February – Rome celebrates the festival of the Lupercal. Mark Antony twice presents Caesar with a royal diadem, urging him to take it and declare himself king. He refuses this offer and orders the crown to be placed in the Temple of Jupiter.",
    "March 15 (the Ides of March) – Julius Caesar, dictator of Rome, is assassinated by a group of senators, amongst them Gaius Cassius Longinus, Marcus Junius Brutus, and Caesar's Massilian naval commander, Decimus Brutus.",
    ...
  ],
  "births": [
   "Gnaeus Calpurnius Piso, Roman statesman and governor (d. 20 AD)"
  ],
  "deaths": [
    "March 15 – Julius Caesar, Roman politician and general (assassinated in the Senate) (b. 100 BC)",
    "July 26 – Ptolemy XIV, king (pharaoh) of Egypt (approximate date)",
    ...
  ]
}
```

## License

MIT @ Charlie Morris
