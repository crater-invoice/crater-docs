# File Disk

You can now configure where your files get saved directly from the UI.

Crater has 2 types of disks:

- **System Disk**: Default disks created by Crater in order to save your files without any additional configuration. These Disks cannot be edited or deleted from the UI for security purposes.

- **Remote Disk**: You can configure your own disk in order to save the PDF & Backup files to your preferred provider.

Crater supports following remote disk drivers:

- Local: Storage directory where you installed Crater (_/storage/app_)
- Dropbox
- Amazon S3
- Digital Ocean Spaces

## System Disks:

By default, Crater comes with 2 system disks.

- [Local Private](#local-private)
- [Local Public](#local-public)

#### Local Private

This disk is used to save private files which should not be accessible without permissions. Currently it is only used to save Expense Receipts.

The path of Local Private disk is **/storage/app**

#### Local Public

This disk is used to save public files like images which should be accessible from the browser. Crater uses this disk to save Company Logo & User Avatar images.

The path of Local Public disk is **/storage/app/public**
