"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5213],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),p=u(n),d=o,f=p["".concat(s,".").concat(d)]||p[d]||c[d]||a;return n?r.createElement(f,i(i({ref:t},m),{},{components:n})):r.createElement(f,i({ref:t},m))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},9360:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return m},default:function(){return p}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],l={id:"math",title:"Math"},s=void 0,u={unversionedId:"algorithms/math",id:"algorithms/math",isDocsHomePage:!1,title:"Math",description:"Notes",source:"@site/../contents/algorithms/math.md",sourceDirName:"algorithms",slug:"/algorithms/math",permalink:"/algorithms/math",editUrl:"https://github.com/yangshun/tech-interview-handbook/edit/master/contents/../contents/algorithms/math.md",tags:[],version:"current",lastUpdatedBy:"S\xedlvia Fonseca",lastUpdatedAt:1633403997,formattedLastUpdatedAt:"10/5/2021",frontMatter:{id:"math",title:"Math"},sidebar:"docs",previous:{title:"Linked List",permalink:"/algorithms/linked-list"},next:{title:"Matrix",permalink:"/algorithms/matrix"}},m=[{value:"Notes",id:"notes",children:[{value:"Some common formulas:",id:"some-common-formulas",children:[],level:4}],level:2},{value:"Recommended LeetCode questions",id:"recommended-leetcode-questions",children:[],level:2}],c={toc:m};function p(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"notes"},"Notes"),(0,a.kt)("p",null,"If code involves division or modulo, remember to check for division or modulo by 0 case."),(0,a.kt)("p",null,'When a question involves "a multiple of a number", perhaps modulo might be useful.'),(0,a.kt)("p",null,"Check for and handle overflow/underflow if you are using a typed language like Java and C++. At the very least, mention that overflow/underflow is possible and ask whether you need to handle it."),(0,a.kt)("p",null,"Consider negative numbers and floating point numbers. This may sound obvious, but under interview pressure, many obvious cases go unnoticed."),(0,a.kt)("p",null,"When dealing with floating point numbers, take note of rounding mistakes. Consider using epsilon comparisons instead of equality checks. E.g. ",(0,a.kt)("inlineCode",{parentName:"p"},"abs(x - y) <= 10e7")," instead of ",(0,a.kt)("inlineCode",{parentName:"p"},"x == y"),")."),(0,a.kt)("p",null,"If the question asks to implement an operator such as power, squareroot or division and want it to be faster than O(n), binary search is usually the approach to go."),(0,a.kt)("h4",{id:"some-common-formulas"},"Some common formulas:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Sum of 1 to N = (n+1) ","*"," n/2"),(0,a.kt)("li",{parentName:"ul"},"Sum of GP = 2",(0,a.kt)("sup",null,"0")," + 2",(0,a.kt)("sup",null,"1")," + 2",(0,a.kt)("sup",null,"2")," + 2",(0,a.kt)("sup",null,"3")," + ... 2",(0,a.kt)("sup",null,"n")," = 2",(0,a.kt)("sup",null,"n+1")," - 1"),(0,a.kt)("li",{parentName:"ul"},"Permutations of N = N! / (N-K)!"),(0,a.kt)("li",{parentName:"ul"},"Combinations of N = N! / (K! ","*"," (N-K)!)")),(0,a.kt)("h2",{id:"recommended-leetcode-questions"},"Recommended LeetCode questions"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://leetcode.com/problems/powx-n/"},"Pow(x, n)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://leetcode.com/problems/sqrtx/"},"Sqrt(x)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://leetcode.com/problems/integer-to-english-words/"},"Integer to English Words"))))}p.isMDXComponent=!0}}]);