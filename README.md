# GHArchive Minimized

This repo runs [min-gharchive](https://www.npmjs.com/package/min-gharchive) every hour
and uploads the latest archive data to GitHub using Git LFS.

This reduces the size of a hour of data from more than 100 megabytes of gzipped json to ~2 megabytes
of brotli compressed json. Most information is stripped from the records in order to reduce the
size and make the data easier to work with.

This archive starts in 2015. Prior to 2015 gharchive relied on the Timeline API, rather than
the Events API it uses now, and the data is different enough that consistency would suffer
if we went back that far.
