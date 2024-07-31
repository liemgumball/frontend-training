type Nominal<T, K extends string> = T & { __brand: K };
 
type NonEmptyString = Nominal<string, "nonempty">;
 
const isNonEmpty = (s: string): s is NonEmptyString => s.length > 0;
 
const foo = (s: NonEmptyString) => console.log(s);
 
const bar = "dadada";
// foo(bar); // error!
 
if (isNonEmpty(bar)) {
  foo(bar); // OK
}