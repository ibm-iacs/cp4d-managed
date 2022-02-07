"use strict";(self.webpackChunkexample=self.webpackChunkexample||[]).push([[6530],{5439:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return i},default:function(){return d}});var n,o=a(3366),r=(a(7294),a(4983)),l=a(4295),s=["components"],i={},m=(n="PageDescription",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)}),p={_frontmatter:i},c=l.Z;function d(e){var t=e.components,a=(0,o.Z)(e,s);return(0,r.kt)(c,Object.assign({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(m,{mdxType:"PageDescription"},(0,r.kt)("p",null,"In the world of Gatsby themes,\n",(0,r.kt)("a",{parentName:"p",href:"https://www.gatsbyjs.org/blog/2019-04-29-component-shadowing/"},"component shadowing"),"\nis an extremely powerful way for developers to provide their ",(0,r.kt)("em",{parentName:"p"},"own")," components\nfor the theme to use over the defaults. You can shadow any file that is\nprocessed by webpack. This includes sass files, mdx files, and the react\ncomponents themselves.")),(0,r.kt)("h2",null,"Caveats"),(0,r.kt)("p",null,"If you completely shadow a file you won’t get future updates to that individual\nfile. These are some golden rules to make sure you stay as close to the theme as\npossible and not forgo future updates."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Open a\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/carbon-design-system/gatsby-theme-carbon/issues/new"},"quick issue"),"\nin the gatsby-theme-carbon repo to make sure we’re not working on your\nchange.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Shadow as few files as you can to achieve your goal. If you can shadow just a\nsingle file, that’s ideal.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"If you do end up shadowing a component, please tell us! We might use it to\ninform future development."))),(0,r.kt)("h2",null,"Shadowing basics"),(0,r.kt)("p",null,"In order to shadow a component in the theme, all you need to do is place a directory\nin the ",(0,r.kt)("inlineCode",{parentName:"p"},"src/gatsby-theme-carbon")," in your project. The directory should have the same\nname as the file you’re shadowing."),(0,r.kt)("p",null,"In order to place your own title in the Header component:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create a directory the same name as the component you wish to shadow.\nEverything after ",(0,r.kt)("inlineCode",{parentName:"p"},"src/gatsby-theme-carbon/")," refers to the\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/carbon-design-system/gatsby-theme-carbon/tree/main/packages/gatsby-theme-carbon/src"},"src directory of gatsby-theme-carbon"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create a file inside of the directory that matches the component you want to shadow. For example: ",(0,r.kt)("inlineCode",{parentName:"p"},"src/gatsby-theme-carbon/components/Header/index.js"),". ",(0,r.kt)("em",{parentName:"p"},"If shadowing Footer or Header the file must be named ",(0,r.kt)("strong",{parentName:"em"},(0,r.kt)("inlineCode",{parentName:"strong"},"index.js"))))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Import the component you wish to shadow by providing the full url pointing at\nthe component within the theme")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Your component will ",(0,r.kt)("strong",{parentName:"p"},"receive the same props")," as the one you’re shadowing.\nYou’ll can log those props to see if you’ll need any of them")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Regardless, you should ",(0,r.kt)("em",{parentName:"p"},"ALWAYS")," spread the extra props into the original\ncomponent, this allows the core component to function as needed. Even if it\ndoesn’t receive any props now, it might in the future.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Provide your new, custom component as the default export"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Header from 'gatsby-theme-carbon/src/components/Header';\n\nconst CustomHeader = (props) => (\n  <Header {...props}>\n    <span>Gatsby theme</span>&nbsp;Carbon\n  </Header>\n);\n\nexport default CustomHeader;\n")),(0,r.kt)("h2",null,"Components you’ll need to shadow"),(0,r.kt)("p",null,"We’ve already provided pre-shadowed, dummy components however these are the ones\nyou’ll definitely need to shadow."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Component"),(0,r.kt)("th",{parentName:"tr",align:null},"Path"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ResourceLinks"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/carbon-design-system/gatsby-theme-carbon/blob/main/packages/example/src/gatsby-theme-carbon/components/LeftNav/ResourceLinks.js"},(0,r.kt)("inlineCode",{parentName:"a"},"src/gatsby-theme-carbon/components/LeftNav/ResourceLinks.js"))),(0,r.kt)("td",{parentName:"tr",align:null},"The bottom links on the SideNav, pass ",(0,r.kt)("inlineCode",{parentName:"td"},"shouldOpenNewTabs")," to open links externally")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Footer"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/carbon-design-system/gatsby-theme-carbon/blob/main/packages/example/src/gatsby-theme-carbon/components/Footer/index.js"},(0,r.kt)("inlineCode",{parentName:"a"},"src/gatsby-theme-carbon/components/Footer/index.js"))),(0,r.kt)("td",{parentName:"tr",align:null},"The links and content at the bottom of each page")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Header"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/carbon-design-system/gatsby-theme-carbon/blob/main/packages/example/src/gatsby-theme-carbon/components/Header/index.js"},(0,r.kt)("inlineCode",{parentName:"a"},"src/gatsby-theme-carbon/components/Header/index.js"))),(0,r.kt)("td",{parentName:"tr",align:null},"The text in the top left corner of the UI Shell")))))}d.isMDXComponent=!0},4295:function(e,t,a){a.d(t,{Z:function(){return w}});var n=a(7294),o=a(8650),r=a.n(o),l=a(5444),s=a(5426),i=a(3321),m=a(5900),p=a.n(m),c=function(e){var t,a=e.title,o=e.theme,r=e.tabs,l=void 0===r?[]:r;return n.createElement("div",{className:p()("PageHeader-module--page-header--NqfPe",(t={},t["PageHeader-module--with-tabs--vbQ-W"]=l.length,t["PageHeader-module--dark-mode--WCeH8"]="dark"===o,t))},n.createElement("div",{className:"bx--grid"},n.createElement("div",{className:"bx--row"},n.createElement("div",{className:"bx--col-lg-12"},n.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},a)))))},d=function(e){var t=e.relativePagePath,a=e.repository,o=(0,l.useStaticQuery)("1364590287").site.siteMetadata.repository,r=a||o,s=r.baseUrl,i=r.subDirectory,m=s+"/edit/"+r.branch+i+"/src/pages"+t;return s?n.createElement("div",{className:"bx--row EditLink-module--row--BEmSX"},n.createElement("div",{className:"bx--col"},n.createElement("a",{className:"EditLink-module--link--IDrl1",href:m},"Edit this page on GitHub"))):null},u=a(4275),h=a(1721),g=function(e){function t(){return e.apply(this,arguments)||this}return(0,h.Z)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,o=e.slug,s=o.split("/").filter(Boolean).slice(-1)[0],i=a.map((function(e){var t,a=r()(e,{lower:!0,strict:!0}),i=a===s,m=new RegExp(s+"/?(#.*)?$"),c=o.replace(m,a);return n.createElement("li",{key:e,className:p()((t={},t["PageTabs-module--selected-item--aBB0K"]=i,t),"PageTabs-module--list-item--024o6")},n.createElement(l.Link,{className:"PageTabs-module--link--Kz-7R",to:""+c},e))}));return n.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},n.createElement("div",{className:"bx--grid"},n.createElement("div",{className:"bx--row"},n.createElement("div",{className:"bx--col-lg-12 bx--col-no-gutter"},n.createElement("nav",{"aria-label":t},n.createElement("ul",{className:"PageTabs-module--list--xLqxG"},i))))))},t}(n.Component),b=g,k=a(2881),y=a(6958),f=a(36),N=function(e){var t=e.date,a=new Date(t);return t?n.createElement(f.X2,{className:"last-modified-date-module--row--XJoYQ"},n.createElement(f.sg,null,n.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null},w=function(e){var t=e.pageContext,a=e.children,o=e.location,m=e.Title,p=t.frontmatter,h=void 0===p?{}:p,g=t.relativePagePath,f=t.titleType,w=h.tabs,v=h.title,x=h.theme,E=h.description,C=h.keywords,P=h.date,T=(0,y.Z)().interiorTheme,H=(0,l.useStaticQuery)("2456312558").site.pathPrefix,j=H?o.pathname.replace(H,""):o.pathname,L=w?j.split("/").filter(Boolean).slice(-1)[0]||r()(w[0],{lower:!0}):"",D=x||T;return n.createElement(i.Z,{tabs:w,homepage:!1,theme:D,pageTitle:v,pageDescription:E,pageKeywords:C,titleType:f},n.createElement(c,{title:m?n.createElement(m,null):v,label:"label",tabs:w,theme:D}),w&&n.createElement(b,{title:v,slug:j,tabs:w,currentTab:L}),n.createElement(k.Z,{padded:!0},a,n.createElement(d,{relativePagePath:g}),n.createElement(N,{date:P})),n.createElement(u.Z,{pageContext:t,location:o,slug:j,tabs:w,currentTab:L}),n.createElement(s.Z,null))}}}]);
//# sourceMappingURL=component---src-pages-guides-1-shadowing-mdx-db4dd8fa35d5e79c1d2b.js.map