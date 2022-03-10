"use strict";(self.webpackChunkexample=self.webpackChunkexample||[]).push([[8870],{7335:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return r},default:function(){return u}});var l=a(3366),n=(a(7294),a(4983)),i=a(4295),o=["components"],r={},s={_frontmatter:r},c=i.Z;function u(e){var t=e.components,a=(0,l.Z)(e,o);return(0,n.kt)(c,Object.assign({},s,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"— This page is updating in progress —"),(0,n.kt)("p",null,"Step 1: Set up GitHub"),(0,n.kt)("p",null,"Creating a GitHub account:"),(0,n.kt)("p",null,"—> Go to ",(0,n.kt)("a",{parentName:"p",href:"http://github.com/"},"http://github.com/")," > click “Sign up”."),(0,n.kt)("p",null,"—> Enter your email id and click “continue”."),(0,n.kt)("p",null,"—> Create a username and password > verify the account."),(0,n.kt)("p",null,"—> Enter the code from your email."),(0,n.kt)("p",null,"—> Sign into GitHub with username and password."),(0,n.kt)("p",null,"—> After Sign in, the below GitHub page will appear and go to top right corner > Click the profile > settings."),(0,n.kt)("p",null,"—> Click the Emails > add organization’s email id ."),(0,n.kt)("p",null,"—> Set up organization’s email id as a primary email id > click “save”."),(0,n.kt)("p",null,"—> Verify the email address."),(0,n.kt)("p",null,"—> Select/Tick the preferences as shown below."),(0,n.kt)("p",null,"—> Getting/giving permission to access the organization’s repository."),(0,n.kt)("p",null,"—> After getting the permission to access the repository, you will get the email to accept the invitation. Click “View invitation” to accept."),(0,n.kt)("p",null,"—> After accepting the invitation, you can collaborate and access the respective repository."),(0,n.kt)("p",null,"Step 2: Set up Atom"),(0,n.kt)("p",null,"—> Go to atom.io and download atom text editor\nNote: Setting up an atom text editor is optional, we can work with any text editor."),(0,n.kt)("p",null,"—> Click “Open installer” > install a package “platformio-ide-terminal” to set up the environment."),(0,n.kt)("p",null,"—> Copy the command - /bin/bash -c ”$(curl -fsSL ",(0,n.kt)("a",{parentName:"p",href:"https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)%22"},"https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)”")," to install homebrew and run it on a terminal."),(0,n.kt)("p",null,"Generating the GitHub Token to authorize atom:"),(0,n.kt)("p",null,"—> Click “Login”"),(0,n.kt)("p",null,"—> Click the below mentioned link to generate GitHub token."),(0,n.kt)("p",null,"—> The above link will redirect to the below page > Click “Authorize atom”."),(0,n.kt)("p",null,"—> The GitHub token will be generated > Copy token."),(0,n.kt)("p",null,"—> Enter the token and click on Login."),(0,n.kt)("p",null,"Adding a folder:"),(0,n.kt)("p",null,"—> Download ZIP file from GitHub repository."),(0,n.kt)("p",null,"—> Create a new folder to paste the repository files to add this folder in atom."),(0,n.kt)("p",null,"—> Go to atom > Click “Add folders” > Select the respective folder path."),(0,n.kt)("p",null,"—> The folders will be added as per below screenshot."),(0,n.kt)("p",null,"Step 3: Cloning the repository"),(0,n.kt)("p",null,"—> Click “Clone an existing GitHub repository”."),(0,n.kt)("p",null,"—> Copy the URL from GitHub repository and paste it in “Clone from” > Click on “Clone”."),(0,n.kt)("p",null,"—> If you are getting error while cloning the repository, do the steps from command line under GitHub directory."),(0,n.kt)("p",null,"—> Go to terminal > select the directory path to clone > run the command – “git clone - url of github repo”."),(0,n.kt)("p",null,"—> Go to atom > Click “create repository “> Click on “init”."))}u.isMDXComponent=!0},4295:function(e,t,a){a.d(t,{Z:function(){return y}});var l=a(7294),n=a(8650),i=a.n(n),o=a(5444),r=a(5426),s=a(3321),c=a(5900),u=a.n(c),p=function(e){var t,a=e.title,n=e.theme,i=e.tabs,o=void 0===i?[]:i;return l.createElement("div",{className:u()("PageHeader-module--page-header--NqfPe",(t={},t["PageHeader-module--with-tabs--vbQ-W"]=o.length,t["PageHeader-module--dark-mode--WCeH8"]="dark"===n,t))},l.createElement("div",{className:"bx--grid"},l.createElement("div",{className:"bx--row"},l.createElement("div",{className:"bx--col-lg-12"},l.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},a)))))},m=function(e){var t=e.relativePagePath,a=e.repository,n=(0,o.useStaticQuery)("1364590287").site.siteMetadata.repository,i=a||n,r=i.baseUrl,s=i.subDirectory,c=r+"/edit/"+i.branch+s+"/src/pages"+t;return r?l.createElement("div",{className:"bx--row EditLink-module--row--BEmSX"},l.createElement("div",{className:"bx--col"},l.createElement("a",{className:"EditLink-module--link--IDrl1",href:c},"Edit this page on GitHub"))):null},d=a(4275),h=a(1721),g=function(e){function t(){return e.apply(this,arguments)||this}return(0,h.Z)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,n=e.slug,r=n.split("/").filter(Boolean).slice(-1)[0],s=a.map((function(e){var t,a=i()(e,{lower:!0,strict:!0}),s=a===r,c=new RegExp(r+"/?(#.*)?$"),p=n.replace(c,a);return l.createElement("li",{key:e,className:u()((t={},t["PageTabs-module--selected-item--aBB0K"]=s,t),"PageTabs-module--list-item--024o6")},l.createElement(o.Link,{className:"PageTabs-module--link--Kz-7R",to:""+p},e))}));return l.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},l.createElement("div",{className:"bx--grid"},l.createElement("div",{className:"bx--row"},l.createElement("div",{className:"bx--col-lg-12 bx--col-no-gutter"},l.createElement("nav",{"aria-label":t},l.createElement("ul",{className:"PageTabs-module--list--xLqxG"},s))))))},t}(l.Component),k=g,b=a(2881),f=a(6958),w=a(36),E=function(e){var t=e.date,a=new Date(t);return t?l.createElement(w.X2,{className:"last-modified-date-module--row--XJoYQ"},l.createElement(w.sg,null,l.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null},y=function(e){var t=e.pageContext,a=e.children,n=e.location,c=e.Title,u=t.frontmatter,h=void 0===u?{}:u,g=t.relativePagePath,w=t.titleType,y=h.tabs,v=h.title,C=h.theme,x=h.description,G=h.keywords,H=h.date,N=(0,f.Z)().interiorTheme,P=(0,o.useStaticQuery)("2456312558").site.pathPrefix,T=P?n.pathname.replace(P,""):n.pathname,S=y?T.split("/").filter(Boolean).slice(-1)[0]||i()(y[0],{lower:!0}):"",D=C||N;return l.createElement(s.Z,{tabs:y,homepage:!1,theme:D,pageTitle:v,pageDescription:x,pageKeywords:G,titleType:w},l.createElement(p,{title:c?l.createElement(c,null):v,label:"label",tabs:y,theme:D}),y&&l.createElement(k,{title:v,slug:T,tabs:y,currentTab:S}),l.createElement(b.Z,{padded:!0},a,l.createElement(m,{relativePagePath:g}),l.createElement(E,{date:H})),l.createElement(d.Z,{pageContext:t,location:n,slug:T,tabs:y,currentTab:S}),l.createElement(r.Z,null))}}}]);
//# sourceMappingURL=component---src-pages-contribute-to-this-documentation-index-mdx-975837fdcb6a93aceb69.js.map