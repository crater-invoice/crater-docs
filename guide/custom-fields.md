# Custom Fields

As the name suggests, you can add your own fields to Customer, Invoice, Estimate, Payment & Expenses. This allows you to customise the application according to your requirements.

For example: You can add Tax ID field to customer & set it as a required field. Once you've added the Tax ID custom field, It will always ask for a Tax ID when you create a new customer.

You can also display this custom field according to your preference on any of the PDFs or in outgoing email notifications by editing the format on Customization tab in settings page.

## Add New Custom Field

You can manage your custom fields from Setting -> Custom Fields page.

#### Custom Field Options:

- **Name**: To identify the field.
- **Model**: Specify whether the field should be added to Customer, Invoice, Estimate, Payment or Expense.
- **Required**: Set whether the field is required or optional.
- **Type**: Crater supports 10 types of custom fields (Text, Textarea, Phone, URL, Number, Select Field, Switch Toggle, Date, Time & Date + Time).
- **Label**: Label of the input field.
- **Order** (Optional): Specify a lower value if you would like a field to appear first on the form.

::: wrapper
![Custom Field Create](/images/custom-field.png)
:::

## How to use Custom Fields?

Custom fields can be used on all the PDFs & outgoing emails using [Customization Settings](./customization.md).
