# Upgrade Guide for 4.0.0

- [Using Auto-Installer](#using-auto-installer)
- [Manual Update](#manual-update)

## Using Auto-Installer

### Step 1 : Take a Backup

Take a backup of your Database & `/storage/app` folder.

### Step 2 : Verify PHP Version

Crater 4.0.0 version only works in PHP version >= 7.4.

Please run `php -v` command to make sure that you're on the minimum supported version before you proceed to next step.

### Step 3: Run Update Commands

Run below commands in given order:

```
composer update laravel/framework

php artisan crater:update
```

Please note that you will need to run `php artisan crater:update` twice in order to update from 3.1.1 to 4.0.0

### Step 4: Add Required Environment Variables

This new update requires some additional Environment variables in your `.env` file in order for cookie based authentication to work.

Update your .env file to include following variables:

```
SESSION_DRIVER=cookie
SESSION_LIFETIME=120

SANCTUM_STATEFUL_DOMAINS=crater.test
SESSION_DOMAIN=crater.test
```

`SANCTUM_STATEFUL_DOMAINS` & `SESSION_DOMAIN` variables should have domain on which you'll be accessing the application.

The above domain variables should not contain `http://` or `https://` in front of the URL.

#### INCORRECT ❌

```
SANCTUM_STATEFUL_DOMAINS=https://demo.craterapp.com
SESSION_DOMAIN=https://demo.craterapp.com
```

#### CORRECT ✅

```
SANCTUM_STATEFUL_DOMAINS=demo.craterapp.com
SESSION_DOMAIN=demo.craterapp.com
```

Also if you've installed Crater on a different port, then `SANCTUM_STATEFUL_DOMAINS` should contain the port while `SESSION_DOMAIN` should not.

#### INCORRECT ❌

```
SANCTUM_STATEFUL_DOMAINS=localhost:8080
SESSION_DOMAIN=localhost:8080
```

#### CORRECT ✅

```
SANCTUM_STATEFUL_DOMAINS=localhost:8080
SESSION_DOMAIN=localhost
```

## Manual Update

The preferred method to update is [Using Auto-Installer](#using-auto-installer) but in case your application stops working after running the auto-installer or if the installation fails for some reason, you can follow the below steps carefully to update your app to `4.0.0`

### Step 1 : Take a Backup

Take a backup of your Database, `.env` file & `/storage/app` folder.

### Step 2 : Verify PHP Version

Crater 4.0.0 version only works in PHP version >= 7.4.

Please run `php -v` command to make sure that you're on the minimum supported version before you proceed to next step.

### Step 3: Copy & Overwrite files

Download the latest crater zip from https://craterapp.com/downloads & copy + overwrite all the existing files & folders with the new ones except your `.env` file & `storage` folder.

--

Optionally, you can also delete the whole crater folder and use the new folder from the zip file. After that's done, copy over your old `.env` & `/storage/app` folder.

### Step 4: Add Required Environment Variables

This new update requires some additional Environment variables in your `.env` file in order for cookie based authentication to work.

Update your .env file to include following variables:

```
SESSION_DRIVER=cookie
SESSION_LIFETIME=120

SANCTUM_STATEFUL_DOMAINS=crater.test
SESSION_DOMAIN=crater.test
```

`SANCTUM_STATEFUL_DOMAINS` & `SESSION_DOMAIN` variables should have domain on which you'll be accessing the application.

The above domain variables should not contain `http://` or `https://` in front of the URL.

#### INCORRECT ❌

```
SANCTUM_STATEFUL_DOMAINS=https://demo.craterapp.com
SESSION_DOMAIN=https://demo.craterapp.com
```

#### CORRECT ✅

```
SANCTUM_STATEFUL_DOMAINS=demo.craterapp.com
SESSION_DOMAIN=demo.craterapp.com
```

Also if you've installed Crater on a different port, then `SANCTUM_STATEFUL_DOMAINS` should contain the port while `SESSION_DOMAIN` should not.

#### INCORRECT ❌

```
SANCTUM_STATEFUL_DOMAINS=localhost:8080
SESSION_DOMAIN=localhost:8080
```

#### CORRECT ✅

```
SANCTUM_STATEFUL_DOMAINS=localhost:8080
SESSION_DOMAIN=localhost
```

### Step 4: Run Commands

```
php artisan migrate
```
