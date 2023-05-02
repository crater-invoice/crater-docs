import { defineConfig } from 'vitepress'

// https://vitepress.vuejs.org/config/app-configs
export default defineConfig({
    title: 'Crater Invoice - Open Source Documentation',
    description:
    'Crater is an open-source app made in Laravel, VueJS & React Native that helps you track expenses, payments & create professional invoices & estimates',
    themeConfig: {
        siteTitle: false,
        logo: '/images/crater-logo.png',
        nav: [
            { text: 'Home', link: '/' },
            { text: 'API Docs', link: 'http://api-docs.craterapp.com/' },
            { text: 'Github', link: 'https://github.com/crater-invoice/crater' },
            { text: 'Website', link: 'https://craterapp.com' },
        ],
        sidebar: [
        {
            text: 'Guide',
            items: [
                { text: 'Introduction', link: '/#features' },
                { text: 'Installation', link: '/installation.md' },
                { text: 'Dashboard', link: '/guide/dashboard.md' },
                { text: 'Customers', link: '/guide/customers.md' },
                { text: 'Items', link: '/guide/items.md' },
                { text: 'Estimates', link: '/guide/estimates.md' },
                { text: 'Invoices', link: '/guide/invoices.md' },
                { text: 'Recurring Invoices', link: '/guide/recurring-invoices.md' },
                { text: 'Payments', link: '/guide/payments.md' },
                { text: 'Expenses', link: '/guide/expenses.md' },
                { text: 'Taxes', link: '/guide/taxes.md' },
                { text: 'Custom Fields', link: '/guide/custom-fields.md' },
                { text: 'Custom Templates', link: '/guide/custom-templates.md' },
                { text: 'File Disk', link: '/guide/file-disk.md' },
                { text: 'Backups', link: '/guide/backups.md' },
                { text: 'Customization', link: '/guide/customization.md' },
                { text: 'Reports', link: '/guide/reports.md' },
                { text: 'Settings', link: '/guide/settings.md' },
            ]
        },
        {
            text: 'Other',
            items: [
                { text: 'Developer Guide', link: '/developer-guide.md' },
                { text: 'Upgrade Guide', link: '/upgrade-guide.md' },
                // { text: 'Mobile App', link: '/upgrade-guide.md' },
            ]
        }            
            // '/',
            // '/installation.md',
            // '/upgrade-guide.md',
            // {
            //     title: 'User Guide',
            //     collapsable: false,
            //     children: [
            //     '/guide/dashboard.md',
            //     '/guide/customers.md',
            //     '/guide/items.md',
            //     '/guide/estimates.md',
            //     '/guide/invoices.md',
            //     '/guide/recurring-invoices.md',
            //     '/guide/payments.md',
            //     '/guide/expenses.md',
            //     '/guide/taxes.md',
            //     '/guide/custom-fields.md',
            //     '/guide/custom-templates.md',
            //     '/guide/file-disk.md',
            //     '/guide/backups.md',
            //     '/guide/customization.md',
            //     '/guide/reports.md',
            //     '/guide/settings.md',
            //     ],
            // },
            // '/mobile.md',
            // '/developer-guide.md',
        ],
    },
    outDir: '../dist',
})
