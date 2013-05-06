---
layout: page
---

## Collections Benchmark

In the first microbenchmark we evaluate the performance of our
framework when pickling standard collection types. We compare against
three other serialization frameworks: Java's native serialization,
Kryo, and a combinator library of naive handwritten pickler
combinators. All benchmarks are compiled and run using Scala version
2.9.3, except for the present framework which depends on an
experimental macro system, as well as a couple of minor bug fixes that
exist only in a current development version of Scala.

The benchmark logic is very simple: an immutable collection of type
`Vector[Int]` is created which is first pickled (or serialized) to a
byte array, and then unpickled. While List is the prototypical
collection type used in Scala, we ultimately chose Vector as Scala's
standard List type could not be serialized out-of-the-box using Kryo,
because it is a recursive type in Scala (We do register each class
with Kryo, an optional step that improves performance.). In order to
use Scala's standard List type with Kryo, one must write a custom
serializer, which would sidestep the objective of this benchmark,
which is to compare the speed of generated picklers.

<div id="VectorBenchPlot"></div>
<div id="VectorMemPlot"></div>
<div id="VectorSizePlot"></div>

<script type="text/javascript">
$(document).ready(function() {
  linePlot("VectorBenchData.tsv", "#VectorBenchPlot", 100000, 1000000);
  lineMemPlot("VectorMemData.tsv", "#VectorMemPlot", 100000, 1000000);
  lineSizePlot("VectorSizeData.tsv", "#VectorSizePlot", 100000, 1000000);
});
</script>
