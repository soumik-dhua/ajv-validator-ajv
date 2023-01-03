(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{370:function(e,t,o){"use strict";o.r(t);var a=o(13),r=Object(a.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"type-coercion-rules"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#type-coercion-rules"}},[e._v("#")]),e._v(" Type coercion rules")]),e._v(" "),t("p",[e._v("To enable type coercion pass option "),t("code",[e._v("coerceTypes")]),e._v(" to Ajv with "),t("code",[e._v("true")]),e._v(" or "),t("code",[e._v("array")]),e._v(" (it is "),t("code",[e._v("false")]),e._v(" by default). See "),t("RouterLink",{attrs:{to:"/guide/modifying-data.html#coercing-data-types"}},[e._v("example")]),e._v(".")],1),e._v(" "),t("p",[e._v("The coercion rules are different from JavaScript:")]),e._v(" "),t("ul",[t("li",[e._v("to validate user input as expected")]),e._v(" "),t("li",[e._v("to have the coercion reversible")]),e._v(" "),t("li",[e._v("to correctly validate cases where different types are required in subschemas (e.g., in "),t("code",[e._v("anyOf")]),e._v(").")])]),e._v(" "),t("p",[e._v("Type coercion only happens if there is "),t("code",[e._v("type")]),e._v(" keyword and if without coercion the validation would have failed. If coercion to the required type succeeds then the validation continues to other keywords, otherwise the validation fails.")]),e._v(" "),t("p",[e._v("If there are multiple types allowed in "),t("code",[e._v("type")]),e._v(" keyword the coercion will only happen if none of the types match the data and some of the scalar types are present (coercion to/from "),t("code",[e._v("object")]),e._v("/"),t("code",[e._v("array")]),e._v(" is not possible). In this case the validating function will try coercing the data to each type in order until some of them succeeds.")]),e._v(" "),t("p",[e._v("Application of these rules can have some unexpected consequences. Ajv may coerce the same value multiple times (this is why coercion reversibility is required) as needed at different points in the schema. This is particularly evident when using "),t("code",[e._v("oneOf")]),e._v(", which must test all of the subschemas. Ajv will coerce the type for each subschema, possibly resulting in unexpected failure if it can coerce to match more than one of the subschemas. Even if it succeeds, Ajv will not backtrack, so you'll get the type of the final coercion even if that's not the one that allowed the data to pass validation. If possible, structure your schema with "),t("code",[e._v("anyOf")]),e._v(", which won't validate subsequent subschemas as soon as it encounters one subschema that matches.")]),e._v(" "),t("p",[e._v("Possible type coercions:")]),e._v(" "),t("table",[t("thead",[t("tr",[t("th",[e._v("from type →"),t("br"),e._v("to type ↓")]),e._v(" "),t("th",{staticStyle:{"text-align":"center"}},[e._v("string")]),e._v(" "),t("th",{staticStyle:{"text-align":"center"}},[e._v("number")]),e._v(" "),t("th",{staticStyle:{"text-align":"center"}},[e._v("boolean")]),e._v(" "),t("th",{staticStyle:{"text-align":"center"}},[e._v("null")]),e._v(" "),t("th",{staticStyle:{"text-align":"center"}},[e._v("array*")])])]),e._v(" "),t("tbody",[t("tr",[t("td",[e._v("string")]),e._v(" "),t("td",{staticStyle:{"text-align":"center"}},[e._v("-")]),e._v(" "),t("td",{staticStyle:{"text-align":"center"}},[t("code",[e._v("x")]),e._v("→"),t("code",[e._v('""+x')])]),e._v(" "),t("td",{staticStyle:{"text-align":"center"}},[t("code",[e._v("false")]),e._v("→"),t("code",[e._v('"false"')]),t("br"),t("code",[e._v("true")]),e._v("→"),t("code",[e._v('"true"')])]),e._v(" "),t("td",{staticStyle:{"text-align":"center"}},[t("code",[e._v("null")]),e._v("→"),t("code",[e._v('""')])]),e._v(" "),t("td",{staticStyle:{"text-align":"center"}},[t("code",[e._v("[x]")]),e._v("→"),t("code",[e._v("x")])])]),e._v(" "),t("tr",[t("td",[e._v("number /"),t("br"),e._v("integer")]),e._v(" "),t("td",{staticStyle:{"text-align":"center"}},[e._v("Valid number /"),t("br"),e._v("integer: "),t("code",[e._v("x")]),e._v("→"),t("code",[e._v("+x")]),t("br")]),e._v(" "),t("td",{staticStyle:{"text-align":"center"}},[e._v("-")]),e._v(" "),t("td",{staticStyle:{"text-align":"center"}},[t("code",[e._v("false")]),e._v("→"),t("code",[e._v("0")]),t("br"),t("code",[e._v("true")]),e._v("→"),t("code",[e._v("1")])]),e._v(" "),t("td",{staticStyle:{"text-align":"center"}},[t("code",[e._v("null")]),e._v("→"),t("code",[e._v("0")])]),e._v(" "),t("td",{staticStyle:{"text-align":"center"}},[t("code",[e._v("[x]")]),e._v("→"),t("code",[e._v("x")])])]),e._v(" "),t("tr",[t("td",[e._v("boolean")]),e._v(" "),t("td",{staticStyle:{"text-align":"center"}},[t("code",[e._v('"false"')]),e._v("→"),t("code",[e._v("false")]),t("br"),t("code",[e._v('"true"')]),e._v("→"),t("code",[e._v("true")]),t("br"),t("code",[e._v('"abc"')]),e._v("⇸"),t("br"),t("code",[e._v('""')]),e._v("⇸")]),e._v(" "),t("td",{staticStyle:{"text-align":"center"}},[t("code",[e._v("0")]),e._v("→"),t("code",[e._v("false")]),t("br"),t("code",[e._v("1")]),e._v("→"),t("code",[e._v("true")]),t("br"),t("code",[e._v("x")]),e._v("⇸")]),e._v(" "),t("td",{staticStyle:{"text-align":"center"}},[e._v("-")]),e._v(" "),t("td",{staticStyle:{"text-align":"center"}},[t("code",[e._v("null")]),e._v("→"),t("code",[e._v("false")])]),e._v(" "),t("td",{staticStyle:{"text-align":"center"}},[t("code",[e._v("[false]")]),e._v("→"),t("code",[e._v("false")]),t("br"),t("code",[e._v("[true]")]),e._v("→"),t("code",[e._v("true")])])]),e._v(" "),t("tr",[t("td",[e._v("null")]),e._v(" "),t("td",{staticStyle:{"text-align":"center"}},[t("code",[e._v('""')]),e._v("→"),t("code",[e._v("null")]),t("br"),t("code",[e._v('"null"')]),e._v("⇸"),t("br"),t("code",[e._v('"abc"')]),e._v("⇸")]),e._v(" "),t("td",{staticStyle:{"text-align":"center"}},[t("code",[e._v("0")]),e._v("→"),t("code",[e._v("null")]),t("br"),t("code",[e._v("x")]),e._v("⇸")]),e._v(" "),t("td",{staticStyle:{"text-align":"center"}},[t("code",[e._v("false")]),e._v("→"),t("code",[e._v("null")]),t("br"),t("code",[e._v("true")]),e._v("⇸")]),e._v(" "),t("td",{staticStyle:{"text-align":"center"}},[e._v("-")]),e._v(" "),t("td",{staticStyle:{"text-align":"center"}},[t("code",[e._v("[null]")]),e._v("→"),t("code",[e._v("null")])])]),e._v(" "),t("tr",[t("td",[e._v("array*")]),e._v(" "),t("td",{staticStyle:{"text-align":"center"}},[t("code",[e._v("x")]),e._v("→"),t("code",[e._v("[x]")])]),e._v(" "),t("td",{staticStyle:{"text-align":"center"}},[t("code",[e._v("x")]),e._v("→"),t("code",[e._v("[x]")])]),e._v(" "),t("td",{staticStyle:{"text-align":"center"}},[t("code",[e._v("false")]),e._v("→"),t("code",[e._v("[false]")]),t("br"),t("code",[e._v("true")]),e._v("→"),t("code",[e._v("[true]")])]),e._v(" "),t("td",{staticStyle:{"text-align":"center"}},[t("code",[e._v("null")]),e._v("→"),t("code",[e._v("[null]")])]),e._v(" "),t("td",{staticStyle:{"text-align":"center"}},[e._v("-")])])])]),e._v(" "),t("p",[e._v("* Requires option "),t("code",[e._v('{coerceTypes: "array"}')])]),e._v(" "),t("h2",{attrs:{id:"coercion-from-string-values"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#coercion-from-string-values"}},[e._v("#")]),e._v(" Coercion from string values")]),e._v(" "),t("h4",{attrs:{id:"to-number-type"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#to-number-type"}},[e._v("#")]),e._v(" To number type")]),e._v(" "),t("p",[e._v("Coercion to "),t("code",[e._v("number")]),e._v(" is possible if the string is a valid number, "),t("code",[e._v("+data")]),e._v(" is used.")]),e._v(" "),t("h4",{attrs:{id:"to-integer-type"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#to-integer-type"}},[e._v("#")]),e._v(" To integer type")]),e._v(" "),t("p",[e._v("Coercion to "),t("code",[e._v("integer")]),e._v(" is possible if the string is a valid number without fractional part ("),t("code",[e._v("data % 1 === 0")]),e._v(").")]),e._v(" "),t("h4",{attrs:{id:"to-boolean-type"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#to-boolean-type"}},[e._v("#")]),e._v(" To boolean type")]),e._v(" "),t("p",[e._v("Unlike JavaScript, only these strings can be coerced to "),t("code",[e._v("boolean")]),e._v(":")]),e._v(" "),t("ul",[t("li",[t("code",[e._v('"true"')]),e._v(" -> "),t("code",[e._v("true")])]),e._v(" "),t("li",[t("code",[e._v('"false"')]),e._v(" -> "),t("code",[e._v("false")])])]),e._v(" "),t("h4",{attrs:{id:"to-null-type"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#to-null-type"}},[e._v("#")]),e._v(" To null type")]),e._v(" "),t("p",[e._v("Empty string is coerced to "),t("code",[e._v("null")]),e._v(", other strings can't be coerced.")]),e._v(" "),t("h2",{attrs:{id:"coercion-from-number-values"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#coercion-from-number-values"}},[e._v("#")]),e._v(" Coercion from number values")]),e._v(" "),t("h4",{attrs:{id:"to-string-type"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#to-string-type"}},[e._v("#")]),e._v(" To string type")]),e._v(" "),t("p",[e._v("Always possible, "),t("code",[e._v("'' + data")]),e._v(" is used")]),e._v(" "),t("h4",{attrs:{id:"to-boolean-type-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#to-boolean-type-2"}},[e._v("#")]),e._v(" To boolean type")]),e._v(" "),t("p",[e._v("Unlike JavaScript, only these numbers can be coerced to "),t("code",[e._v("boolean")]),e._v(":")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("1")]),e._v(" -> "),t("code",[e._v("true")])]),e._v(" "),t("li",[t("code",[e._v("0")]),e._v(" -> "),t("code",[e._v("false")])])]),e._v(" "),t("h4",{attrs:{id:"to-null-type-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#to-null-type-2"}},[e._v("#")]),e._v(" To null type")]),e._v(" "),t("p",[t("code",[e._v("0")]),e._v(" coerces to "),t("code",[e._v("null")]),e._v(", other numbers can't be coerced.")]),e._v(" "),t("h2",{attrs:{id:"coercion-from-boolean-values"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#coercion-from-boolean-values"}},[e._v("#")]),e._v(" Coercion from boolean values")]),e._v(" "),t("h4",{attrs:{id:"to-string-type-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#to-string-type-2"}},[e._v("#")]),e._v(" To string type")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("true")]),e._v(" -> "),t("code",[e._v('"true"')])]),e._v(" "),t("li",[t("code",[e._v("false")]),e._v(" -> "),t("code",[e._v('"false"')])])]),e._v(" "),t("h4",{attrs:{id:"to-number-integer-types"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#to-number-integer-types"}},[e._v("#")]),e._v(" To number/integer types")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("true")]),e._v(" -> "),t("code",[e._v("1")])]),e._v(" "),t("li",[t("code",[e._v("false")]),e._v(" -> "),t("code",[e._v("0")])])]),e._v(" "),t("h4",{attrs:{id:"to-null-type-3"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#to-null-type-3"}},[e._v("#")]),e._v(" To null type")]),e._v(" "),t("p",[t("code",[e._v("false")]),e._v(" coerces to "),t("code",[e._v("null")]),e._v(", "),t("code",[e._v("true")]),e._v(" can't be coerced.")]),e._v(" "),t("h2",{attrs:{id:"coercion-from-null"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#coercion-from-null"}},[e._v("#")]),e._v(" Coercion from null")]),e._v(" "),t("h4",{attrs:{id:"to-string-type-3"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#to-string-type-3"}},[e._v("#")]),e._v(" To string type")]),e._v(" "),t("p",[t("code",[e._v("null")]),e._v(" coerces to the empty string.")]),e._v(" "),t("h4",{attrs:{id:"to-number-integer-types-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#to-number-integer-types-2"}},[e._v("#")]),e._v(" To number/integer types")]),e._v(" "),t("p",[t("code",[e._v("null")]),e._v(" coerces to "),t("code",[e._v("0")])]),e._v(" "),t("h4",{attrs:{id:"to-boolean-type-3"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#to-boolean-type-3"}},[e._v("#")]),e._v(" To boolean type")]),e._v(" "),t("p",[t("code",[e._v("null")]),e._v(" coerces to "),t("code",[e._v("false")])]),e._v(" "),t("h2",{attrs:{id:"coercion-to-and-from-array"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#coercion-to-and-from-array"}},[e._v("#")]),e._v(" Coercion to and from array")]),e._v(" "),t("p",[e._v("These coercions require that the option "),t("code",[e._v("coerceTypes")]),e._v(" is "),t("code",[e._v('"array"')]),e._v(".")]),e._v(" "),t("p",[e._v("If a scalar data is present and array is required, Ajv wraps scalar data in an array.")]),e._v(" "),t("p",[e._v("If an array with one item is present and a scalar is required, Ajv coerces array into its item.")]),e._v(" "),t("ul",[t("li",[t("code",[e._v('"foo"')]),e._v(" -> "),t("code",[e._v('[ "foo" ]')])]),e._v(" "),t("li",[t("code",[e._v('[ "foo" ]')]),e._v(" -> "),t("code",[e._v('"foo"')])])])])}),[],!1,null,null,null);t.default=r.exports}}]);