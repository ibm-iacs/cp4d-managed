"use strict";(self.webpackChunkexample=self.webpackChunkexample||[]).push([[3679],{809:function(e,n,t){t.r(n),t.d(n,{_frontmatter:function(){return l},default:function(){return A}});var a=t(3366),i=(t(7294),t(4983)),r=t(4295),o=["components"],l={},s=function(e){return function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",n)}},p=s("PageDescription"),m=s("AnchorLinks"),d=s("AnchorLink"),c=s("Row"),g=s("Column"),u={_frontmatter:l},h=r.Z;function A(e){var n=e.components,t=(0,a.Z)(e,o);return(0,i.kt)(h,Object.assign({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)(p,{mdxType:"PageDescription"},(0,i.kt)("p",null,"Gatsby themes allow you to override configuration from the theme by defining the\nsame property in your ",(0,i.kt)("inlineCode",{parentName:"p"},"gatsby-config.js")," at the root of your project. You can\nsee the default configuration provided by the theme’s\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ibm-iacs/cp4d-managed/blob/main/packages/gatsby-theme-carbon/gatsby-config.js"},(0,i.kt)("inlineCode",{parentName:"a"},"gatsby-config.js")),"\nfile.")),(0,i.kt)(m,{mdxType:"AnchorLinks"},(0,i.kt)(d,{mdxType:"AnchorLink"},"Site metadata"),(0,i.kt)(d,{mdxType:"AnchorLink"},"Manifest"),(0,i.kt)(d,{mdxType:"AnchorLink"},"Theming"),(0,i.kt)(d,{mdxType:"AnchorLink"},"Favicon"),(0,i.kt)(d,{mdxType:"AnchorLink"},"Image compression"),(0,i.kt)(d,{mdxType:"AnchorLink"},"Global search"),(0,i.kt)(d,{mdxType:"AnchorLink"},"Navigation style"),(0,i.kt)(d,{mdxType:"AnchorLink"},"Edit on Github link"),(0,i.kt)(d,{mdxType:"AnchorLink"},"Medium"),(0,i.kt)(d,{mdxType:"AnchorLink"},"Other options")),(0,i.kt)("h2",null,"Site metadata"),(0,i.kt)("p",null,"To add a title and description to each page, simply provide them to siteMetadata\nin your ",(0,i.kt)("inlineCode",{parentName:"p"},"gatsby-config.js")," file."),(0,i.kt)("p",null,"The language attribute applied to the ",(0,i.kt)("inlineCode",{parentName:"p"},"<html>")," tag on every page is English\n(",(0,i.kt)("inlineCode",{parentName:"p"},"en"),") by default, but you can choose to override this. For more information on\ndeclaring the language of a page in HTML, please review\n",(0,i.kt)("a",{parentName:"p",href:"https://www.w3.org/WAI/WCAG21/Understanding/language-of-page"},"W3 Criterion 3.1.1 Language of a Page"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"module.exports = {\n  siteMetadata: {\n    title: 'IBM Expert Labs',\n    description: 'A Gatsby theme for the carbon design system',\n    keywords: 'gatsby,theme,carbon',\n    lang: 'en',\n  },\n  plugins: ['gatsby-theme-carbon'],\n};\n")),(0,i.kt)("h2",null,"Manifest"),(0,i.kt)("p",null,"One of the first configurations should be to override the default manifest\noptions, you can do this in ",(0,i.kt)("inlineCode",{parentName:"p"},"gatsby-config.js"),". Any options you don’t set, will\nbe provided by the theme. See the example project."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"siteMetadata: {\n    title: 'IBM Expert Labs',\n  },\n  plugins: [\n    'gatsby-theme-carbon',\n    {\n      resolve: 'gatsby-plugin-manifest',\n      options: {\n        name: 'Carbon Design Gatsby Theme',\n        short_name: 'IBM Expert Labs',\n        start_url: '/',\n        background_color: '#ffffff',\n        theme_color: '#0062ff',\n        display: 'browser',\n      },\n    },\n  ],\n")),(0,i.kt)("h2",null,"Theming"),(0,i.kt)("p",null,"With theming, you can control the colors being used on the homepage as well as\nthe interior pages. Your choices include ",(0,i.kt)("inlineCode",{parentName:"p"},"white"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"dark"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"g10"),". The default\nfor the homepage and the interior theme are dark and g10, respectively."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"  plugins: [\n    {\n      resolve: 'gatsby-theme-carbon',\n      options: {\n        theme: {\n          homepage: 'dark',\n          interior: 'g10',\n        },\n      },\n    },\n  ],\n")),(0,i.kt)("h2",null,"Favicon"),(0,i.kt)("p",null,"If you need to override the default favicon, you can do so by passing a relative\npath to the icon. It’s recommended to provide a 512 x 512 version."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"IMPORTANT:")," For best results, if you’re providing an icon for generation it\nshould be…"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"at least as big as the largest icon being generated (512x512 by default)."),(0,i.kt)("li",{parentName:"ul"},"square (if it’s not, transparent bars will add to make it square)."),(0,i.kt)("li",{parentName:"ul"},"of one of the follow formats: JPEG, PNG, WebP, TIFF, GIF or SVG.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"plugins: [\n    {\n      resolve: 'gatsby-theme-carbon',\n      options: {\n        iconPath: './src/images/custom-icon-512.jpg'\n      },\n    },\n  ],\n")),(0,i.kt)("h2",null,"Image compression"),(0,i.kt)("p",null,"You can enable WebP by passing ",(0,i.kt)("inlineCode",{parentName:"p"},"withWebp: true")," or providing your own\noptimization level. See the gatsby-remark-images\n",(0,i.kt)("a",{parentName:"p",href:"https://www.gatsbyjs.org/packages/gatsby-remark-images/#options"},"plugin options"),".\nYou can also tweak the image quality based on design tolerance and performance\nthresholds."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"module.exports = {\n  plugins: [\n    {\n      resolve: 'gatsby-theme-carbon',\n      options: {\n        withWebp: true, // true, false (default false)\n        imageQuality: 50, // 0-100 (default 75)\n      },\n    },\n  ],\n};\n")),(0,i.kt)("h2",null,"Global search"),(0,i.kt)("p",null,"Site-wide search is provided by the theme. The only requirement for a page to\nshow up in the results is for it to have ",(0,i.kt)("inlineCode",{parentName:"p"},"title")," set in the\n",(0,i.kt)("a",{parentName:"p",href:"/cp4d-managed/components/MDX#frontmatter"},"frontmatter"),". To render more helpful search\nresults (and improve SEO), you’ll want to make sure your pages have\n",(0,i.kt)("inlineCode",{parentName:"p"},"description")," set in the frontmatter as well."),(0,i.kt)("p",null,"Global search is enabled by default. To disable it, set the ",(0,i.kt)("inlineCode",{parentName:"p"},"isSearchEnabled"),"\noption to false."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"  plugins: [\n    {\n      resolve: 'gatsby-theme-carbon',\n      options: {\n        isSearchEnabled: false\n      },\n    },\n  ],\n")),(0,i.kt)("p",null,"Under the hood, we use ",(0,i.kt)("a",{parentName:"p",href:"https://lunrjs.com/"},"Lunr")," to create our search index.\nIf necessary, you tweak the search scoring algorithm and source nodes. To do so,\nprovide your own\n",(0,i.kt)("a",{parentName:"p",href:"https://www.gatsbyjs.org/packages/gatsby-plugin-lunr/#getting-started"},"resolvers object"),"\nto the ",(0,i.kt)("inlineCode",{parentName:"p"},"lunrOptions")," theme option."),(0,i.kt)("h2",null,"Navigation style"),(0,i.kt)("p",null,"By default, the navigation style used by the theme is a sidebar that sits on the\nleft-hand side of the screen. You can see it right now as you read this\ndocumentation. This style works great for websites with a lot of content, like\ndocumentation sites."),(0,i.kt)("p",null,"However, if your site is more editorial in nature, and has less pages of\ncontent, you may want to use the ",(0,i.kt)("inlineCode",{parentName:"p"},"header")," navigation. This will remove the\nsidebar on the left-hand side of the page and replace it with a navigation menu\nthat sits in the header. If in the future, the content on your site evolves and\nyou feel the left nav is better suited, you can always change it back."),(0,i.kt)("p",null,"To enable the header nav, provide ",(0,i.kt)("inlineCode",{parentName:"p"},"header")," as a string to the ",(0,i.kt)("inlineCode",{parentName:"p"},"navigationStyle"),"\noption. To switch back to the default left nav provide an empty string ",(0,i.kt)("inlineCode",{parentName:"p"},"''")," to\nthe ",(0,i.kt)("inlineCode",{parentName:"p"},"navigationStyle")," option. Note: By using the ",(0,i.kt)("inlineCode",{parentName:"p"},"header")," navigation style, you\nwill lose the ResourceLinks that sit directly below the left nav."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"  plugins: [\n    {\n      resolve: 'gatsby-theme-carbon',\n      options: {\n        navigationStyle: 'header',\n      },\n    },\n  ],\n")),(0,i.kt)("p",null,"When enabled, your header navigation will look like the image below:"),(0,i.kt)(c,{mdxType:"Row"},(0,i.kt)(g,{colMd:8,colLg:8,mdxType:"Column"},(0,i.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,i.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"46.875%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAJABQDASIAAhEBAxEB/8QAGQAAAgMBAAAAAAAAAAAAAAAAAAIBAwQF/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAAB4LReZxQ//8QAGBAAAgMAAAAAAAAAAAAAAAAAAAIQETL/2gAIAQEAAQUCixR8n//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQMBAT8BP//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQIBAT8BP//EABQQAQAAAAAAAAAAAAAAAAAAACD/2gAIAQEABj8CX//EABkQAQADAQEAAAAAAAAAAAAAAAEAECExcf/aAAgBAQABPyHYiGjTqdfa/9oADAMBAAIAAwAAABCDz//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQMBAT8QP//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQIBAT8QP//EAB0QAQACAQUBAAAAAAAAAAAAAAEAETEQIVFhcaH/2gAIAQEAAT8QN1Wr1csgTlGCMMz+T5Wn/9k=')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,i.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Header navigation style",title:"Header navigation style",src:"/cp4d-managed/static/e57ea23bd169fd3d0dac4e22c4a4a31c/2e753/header-nav-config.jpg",srcSet:["/cp4d-managed/static/e57ea23bd169fd3d0dac4e22c4a4a31c/69549/header-nav-config.jpg 288w","/cp4d-managed/static/e57ea23bd169fd3d0dac4e22c4a4a31c/473e3/header-nav-config.jpg 576w","/cp4d-managed/static/e57ea23bd169fd3d0dac4e22c4a4a31c/2e753/header-nav-config.jpg 1152w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "))),(0,i.kt)("p",null,"With the header navigation style enabled, the content on your page will be\nfurther left-aligned to allow for more content space."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Just a note:")," In mobile-view, when the header navigation is enabled, the\nsidebar will persist."),(0,i.kt)("h2",null,"Edit on GitHub link"),(0,i.kt)("p",null,"To add a link to the bottom of each page that points to the current page source\nin GitHub, provide a ",(0,i.kt)("inlineCode",{parentName:"p"},"repository")," object to ",(0,i.kt)("inlineCode",{parentName:"p"},"siteMetadata")," in your\n",(0,i.kt)("inlineCode",{parentName:"p"},"gatsby-config.js")," file. You can provide a ",(0,i.kt)("inlineCode",{parentName:"p"},"baseUrl"),", and if needed, the\n",(0,i.kt)("inlineCode",{parentName:"p"},"subDirectory")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"branch")," where your site source lives."),(0,i.kt)("p",null,"To disable the ",(0,i.kt)("inlineCode",{parentName:"p"},"Edit in Github")," link, remove the ",(0,i.kt)("inlineCode",{parentName:"p"},"repository")," option. If the\noptions object is now empty, delete it all together."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"  plugins: [\n    {\n      resolve: 'gatsby-theme-carbon',\n      options: {\n        repository: {\n          baseUrl: 'https://github.com/ibm-iacs/cp4d-managed',\n          subDirectory: '/packages/example',\n          branch: 'main',\n        },\n      },\n    },\n  ],\n")),(0,i.kt)("h2",null,"Medium"),(0,i.kt)("p",null,"In order to change the source account for the\n",(0,i.kt)("a",{parentName:"p",href:"/cp4d-managed/components/MediumPosts"},(0,i.kt)("inlineCode",{parentName:"a"},"MediumPosts"))," component, provide an account with the\n",(0,i.kt)("inlineCode",{parentName:"p"},"mediumAccount")," option."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"plugins: [\n  {\n    resolve: 'gatsby-theme-carbon',\n    options: {\n      mediumAccount: 'carbondesign',\n    },\n  },\n];\n")),(0,i.kt)("h2",null,"Other options"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"mdxExtensions")," – change the file extensions processed by ",(0,i.kt)("inlineCode",{parentName:"p"},"gatsby-mdx"),"\n(default ","[‘.mdx’, ‘.md’]",").")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"isSwitcherEnabled")," - pass ",(0,i.kt)("inlineCode",{parentName:"p"},"false")," to remove the Site switcher from the header\nnavigation.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"titleType")," – pick between four formats for the ",(0,i.kt)("inlineCode",{parentName:"p"},"<title>")," element for your\nsite. Here are the four options using this page as an example:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"page"),": “Configuration” (default)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"site"),": “IBM Expert Labs”"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"append"),": “IBM Expert Labs – Configuration”"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"prepend"),": “Configuration - IBM Expert Labs”")))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"plugins: [\n    {\n      resolve: 'gatsby-theme-carbon',\n      options: {\n        mdxExtensions: ['.mdx'],\n        titleType: 'append'\n      },\n    },\n  ],\n")),(0,i.kt)("h2",null,"Additional remark plugins and override existing remark plugin configuration"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"gatsbyRemarkPlugins")," - An array containing gatsby remark plugin\nconfigurations to be added/overridden."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"remarkPlugins")," - An array containing\n",(0,i.kt)("a",{parentName:"li",href:"https://www.gatsbyjs.org/packages/gatsby-plugin-mdx/#remark-plugins"},"remark plugin configurations"),"\nto be added.")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"gatsbyRemarkPlugins")," option is compatible with all gatsby-remark-","*","\nplugins, for example ",(0,i.kt)("inlineCode",{parentName:"p"},"gatsby-remark-mermaid"),". If a gatsby remark plugin does not\nwork, you can try calling the (underlying) remark plugin directly using the\n",(0,i.kt)("inlineCode",{parentName:"p"},"remarkPlugins")," option."),(0,i.kt)("h3",null,"Example ",(0,i.kt)("a",{parentName:"h3",href:"https://www.gatsbyjs.org/packages/gatsby-remark-mermaid/"},"Gatsby Remark Mermaid plugin")),(0,i.kt)("p",null,"For the below markdown snippet:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"```mermaid\ngraph LR\ninstall[Install Plugin]\ninstall --\x3e configure[Configure Plugin]\nconfigure --\x3e draw[Draw Fancy Diagrams]\n```\n")),(0,i.kt)("p",null,"to turn into an image one should add the following configuration to her/his own\nproject:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"}," plugins: [\n    {\n      resolve: 'gatsby-theme-carbon',\n      options: {\n        repository: {\n          baseUrl: 'https://github.com/ibm-iacs/cp4d-managed',\n          subDirectory: '/packages/example',\n          branch: 'main',\n        },\n        gatsbyRemarkPlugins: [\n          {\n            resolve: 'gatsby-remark-mermaid',\n            options: {\n              language: 'mermaid',\n              theme: 'dark',\n              viewport: {\n                width: 200,\n                height: 200,\n              },\n              mermaidOptions: {\n                themeCSS: '.node rect { fill: cornflowerblue; }',\n              },\n            },\n          },\n        ],\n      },\n    },\n  ],\n\n")),(0,i.kt)("h3",null,"Example ",(0,i.kt)("a",{parentName:"h3",href:"https://github.com/zestedesavoir/zmarkdown/tree/master/packages/remark-grid-tables"},"Remark Grid Tables")),(0,i.kt)("p",null,"For the below markdown snippet:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"+-------+----------+------+\n| Table Headings   | Here |\n+-------+----------+------+\n| Sub   | Headings | Too  |\n+=======+==========+======+\n| cell  | column spanning |\n+ spans +----------+------+\n| rows  | normal   | cell |\n+-------+----------+------+\n| multi | cells can be    |\n| line  | *formatted*     |\n|       | **paragraphs**  |\n| cells |                 |\n| too   |                 |\n+-------+-----------------+\n")),(0,i.kt)("p",null,"After installing the ",(0,i.kt)("inlineCode",{parentName:"p"},"remark-grid-tables")," plugin, add it to the ",(0,i.kt)("inlineCode",{parentName:"p"},"remarkPlugins"),"\narray in the theme options."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"}," plugins: [\n    {\n      resolve: 'gatsby-theme-carbon',\n      options: {\n        remarkPlugins: [require(\"remark-grid-tables\")],\n      },\n    },\n  ],\n")))}A.isMDXComponent=!0},4295:function(e,n,t){t.d(n,{Z:function(){return N}});var a=t(7294),i=t(8650),r=t.n(i),o=t(5444),l=t(5426),s=t(3321),p=t(5900),m=t.n(p),d=function(e){var n,t=e.title,i=e.theme,r=e.tabs,o=void 0===r?[]:r;return a.createElement("div",{className:m()("PageHeader-module--page-header--NqfPe",(n={},n["PageHeader-module--with-tabs--vbQ-W"]=o.length,n["PageHeader-module--dark-mode--WCeH8"]="dark"===i,n))},a.createElement("div",{className:"bx--grid"},a.createElement("div",{className:"bx--row"},a.createElement("div",{className:"bx--col-lg-12"},a.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},t)))))},c=function(e){var n=e.relativePagePath,t=e.repository,i=(0,o.useStaticQuery)("1364590287").site.siteMetadata.repository,r=t||i,l=r.baseUrl,s=r.subDirectory,p=l+"/edit/"+r.branch+s+"/src/pages"+n;return l?a.createElement("div",{className:"bx--row EditLink-module--row--BEmSX"},a.createElement("div",{className:"bx--col"},a.createElement("a",{className:"EditLink-module--link--IDrl1",href:p},"Edit this page on GitHub"))):null},g=t(4275),u=t(1721),h=function(e){function n(){return e.apply(this,arguments)||this}return(0,u.Z)(n,e),n.prototype.render=function(){var e=this.props,n=e.title,t=e.tabs,i=e.slug,l=i.split("/").filter(Boolean).slice(-1)[0],s=t.map((function(e){var n,t=r()(e,{lower:!0,strict:!0}),s=t===l,p=new RegExp(l+"/?(#.*)?$"),d=i.replace(p,t);return a.createElement("li",{key:e,className:m()((n={},n["PageTabs-module--selected-item--aBB0K"]=s,n),"PageTabs-module--list-item--024o6")},a.createElement(o.Link,{className:"PageTabs-module--link--Kz-7R",to:""+d},e))}));return a.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},a.createElement("div",{className:"bx--grid"},a.createElement("div",{className:"bx--row"},a.createElement("div",{className:"bx--col-lg-12 bx--col-no-gutter"},a.createElement("nav",{"aria-label":n},a.createElement("ul",{className:"PageTabs-module--list--xLqxG"},s))))))},n}(a.Component),A=h,k=t(2881),b=t(6958),y=t(36),f=function(e){var n=e.date,t=new Date(n);return n?a.createElement(y.X2,{className:"last-modified-date-module--row--XJoYQ"},a.createElement(y.sg,null,a.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",t.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null},N=function(e){var n=e.pageContext,t=e.children,i=e.location,p=e.Title,m=n.frontmatter,u=void 0===m?{}:m,h=n.relativePagePath,y=n.titleType,N=u.tabs,v=u.title,w=u.theme,E=u.description,C=u.keywords,x=u.date,T=(0,b.Z)().interiorTheme,j=(0,o.useStaticQuery)("2456312558").site.pathPrefix,B=j?i.pathname.replace(j,""):i.pathname,P=N?B.split("/").filter(Boolean).slice(-1)[0]||r()(N[0],{lower:!0}):"",Q=w||T;return a.createElement(s.Z,{tabs:N,homepage:!1,theme:Q,pageTitle:v,pageDescription:E,pageKeywords:C,titleType:y},a.createElement(d,{title:p?a.createElement(p,null):v,label:"label",tabs:N,theme:Q}),N&&a.createElement(A,{title:v,slug:B,tabs:N,currentTab:P}),a.createElement(k.Z,{padded:!0},t,a.createElement(c,{relativePagePath:h}),a.createElement(f,{date:x})),a.createElement(g.Z,{pageContext:n,location:i,slug:B,tabs:N,currentTab:P}),a.createElement(l.Z,null))}}}]);
//# sourceMappingURL=component---src-pages-guides-configuration-mdx-a5bbd6ff93bd5007fa25.js.map