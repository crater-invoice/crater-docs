# Developer Guide
##### Updated for Crater v6.0.2
Development & Contribution guide for Developers looking to customize crater for their own projects or contribute to the development of crater.

##### Table of Contents
1. [*nix/macOS](#-*nix/macOS)
   - TODO
2. [Windows](#-Windows)
   - [PHP](#-PHP)
   - [Composer](#-Composer)
   - [Node and npm](#-Node-and-npm)
   - [Yarn](#-Yarn)
   - [Crater](#-Crater)
   - [Troubleshooting](#-Troubleshooting)

### *nix/macOS
TODO

### Windows
#### PHP
##### Tested with Windows Standalone v7.4.27 VC15 x64 Thread Safe
1. Make sure PHP is installed.
   - Check out the [PHP Docs](https://www.php.net/manual/en/install.php).

   ##### Windows Standalone
   1. Download PHP for Windows from [here](https://windows.php.net/download) and unzip it somewhere like `C:\php`
      - Optionally, somewhere like `C:\php7` if other versions are installed.
   2. Make sure the PHP directory is in the system `PATH` environment variable, via either:
      - PowerShell (Run as Administrator)
        ```
        [Environment]::SetEnvironmentVariable("Path", $env:Path + ";C:\php", "Machine")
        ```
      - The System Properties tool, found at `C:\Windows\System32\SystemPropertiesAdvanced.exe` or through the Control Panel.
        1. From the `Advanced` tab click the `Environment Variables...` button to open the Environment Variables window.
        2. Under the `System variables` section, select the `Path` variable and click `Edit...`.
        3. Add the PHP directory to the list if it is missing.
   3. Note that `php.ini` does not yet exist in the `\php` directory, but it will get created in the [Composer](#-Composer) step.

   ##### Apache
   TODO

   ##### Nginx
   TODO

#### Composer
##### Tested with Composer v2.2.6
1. Make sure Composer is installed.
   - Check out the [Composer Docs](https://getcomposer.org/doc/00-intro.md#installation-windows).
2. Make sure the required PHP extensions are enabled in `php.ini`.
   - Find (`CTRL + F`) and remove the `;` preceding `fileinfo`, `exif`, and an applicable db extension pair:
     ```
     extension=fileinfo
     extension=exif

     extension=mysqli           # MySQL
     extension=pdo_mysql        # MySQL
     extension=sqlite3          # SQLite
     extension=pdo_sqlite       # SQLite
     extension=pgsql            # PostgreSQL
     extension=pdo_pgsql        # PostgreSQL
     ```

#### Node and npm
##### Tested with Node v16.2.0 and npm v8.4.1
1. Make sure Node and npm are both installed.
   - Check out the [npm Docs](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm).

#### Yarn
##### Tested with Yarn v1.22.17
1. Make sure Yarn is installed.
   - Check out the [Yarn Docs](https://classic.yarnpkg.com/en/docs/install).

#### Crater
##### Tested with Crater v6.0.2
1. Clone the Crater [repository](https://github.com/crater-invoice/crater), then navigate into the cloned directory.
   ```
   git clone https://github.com/crater-invoice/crater
   cd crater
   ```
   - All commands from this point onward are executed from within the `~\crater` directory.
   - Optionally, switch to a specific release with a version tag.
     ```
     git checkout tags/6.0.2
     ```
3. Fetch Laravel and PHP dependencies for the app.
   ```
   composer install
   ```
4. Fetch other package dependencies for the app with Yarn, then generate the public files.
   ```
   yarn
   yarn dev
   ```
   - Optionally, for production, replace `dev` with `build`.

5. Create a `.env` file manually, or copy from `.env.example` or `.env.testing`.
6. Make any necessary changes to `.env`. Below is a config suitable for testing with SQLite.
   ```
   APP_KEY=                             # Generated in next step
   APP_URL=http://crater.test
   DB_CONNECTION=sqlite                 # Corresponds with php.ini db extension pair
   SANCTUM_STATEFUL_DOMAINS=crater.test
   SESSION_DOMAIN=crater.test
   ```
   - Proper environment variable docs do not yet exist, but a [search of the Crater repo](https://github.com/crater-invoice/crater/search?q=env) finds many.
7. Reset the app and auto-generate the database.
   ```
   php artisan reset:app
   ```
8. Generate a unique application key, automatically saved in `.env`.
   ```
   php artisan key:generate
   ```

9. Launch the app and pass the hostname set in `.env`.
   ```
   php artisan serve --host crater.test
   ```
10. Navigate to the URL indicated in the console. Default user is `admin@craterapp.com` with password `crater@123`.

#### Troubleshooting
- If the URL does not resolve, try adding an entry in `C:\Windows\System32\drivers\etc\hosts`.
  ```
  127.0.0.1 crater.test
  ```
- If other web services run on localhost, it may be necessary to define a port on this line of `.env`:
  ```
  SANCTUM_STATEFUL_DOMAINS=crater.test:8000
  ```