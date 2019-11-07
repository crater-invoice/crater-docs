# Invoices

The Invoices page displays all the created invoices. You can create new invoices by selecting an existing customer or adding a new one from the invoice create page itself.

An invoice can be created using one of the three pre-designed templates. You can add additional taxes to the invoice and also add it as a compound tax. Also, you can give a discount to your customer by percentage or fixed value.

Note that crater supports per-item discounts as well as discounts on the total invoice value. You can change the setting from Settings -> Preferences page.


## Invoice Lifecycle

Below are the different statuses of an invoice:

- **Draft:** Invoice has been created but hasn't been sent to the customer.
- **Sent:** Invoice has been sent to the customer.
- **Viewed:** Invoice has been viewed by the customer.
- **Overdue:** Invoice has passed the `due_date` set by you.
- **Completed:** Invoice has been fully paid and marked as completed.