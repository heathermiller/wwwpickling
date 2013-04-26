
### What Makes It Different?

Scala Pickling...

- can be <span class="highlight">language-agnostic</span>
  if you want it to be. Changing the format of
  your serialized data is as easy as importing the correct implicit
  *pickle format* into scope. Out of the box, we currently support a fast
  Scala binary format, as well as JSON. Or, you can even roll your own
  custom pickle format!
- is <span class="highlight">automatic</span>.
  That is, without any boilerplate at all, one can
  instruct the framework to figure out how to serialize an arbitrary class
  instance. No need to register classes, no need to implement any methods.
- <span class="highlight">allows for unanticipated evolution</span>.
  That means that you don't *have to*
  extend some marker trait in order to serialize a given Scala class. Just
  import the `scala.pickling` package and call `pickle` on the instance that
  you would like to serialize.
- gives you more <span class="highlight">typesafety</span>.
  No more errors from serialization/deserialization
  propagating to arbitrary points in your program. Unlike, Java Serialization,
  errors either manifest themselves as compile-time errors, or runtime errors
  only at the point of unpickling.
- has <span class="highlight">robust support for object-orientation</span>.
  While Scala Pickling is based
  on the elegant notion of *pickler combinators* from functional programming,
  it goes on to extend pickler combinators to be able to handle *subtyping*, a
  notion which does not exist in the purely functional paradigm. That means
  that if you pickle an instance of a subclass, and then try to unpickle as an
  instance of a superclass, you will still get back the original subclass which
  you initially pickled.
- <span class="highlight">happens at compile-time</span>.
  That means that it's super-performant becuase
  serialization-related code is typically generated at compile-time and inlined
  where it is needed in your code. Scala Pickling is essentially fully-static,
  reflection is only used as a fallback when static (compile-time) generation fails.

<!--
Most other *automatic* serialization frameworks rely predominantly on runtime
reflection which often has a high runtime cost, or on bytecode rewriting which
isn't typesafe.  Instead, Scala Pickling generates pickling/unpickling code at
compile-time, guaranteeing you fast statically-generated picklers and typesafe
serialization.
 -->