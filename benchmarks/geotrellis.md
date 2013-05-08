---
layout: page
---

## GeoTrellis Benchmark

[GeoTrellis](http://www.azavea.com/geotrellis/) is a geographic data
processing engine for high performance applications used by the US
federal government among others.

In this benchmark one of the main message classes used in GeoTrellis
is pickled. The class is a simple case class containing a primitive
Int array (expected to be large). The below plot shows the time it
takes to pickle and unpickle an instance of this case class varying
the size of the contained Int array.

The plot shows that Java serialization performs, compared to Kryo,
surprisingly well in this benchmark. It is likely that modern JVMs
support arrays of primitive types well, which is the dominating factor
in this case. Scala-pickling is still significantly faster, since the
static type of the array is effectively-final, so that efficient
array-pickling code can be generated at compile time.

<div id="GeoTrellisPlot">&nbsp;</div>

<script type="text/javascript">
$(document).ready(function() {
  linePlot("GeoTrellisData.tsv", "#GeoTrellisPlot", 100000, 1000000);
});
</script>
