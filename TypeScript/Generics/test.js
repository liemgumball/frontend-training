var isNonEmpty = function (s) { return s.length > 0; };
var foo = function (s) { return console.log(s); };
var bar = "dadada";
// foo(bar); // error!
if (isNonEmpty(bar)) {
    foo(bar); // OK
}
