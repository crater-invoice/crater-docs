(window.webpackJsonp = window.webpackJsonp || []).push([[27], { 380: function (e, t, a) { "use strict"; a.r(t); var r = a(42), o = Object(r.a)({}, (function () { var e = this, t = e.$createElement, a = e._self._c || t; return a("ContentSlotsDistributor", { attrs: { "slot-key": e.$parent.slotKey } }, [a("h1", { attrs: { id: "installation" } }, [a("a", { staticClass: "header-anchor", attrs: { href: "#installation" } }, [e._v("#")]), e._v(" Installation")]), e._v(" "), a("ul", [a("li", [a("a", { attrs: { href: "#manual-installation" } }, [e._v("Manual Installation")])]), e._v(" "), a("li", [a("a", { attrs: { href: "#docker-installation" } }, [e._v("Docker Installation")])]), e._v(" "), a("li", [a("a", { attrs: { href: "#digital-ocean-docker" } }, [e._v("Digital Ocean (Docker)")])])]), e._v(" "), a("h2", { attrs: { id: "manual-installation" } }, [a("a", { staticClass: "header-anchor", attrs: { href: "#manual-installation" } }, [e._v("#")]), e._v(" Manual Installation")]), e._v(" "), a("h3", { attrs: { id: "requirements" } }, [a("a", { staticClass: "header-anchor", attrs: { href: "#requirements" } }, [e._v("#")]), e._v(" Requirements")]), e._v(" "), a("div", { staticClass: "language- extra-class" }, [a("pre", { pre: !0, attrs: { class: "language-text" } }, [a("code", [e._v("PHP >= 7.4.0\nBCMath PHP Extension\nCtype PHP Extension\nJSON PHP Extension\nMbstring PHP Extension\nOpenSSL PHP Extension\nPDO PHP Extension\nTokenizer PHP Extension\nXML PHP Extension\n")])])]), a("h3", { attrs: { id: "step-1-download" } }, [a("a", { staticClass: "header-anchor", attrs: { href: "#step-1-download" } }, [e._v("#")]), e._v(" Step 1 : Download")]), e._v(" "), a("p", [a("a", { attrs: { href: "http://craterapp.com/downloads", target: "_blank", rel: "noopener noreferrer" } }, [e._v("Download"), a("OutboundLink")], 1), e._v(" the latest Crater package.")]), e._v(" "), a("p", [e._v("Alternatively, If you are a developer, follow the installation steps for your project on "), a("RouterLink", { attrs: { to: "/developer-guide.html" } }, [e._v("this Link")])], 1), e._v(" "), a("h3", { attrs: { id: "step-2-upload-to-server" } }, [a("a", { staticClass: "header-anchor", attrs: { href: "#step-2-upload-to-server" } }, [e._v("#")]), e._v(" Step 2 : Upload to Server")]), e._v(" "), a("p", [e._v("Upload the downloaded zip file to your Server and unzip it, you should see the Crater folder.")]), e._v(" "), a("h3", { attrs: { id: "step-3-point-the-domain-to-the-uploaded-folder" } }, [a("a", { staticClass: "header-anchor", attrs: { href: "#step-3-point-the-domain-to-the-uploaded-folder" } }, [e._v("#")]), e._v(" Step 3 : Point the domain to the uploaded folder")]), e._v(" "), a("p", [e._v("Point your domain or subdomain to the "), a("code", [e._v("public")]), e._v(" directory inside the Crater folder.")]), e._v(" "), a("p", [e._v("Please note that, Crater must be installed on a primary domain or subdomain. Installing on a sub-folder will not work, for example:")]), e._v(" "), a("ul", [a("li", [a("code", [e._v("example.com/craterapp")]), e._v(" (Invalid)")]), e._v(" "), a("li", [a("code", [e._v("localhost/crater")]), e._v(" (Invalid)")]), e._v(" "), a("li", [a("code", [e._v("example.com")]), e._v(" (Valid)")]), e._v(" "), a("li", [a("code", [e._v("crater.example.com")]), e._v(" (Valid)")]), e._v(" "), a("li", [a("code", [e._v("crater.test")]), e._v(" (Valid)")])]), e._v(" "), a("h3", { attrs: { id: "step-3-fix-file-permissions" } }, [a("a", { staticClass: "header-anchor", attrs: { href: "#step-3-fix-file-permissions" } }, [e._v("#")]), e._v(" Step 3: Fix File Permissions")]), e._v(" "), a("p", [e._v("In your crater root folder, run command: "), a("code", [e._v("chmod -R 775 ./")])]), e._v(" "), a("h3", { attrs: { id: "step-4-complete-installation-wizard" } }, [a("a", { staticClass: "header-anchor", attrs: { href: "#step-4-complete-installation-wizard" } }, [e._v("#")]), e._v(" Step 4 : Complete installation wizard")]), e._v(" "), a("p", [e._v("Open the link to the domain in the browser (Example: "), a("code", [e._v("https://demo.craterapp.com")]), e._v(") and complete the installation wizard as directed.")]), e._v(" "), a("h2", { attrs: { id: "docker-installation" } }, [a("a", { staticClass: "header-anchor", attrs: { href: "#docker-installation" } }, [e._v("#")]), e._v(" Docker Installation")]), e._v(" "), a("h3", { attrs: { id: "step-1-install-docker" } }, [a("a", { staticClass: "header-anchor", attrs: { href: "#step-1-install-docker" } }, [e._v("#")]), e._v(" Step 1 : Install Docker")]), e._v(" "), a("p", [e._v("Install Docker on your host: "), a("a", { attrs: { href: "https://docs.docker.com/install/", target: "_blank", rel: "noopener noreferrer" } }, [e._v("https://docs.docker.com/install/"), a("OutboundLink")], 1)]), e._v(" "), a("h3", { attrs: { id: "step-2-install-docker-compose" } }, [a("a", { staticClass: "header-anchor", attrs: { href: "#step-2-install-docker-compose" } }, [e._v("#")]), e._v(" Step 2 : Install Docker Compose")]), e._v(" "), a("p", [e._v("Install docker-compose by using this guide: "), a("a", { attrs: { href: "https://docs.docker.com/compose/install/", target: "_blank", rel: "noopener noreferrer" } }, [e._v("https://docs.docker.com/compose/install/"), a("OutboundLink")], 1)]), e._v(" "), a("h3", { attrs: { id: "step-3-clone-repository" } }, [a("a", { staticClass: "header-anchor", attrs: { href: "#step-3-clone-repository" } }, [e._v("#")]), e._v(" Step 3 : Clone repository")]), e._v(" "), a("p", [e._v("Clone the repository by running this command: "), a("code", [e._v("git clone https://github.com/crater-invoice/crater")])]), e._v(" "), a("h3", { attrs: { id: "step-4-run-below-commands" } }, [a("a", { staticClass: "header-anchor", attrs: { href: "#step-4-run-below-commands" } }, [e._v("#")]), e._v(" Step 4 : Run below commands")]), e._v(" "), a("p", [e._v("Change your current working directory and run your app using below commands:")]), e._v(" "), a("div", { staticClass: "language- extra-class" }, [a("pre", { pre: !0, attrs: { class: "language-text" } }, [a("code", [e._v("$ cd crater\n$ cp .env.example .env\n$ docker-compose up -d\n$ ./docker-compose/setup.sh\n")])])]), a("h3", { attrs: { id: "step-5-complete-installation-wizard" } }, [a("a", { staticClass: "header-anchor", attrs: { href: "#step-5-complete-installation-wizard" } }, [e._v("#")]), e._v(" Step 5 : Complete installation wizard")]), e._v(" "), a("p", [e._v("Open your web browser and go to your given domain (default: "), a("a", { attrs: { href: "http://localhost", target: "_blank", rel: "noopener noreferrer" } }, [e._v("http://localhost"), a("OutboundLink")], 1), e._v(") and follow the installation wizard.")]), e._v(" "), a("p", [e._v("On Installation wizard - Database setup, use below credentials:")]), e._v(" "), a("ul", [a("li", [e._v("Database Host: "), a("code", [e._v("db")])]), e._v(" "), a("li", [e._v("Database Name: "), a("code", [e._v("crater")])]), e._v(" "), a("li", [e._v("Database Username: "), a("code", [e._v("crater")])]), e._v(" "), a("li", [e._v("Database Password: "), a("code", [e._v("crater")])])]), e._v(" "), a("h2", { attrs: { id: "digital-ocean-docker" } }, [a("a", { staticClass: "header-anchor", attrs: { href: "#digital-ocean-docker" } }, [e._v("#")]), e._v(" Digital Ocean (Docker)")]), e._v(" "), a("h3", { attrs: { id: "prerequisites" } }, [a("a", { staticClass: "header-anchor", attrs: { href: "#prerequisites" } }, [e._v("#")]), e._v(" Prerequisites")]), e._v(" "), a("ul", [a("li", [a("p", [e._v("Access to an Ubuntu 18.04 local machine or development server as a non-root user with sudo privileges. If you’re using a remote server, it’s advisable to have an active firewall installed. To set these up, please refer to "), a("a", { attrs: { href: "https://www.digitalocean.com/community/tutorials/initial-server-setup-with-ubuntu-18-04", target: "_blank", rel: "noopener noreferrer" } }, [e._v("Initial Server Setup Guide for Ubuntu 18.04"), a("OutboundLink")], 1), e._v(" on Digital Ocean.")])]), e._v(" "), a("li", [a("p", [e._v("Docker installed on your server, following Steps 1 and 2 of "), a("a", { attrs: { href: "https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-on-ubuntu-18-04", target: "_blank", rel: "noopener noreferrer" } }, [e._v("How To Install and Use Docker on Ubuntu 18.04"), a("OutboundLink")], 1), e._v(".")])]), e._v(" "), a("li", [a("p", [e._v("Docker Compose must installed on your server. You can refer to this Guide: "), a("a", { attrs: { href: "https://www.digitalocean.com/community/tutorials/how-to-install-docker-compose-on-ubuntu-18-04", target: "_blank", rel: "noopener noreferrer" } }, [e._v("How To Install Docker Compose on Ubuntu 18.04"), a("OutboundLink")], 1), e._v(".")])])]), e._v(" "), a("h3", { attrs: { id: "installation-2" } }, [a("a", { staticClass: "header-anchor", attrs: { href: "#installation-2" } }, [e._v("#")]), e._v(" Installation")]), e._v(" "), a("h4", { attrs: { id: "step-1-clone-repository" } }, [a("a", { staticClass: "header-anchor", attrs: { href: "#step-1-clone-repository" } }, [e._v("#")]), e._v(" Step 1 : Clone repository")]), e._v(" "), a("p", [e._v("Clone the repository by running these commands:")]), e._v(" "), a("div", { staticClass: "language- extra-class" }, [a("pre", { pre: !0, attrs: { class: "language-text" } }, [a("code", [e._v("cd ~\ngit clone https://github.com/crater-invoice/crater\n")])])]), a("h4", { attrs: { id: "step-2-setup-docker-containers" } }, [a("a", { staticClass: "header-anchor", attrs: { href: "#step-2-setup-docker-containers" } }, [e._v("#")]), e._v(" Step 2 : Setup docker containers")]), e._v(" "), a("p", [e._v("Change your current working directory and start containers using the given commands below:")]), e._v(" "), a("div", { staticClass: "language- extra-class" }, [a("pre", { pre: !0, attrs: { class: "language-text" } }, [a("code", [e._v("$ cd crater\n$ cp .env.example .env\n$ docker-compose up -d\n")])])]), a("h4", { attrs: { id: "step-3-setup-docker-containers" } }, [a("a", { staticClass: "header-anchor", attrs: { href: "#step-3-setup-docker-containers" } }, [e._v("#")]), e._v(" Step 3 : Setup docker containers")]), e._v(" "), a("p", [e._v("Now wait for a few minutes until the containers are built and started. After that run the below script command to install composer dependencies & generate unique application key:")]), e._v(" "), a("div", { staticClass: "language- extra-class" }, [a("pre", { pre: !0, attrs: { class: "language-text" } }, [a("code", [e._v("$ ./docker-compose/setup.sh\n")])])]), a("h4", { attrs: { id: "step-4-complete-installation-wizard-2" } }, [a("a", { staticClass: "header-anchor", attrs: { href: "#step-4-complete-installation-wizard-2" } }, [e._v("#")]), e._v(" Step 4 : Complete installation wizard")]), e._v(" "), a("p", [e._v("Open your web browser and go to your given domain and follow the installation wizard.")]), e._v(" "), a("p", [e._v("On Installation wizard - Database setup, use below credentials:")]), e._v(" "), a("ul", [a("li", [e._v("Database Host: "), a("code", [e._v("db")])]), e._v(" "), a("li", [e._v("Database Name: "), a("code", [e._v("crater")])]), e._v(" "), a("li", [e._v("Database Username: "), a("code", [e._v("crater")])]), e._v(" "), a("li", [e._v("Database Password: "), a("code", [e._v("crater")])])])]) }), [], !1, null, null, null); t.default = o.exports } }]);