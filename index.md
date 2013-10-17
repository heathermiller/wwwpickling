---
layout: page
---

Pickling (or serializing) an object is as easy as:

    import scala.pickling._
    import json._

    val pckl = List(1, 2, 3, 4).pickle

Unpickling is just as easy:

    val lst = pckl.unpickle[List[Int]]

</br>

### Publication

Details of the pickling framework can be found in our draft paper *(under review)*:

<span class="paper">

<span class="icon-wrap"><a href="http://infoscience.epfl.ch/record/187787/files/oopsla-pickling_1.pdf"><img class="pdf-icon" src="{{ site.baseurl }}/resources/img/pdf-icon.png"/></a></span><strong><a href="http://infoscience.epfl.ch/record/187787/files/oopsla-pickling_1.pdf">Instant Pickles: Generating Object-Oriented Pickler Combinators for Fast and Extensible Serialization</a></strong>, by Heather Miller, Philipp Haller, Eugene Burmako, and Martin Odersky. In <em>OOPSLA'13, Indianapolis, IN, USA</em>, October 26-31 2013.
</span>

### Talk

**ScalaDays 2013**<br/>
[On Pickles and Spores: Improving Support for Distributed Programming in Scala](https://speakerdeck.com/heathermiller/on-pickles-and-spores-improving-support-for-distributed-programming-in-scala), <br/>by Heather Miller, June 13th 2013

**Strange Loop 2013**<br/>
[Spores: Distributable Functions in Scala](https://speakerdeck.com/heathermiller/spores-distributable-functions-in-scala), <br/>by Heather Miller, September 18th 2013
<br/><i>(this talk covers mostly spores, closures that you can serialize and distribute in Scala)</i>

<br/>

### See More!

<!-- Handle subtypes,

    import scala.pickling._
    import json._

    class Person(name: String, age: Int)
    case class Employee(name: String, age: Int, position: String) extends Person(name, age)

    val e = Employee("Joe", 32, "Analyst")
    val pckl = e.pickle
    val e2 = pckl.unpickle[Person] // e2 has type Employee
 -->

<div id="box-wrapper">
<!--   <div id="overview-box">
    Overview
    <a href="{{ site.baseurl }}/overview"><span></span></a>
  </div> -->

  <div id="benchmarks-box">
    Benchmarks
    <a href="{{ site.baseurl }}/benchmarks"><span></span></a>
  </div>

  <!-- <div id="appendix-box">
    Examples
    <a href="{{ site.baseurl }}/examples"><span></span></a>
  </div> -->
</div>

### Download

Scala Pickling for Scala 2.10.2 is available on Sonatype! You can find Scala Pickling under groupID: `org.scala-lang` and artifactID: `scala-pickling_2.10`. The current version is 0.8.0-SNAPSHOT.

You can use Scala Pickling in your SBT project by simply adding the following dependency to your build file:

    libraryDependencies += "org.scala-lang" %% "scala-pickling" % "0.8.0-SNAPSHOT"

For a more illustrative example, see a [sample SBT project which uses Scala Pickling](https://github.com/xeno-by/sbt-example-pickling).

Or you can just [directly download the jar](https://oss.sonatype.org/service/local/artifact/maven/redirect?r=snapshots&g=org.scala-lang&a=scala-pickling_2.10&v=0.8.0-SNAPSHOT&e=jar).



{% include what-makes-it-different.md %}