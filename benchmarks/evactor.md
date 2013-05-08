---
layout: page
---

## Evactor Benchmark

In this benchmark we evaluate the performance of our framework when
pickling large numbers of small objects. The data types to-be-pickled
are taken from the [Evactor](https://github.com/aorwall/evactor)
project. Evactor is a complex event processor based on actors; it uses
[Akka](http://akka.io/), an event-driven middleware for distributed
message passing.

The benchmark proceeds by first creating a collection containing a
variable number of objects of type `DataEvent`. `DataEvent` is a small
case class containing primitives like ints and strings. The ints and
strings are randomly-generated. Next, all events in the collection are
pickled. At the end, all events are unpickled again from the
collection of pickled byte arrays, and a collection of events is
re-created. We compare against two other serialization frameworks:
Java's native serialization and Kryo.

As indicated in the below plot, the Java version of the benchmark
timed out when reaching 9000 events, because virtually all time was
spent in GC. The memory consumption of both Kryo and Scala-pickling is
much lower; 10000 events can be comfortably pickled even with
significantly less memory than made available to the JVM.

We used the following JVM options for running the benchmarks:

    -Xms1536M -Xmx4096M -Xss2M -XX:MaxPermSize=512M -XX:+UseParallelGC

<div id="EvactorBenchPlot"></div>

<script type="text/javascript">
$(document).ready(function() {
  linePlot("EvactorBenchData.tsv", "#EvactorBenchPlot", 1000, 10000);
});
</script>
