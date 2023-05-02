# Developer Guide

Development & Contribution guide for Developers looking to customize crater for their own projects or contribute to the development of crater.

## Installation

1. Clone the repository from github <https://github.com/crater-invoice/crater>.
2. Install Yarn globally if you haven't installed that already , for more information please refer this [link](https://classic.yarnpkg.com/en/docs/install)
3. After installing Yarn globally , run `yarn` command inside your cloned folder, it will download all the required dependencies.
4. Run `yarn dev` to generate the public files (do `yarn build` if you wish to use it on production).
5. Install composer to your system and run `composer install` inside your cloned folder to install all laravel/php dependencies.
6. Create an `.env` file by running the following command: `cp .env.example .env`. Or alternately you can just copy `.env.example` file to the same folder and re-name it to `.env`.
7. run command: `php artisan key:generate` to generate a unique application key.
8. Open the link to the domain in the browser (Example: `https://demo.craterapp.com`) and complete the installation wizard as directed.
