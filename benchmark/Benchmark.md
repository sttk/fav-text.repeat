# Benchmark of @fav/text.repeat

## v1.0.3

Comparing with following modules:

- [String API](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat)
- [repeating](https://www.npmjs.com/package/repeating)
- [repeat-string](https://www.npmjs.com/package/repeat-string)
- [string-tools](https://www.npmjs.com/package/string-tools)

|            | String API          | @fav/text.repeat(1.0.3) | repeating(3.0.0)    | repeat-string(1.6.1) | string-tools(1.0.0) |
|:-----------|--------------------:|------------------------:|--------------------:|---------------------:|--------------------:|
| "" x 0     | 100,797,414 ops/sec |     701,740,297 ops/sec | 164,801,723 ops/sec |  278,759,209 ops/sec | 692,496,309 ops/sec |
| "" x 1     |  97,671,312 ops/sec |     115,618,434 ops/sec | 166,317,314 ops/sec |  701,131,235 ops/sec | 166,868,163 ops/sec |
| "" x 16    |  98,820,772 ops/sec |      47,855,275 ops/sec |  29,831,548 ops/sec |  113,864,015 ops/sec |  28,789,415 ops/sec |
| "" x 17    |  99,010,546 ops/sec |      39,210,973 ops/sec |  30,435,295 ops/sec |  279,528,877 ops/sec |  39,953,720 ops/sec |
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
