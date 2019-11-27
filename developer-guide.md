# Developer Guide
Development & Contribution guide for Developers looking to customize crater for their own projects or contribute to the development of crater.

## Installation

1. Clone the repository from github <https://github.com/bytefury/crater>.
2. Install NPM globally if you haven't installed that already , for more information please refer this [link](https://docs.npmjs.com/getting-started/installing-node)
3. After installing NPM globally , run `npm install` inside your cloned folder, it will download all the required dependencies.
3. Install composer to your system and run `composer install` inside your cloned folder to install all laravel/php dependencies.
4. Create an `.env` file by running the following command: `cp .env.example .env`. Or alternately you can just copy `.env.example` file to the same folder and re-name it to `.env`.
5. run command: `php artisan key:generate` to generate a unique application key.
4. run command: `php artisan passport:keys` to generate the required passport keys for authentication.
5. Open the link to the domain in the browser (Example: `https://demo.craterapp.com`) and complete the installation wizard as directed.
