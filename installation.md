---
title: Installation
lang: en-US
---

# Installation


## Server Requirements:

Crater has the same requirements that Laravel does but we have mentioned them below anyway for your reference.

```
PHP >= 7.2.0
BCMath PHP Extension
Ctype PHP Extension
JSON PHP Extension
Mbstring PHP Extension
OpenSSL PHP Extension
PDO PHP Extension
Tokenizer PHP Extension
XML PHP Extension
```

## Installation Steps

### Step 1 : Download

[Download](http://craterapp.com/downloads) the Crater package.

Alternatively, If you are a developer. Follow the installation steps for your project on [this Link](./developer-guide.md)

### Step 2 : Upload to Server

Upload the downloaded zip file to your Server and Unzip it, you should see the Crater folder.

### Step 3 : Point the domain to the folder

Point your domain or subdomain to the `public` directory inside the Crater folder. 

Please note that, Crater must be installed on a primary domain or subdomain. Installing on a sub-folder will not work, for example:
- [ ] `example.com/craterapp` (Invalid)
- [ ] `localhost/crater` (Invalid)
- [x] `example.com` (Valid)
- [x] `crater.example.com` (Valid)
- [x] `crater.test` (Valid)

### Step 3 : Open the link

Open the link to the domain in the browser (Example: `https://demo.craterapp.com`) and complete the installation wizard as directed.
