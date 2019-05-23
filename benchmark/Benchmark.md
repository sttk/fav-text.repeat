# Benchmark of @fav/text.repeat

## v1.0.4

Comparing with following modules:

- [String API](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat)
- [repeating](https://www.npmjs.com/package/repeating)
- [repeat-string](https://www.npmjs.com/package/repeat-string)
- [string-tools](https://www.npmjs.com/package/string-tools)

|            | String API          | @fav/text.repeat(1.0.4) | repeating(3.0.0)    | repeat-string(1.6.1) | string-tools(1.0.0) |
|:-----------|--------------------:|------------------------:|--------------------:|---------------------:|--------------------:|
| "ABC" x 0  | 109,328,056 ops/sec |     699,780,107 ops/sec | 187,155,753 ops/sec |  164,186,699 ops/sec | 709,375,057 ops/sec |
| "abc" x 1  |  66,121,276 ops/sec |     188,424,026 ops/sec | 184,459,595 ops/sec |  696,617,202 ops/sec | 186,208,161 ops/sec |
| "ABC" x 16 |  11,604,711 ops/sec |      15,542,484 ops/sec |  12,407,847 ops/sec |   77,064,038 ops/sec |   5,693,514 ops/sec |
| "abc" x 17 |  11,900,621 ops/sec |      13,320,288 ops/sec |  11,523,955 ops/sec |   78,130,982 ops/sec |   5,023,612 ops/sec |
| "A-Z" x 0  | 104,603,020 ops/sec |     688,637,372 ops/sec | 168,159,761 ops/sec |  163,379,141 ops/sec | 690,755,404 ops/sec |
| "a-z" x 1  |  35,150,060 ops/sec |     115,257,960 ops/sec |  63,088,058 ops/sec |   76,281,384 ops/sec | 179,444,943 ops/sec |
| "A-Z" x 16 |  16,365,150 ops/sec |      24,513,790 ops/sec |  19,339,230 ops/sec |   67,019,920 ops/sec |  10,646,566 ops/sec |
| "a-z" x 17 |  14,213,790 ops/sec |      15,544,136 ops/sec |  14,358,377 ops/sec |   71,476,628 ops/sec |   8,949,700 ops/sec |

- Platform: Node.js 12.2.0 on Darwin 64-bit
- Machine: Intel(R) Core(TM) i7-2620M CPU @ 2.70GHz, 16GB

## v1.0.3

Comparing with following modules:

- [String API](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat)
- [repeating](https://www.npmjs.com/package/repeating)
- [repeat-string](https://www.npmjs.com/package/repeat-string)
- [string-tools](https://www.npmjs.com/package/string-tools)

|            | String API          | @fav/text.repeat(1.0.3) | repeating(3.0.0)    | repeat-string(1.6.1) | string-tools(1.0.0) |
|:-----------|--------------------:|------------------------:|--------------------:|---------------------:|--------------------:|
| "ABC" x 0  |  97,700,363 ops/sec |     699,676,450 ops/sec | 167,439,869 ops/sec |  148,001,094 ops/sec | 705,829,384 ops/sec |
| "abc" x 1  |  60,405,879 ops/sec |      86,197,556 ops/sec | 166,128,506 ops/sec |  644,306,606 ops/sec |  59,053,775 ops/sec |
| "ABC" x 16 |  13,552,497 ops/sec |      17,122,490 ops/sec |  13,767,838 ops/sec |   69,887,236 ops/sec |   5,747,343 ops/sec |
| "abc" x 17 |  11,904,479 ops/sec |       3,909,320 ops/sec |  12,169,985 ops/sec |   68,911,136 ops/sec |   5,456,082 ops/sec |
| "A-Z" x 0  |  98,430,138 ops/sec |     708,019,152 ops/sec | 167,383,206 ops/sec |  148,815,592 ops/sec | 698,238,236 ops/sec |
| "a-z" x 1  |  60,359,115 ops/sec |      85,185,373 ops/sec | 166,463,741 ops/sec |  697,461,895 ops/sec | 166,944,634 ops/sec |
| "A-Z" x 16 |  17,976,047 ops/sec |      25,250,711 ops/sec |  19,905,337 ops/sec |   67,664,657 ops/sec |  10,402,802 ops/sec |
| "a-z" x 17 |  11,891,049 ops/sec |       3,474,289 ops/sec |  12,814,991 ops/sec |   65,156,057 ops/sec |   9,587,983 ops/sec |

- Platform: Node.js 12.2.0 on Darwin 64-bit
- Machine: Intel(R) Core(TM) i7-2620M CPU @ 2.70GHz, 16GB
