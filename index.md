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
<span class="icon-wrap"><a href="http://lampwww.epfl.ch/~hmiller/files/pickling.pdf"><img class="pdf-icon" src="{{ site.baseurl }}/resources/img/pdf-icon.png"/></a></span><strong><a href="{{ site.baseurl }}/resources/oopsla-pickling.pdf">Object-Oriented Pickler Combinators and an Extensible Generation Framework</a></strong>, by Heather Miller, Philipp Haller, Eugene Burmako, and Martin Odersky. <em>submitted, </br>under review.</em>
</span>

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
  <div id="overview-box">
    Overview
    <a href="{{ site.baseurl }}/overview"><span></span></a>
  </div>

  <div id="benchmarks-box">
    Benchmarks
    <a href="{{ site.baseurl }}/benchmarks"><span></span></a>
  </div>

  <div id="appendix-box">
    Appendix
    <a href="{{ site.baseurl }}/appendix"><span></span></a>
  </div>
</div>

### What Makes It Different?

Most other *automatic* serialization frameworks rely predominantly on runtime
reflection which often has a high runtime cost, or on bytecode rewriting which
isn't typesafe.  Instead, Scala Pickling generates pickling/unpickling code at
compile-time, guaranteeing you fast statically-generated picklers and typesafe
serialization.
