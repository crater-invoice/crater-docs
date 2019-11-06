---
title: Installation
lang: en-US
---

# Installation


## Server Requirements:

Crater has the same requirements that Laravel does but we have mentioned them below anyway for your reference.

```
PHP >= 7.1.3
OpenSSL PHP Extension
PDO PHP Extension
Mbstring PHP Extension
Tokenizer PHP Extension
XML PHP Extension
```

## OPTIONAL REQUIREMENTS:

    Composer
    NPM / YARN

## Suggested Dev Environments:

    Mac: MAMP/MAMP Pro/ Laravel Valet (Recommended)
    Windows: WAMP / Laragon (Recommended & Easier to setup)
    Laravel Homestead

## Installation
1. Clone or Download the Crater repository from: **http://github.com/crater/crater**
2. Unzip the downloaded folder.
3. Using your preferred terminal , go to the Crater folder and run the following command to set a random secure Application Key php artisan key:generate
4. Open .env file in your favorite text editor and set the database credentials.
5. Open **database/seeds/UsersTableSeeder.php** and change the admin's email & password to your preference.
6. **php artisan migrate --seed** run this command to migrate & seed the database. ( Make sure that you're inside the app's root directory )
7. Install NPM globally if you haven't installed that already , for more information please refer this link
8. After installing NPM globally , run **npm install** inside your webroot , it will download all the required dependencies.
9. Crater makes use of Laravel Elixir for compiling sass files and js files (browserify). You can use Crater without installing npm dependencies but it is recommended for developers to use the suggested workflow for the best performance.
10. You are ready to launch!