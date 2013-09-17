#!/bin/sh
SCRIPT="$(cd "${0%/*}" 2>/dev/null; echo "$PWD"/"${0##*/}")"
DIR=`dirname "${SCRIPT}"}`
exec scala -save -cp $DIR/commons-io-2.4.jar $0 $DIR $SCRIPT $@
::!#

val name = "evactor2Kryo"
var mem = false
val data = """
20k | 630 259 266 96  106 90  89  92  87  99
22k | 634 263 268 105 140 99  99  98  101 96
24k | 647 273 134 254 153 109 108 110 106 111
26k | 663 304 285 139 116 118 119 114 115 114
28k | 675 311 296 148 125 121 121 119 119 119
30k | 714 295 311 154 128 130 128 130 131 135
32k | 766 265 308 161 143 141 140 143 140 140
34k | 820 221 321 173 155 150 148 149 149 148
36k | 852 347 208 162 161 156 157 162 157 161
38k | 871 357 213 168 166 167 167 167 171 166
40k | 875 367 225 180 179 179 176 175 175 174
"""
val col = """
"""

def makeRows(rem: List[String]): List[String] = rem match {
  case Nil => Nil
  case _ =>
    val row = rem.take(10).foldLeft("")((x: String, y: String) => x + " " + y) + ";"
    val rest = rem.drop(10)
    List(row) ::: makeRows(rest)
}

val block = 10
val lines = data.split("\n")
if (!mem) {
  val y = Array(name + "_r = [") ++ (lines.map(s => s.takeWhile(c => c.toString != "|").trim)
               .map {
                 case r if r.contains("k") => (r.dropRight(1).toDouble * 1000).toString + ";"
                 case r if r.contains("m") => (r.dropRight(1).toDouble * 1000000).toString + ";"
                 case r => r
               }).drop(1) ++ "];"
  val x = Array(name + " = [") ++ (lines.map(s => s.dropWhile(c => c.toString != "|").drop(2) + ";")).drop(1) ++ "];"
  y foreach println
  println("")
  x foreach println
} else {
  val sizes = (lines.map(s => s.takeWhile(c => c.toString != "|").trim)
               .map {
                 case r if r.contains("k") => (r.dropRight(1).toDouble * 1000).toString + ";"
                 case r if r.contains("m") => (r.dropRight(1).toDouble * 1000000).toString + ";"
                 case r => r
               }).drop(1)
  val middley = for (i <- 1 to sizes.length by 10) yield sizes(i)
  val y = Array(name + "_r = [") ++ middley ++ "];"
  val freemem = (lines.map(s => s.dropWhile(c => c.toString != "|").drop(2))).drop(1).map(line => line.split("  ").head)
  val middlex = makeRows(freemem.toList).toArray
  // val middlex = makeRows(col.split("\n").drop(1).toList).toArray
  val x = Array(name + " = [") ++ middlex ++ "];"
  y foreach println
  println("")
  x foreach println
}

// println(name + "_r =")
// y foreach println

// println("")
// println(name + " =")
// x foreach println