(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{468:function(t,e,r){"use strict";r.r(e);var n={computed:{posts(){return this.$site.pages.filter(t=>t.path.startsWith("/news/")&&!t.frontmatter.newsIndex).sort((t,e)=>new Date(e.frontmatter.date)-new Date(t.frontmatter.date))}}},a=r(14),s=Object(a.a)(n,(function(){var t=this,e=t._self._c;return e("div",t._l(t.posts,(function(r){return e("div",[e("h2",[t._v(t._s(r.frontmatter.title))]),t._v(" "),e("router-link",{attrs:{to:r.path}},[e("NewsPostMeta",{attrs:{date:r.frontmatter.date}})],1),t._v(" "),e("div",{domProps:{innerHTML:t._s(r.excerpt)}}),t._v(" "),!1!==r.frontmatter.more?e("p",[e("router-link",{attrs:{to:r.path}},[t._v("Read more")])],1):t._e()],1)})),0)}),[],!1,null,null,null);e.default=s.exports}}]);