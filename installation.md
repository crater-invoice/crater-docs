---
title: Installation
lang: en-US
---

# Installation

## Installation with Docker

> This is only recommended to those who are familiar with Docker setups.
  It's recommended to use a reverse proxy, a Nginx instance is included in
  the example Docker compose file. You should configure the virtual hosts
  by yourself.

1. Install Docker on your host: https://docs.docker.com/install/
2. Install docker-compose: https://docs.docker.com/compose/install/
3. Clone the repository: `git clone https://github.com/bytefury/crater`
4. Go into the repo directory and deploy using example docker-compose setup:
```
$ cd crater
$ mv docker-compose.yaml.example docker-compose.yaml
$ docker-compose up -d
```
5. You can check the logs with `docker-compose logs`
6. Go to your crater domain and follow the installation wizard.
7. For *Database Name*, *Database Username*, and *Database Password*, use `crater`.  
  `db` for *Database Host*.

If you ever want to check the Laravel logs:
```
$ cd $(docker volume inspect --format '{{ .Mountpoint }}' crater_app)/storage/logs
$ ls
$ tail -n200 log_file_name.log
```

## Manual Installation

### Requirements

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

### Step 1 : Download

[Download](http://craterapp.com/downloads) the Crater package.

Alternatively, If you are a developer, follow the installation steps for your project on [this Link](./developer-guide.md)

### Step 2 : Upload to Server

Upload the downloaded zip file to your Server and unzip it, you should see the Crater folder.

### Step 3 : Point the domain to the uploaded folder

Point your domain or subdomain to the `public` directory inside the Crater folder. 

Please note that, Crater must be installed on a primary domain or subdomain. Installing on a sub-folder will not work, for example:
- `example.com/craterapp` (Invalid)
- `localhost/crater` (Invalid)
- `example.com` (Valid)
- `crater.example.com` (Valid)
- `crater.test` (Valid)

### Step 3 : Open the link

Open the link to the domain in the browser (Example: `https://demo.craterapp.com`) and complete the installation wizard as directed.
