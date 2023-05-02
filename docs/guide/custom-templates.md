# Custom Templates

From [Version-4.2.0](https://craterapp.com/downloads/4.2.0) onwards, we added File Based Custom Templates which allow you to create your own templates for Invoices & Estimates according to your requirements.

## Create Templates

To create a new template, you can create a new blade file on the path `resources/views/app/pdf/invoice` (for Invoices) and `resources/views/app/pdf/estimate` (For Estimates).

You can also use the `php artisan make:template your-template-name` command to quickly create a template. If you're using docker setup use command: `docker-compose exec app php artisan make:template your-template-name`.

This command duplicates the `invoice1` template which ships with Crater by default.

Any `.blade.php` file added to the above given PDF Directory will automatically appear on your Choose a Template dialog.

![Custom Templates](/images/custom-templates.png)
