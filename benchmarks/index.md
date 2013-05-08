---
layout: page
---

## Benchmarks

This section contains a growing number of different benchmarks. To date, we
have our own microbenchmarks, as well as benchmarks on real-world data types
and applications.

Becuase Scala Pickling is an intended-for-production project, benchmarks are
critical for determining potential impact and thus utility in production
applications. We will continue amass such benchmarks and post them here.

- [Collections Benchmark](vector.html) A suite of microbenchmarks pickling immutable collections.
- [GeoTrellis Benchmark](geotrellis.html). Benchmarked data types from the [Geotrellis](https://github.com/geotrellis/geotrellis) project.

Soon to be posted: benchmarking running [Spark](http://spark-project.org/)
applications, and [Evactor](https://github.com/aorwall/evactor) data types.

<!--
This section will contain a number of our benchmarks. To date, we have our own
suite of microbenchmarks, as well as benchmarks on real-world applications. Our
applications include benchmarked data types from the
[Geotrellis](https://github.com/geotrellis/geotrellis) project, and full
benchmarked applications of [Spark](http://spark-project.org/).
-->

<!-- ### What We Compare Against

We compare against other frameworks which are integrated in some way with Java
or Scala. We do not compare with frameworks which have their own separate
compilers; in these cases, Scala Pickling can be used to *interoperate* with these
frameworks. -->
