import { defineConfig } from 'vitepress'

// https://vitepress.vuejs.org/config/app-configs
export default defineConfig({
    title: 'Crater Invoice - Open Source Documentation',
    description:
        'Crater is an open-source app made in Laravel, VueJS & React Native that helps you track expenses, payments & create professional invoices & estimates',
    head: [
        [
        'link',
        {
            rel: 'apple-touch-icon',
            sizes: '180x180',
            href: '/images/favicons/apple-touch-icon.png',
        },
        ],
        [
        'link',
        {
            rel: 'icon',
            type: 'image/png',
            sizes: '32x32',
            href: '/images/favicons/favicon-32x32.png',
        },
        ],
        [
        'link',
        {
            rel: 'icon',
            type: 'image/png',
            sizes: '16x16',
            href: '/images/favicons/favicon-16x16.png',
        },
        ],
        ['link', { rel: 'manifest', href: '/images/favicons/site.webmanifest' }],
        [
        'link',
        {
            rel: 'mask-icon',
            href: '/images/favicons/safari-pinned-tab.svg',
            color: '#5851d8',
        },
        ],
        ['link', { rel: 'shortcut icon', href: '/images/favicons/favicon.ico' }],
        ['meta', { name: 'msapplication-TileColor', content: '#ffffff' }],
        [
        'meta',
        {
            name: 'msapplication-config',
            content: '/images/favicons/browserconfig.xml',
        },
        ],
        ['meta', { name: 'theme-color', content: '#ffffff' }],
    ],    
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
                    { text: 'Mobile App', link: '/mobile.md' },
                ]
            }            
        ],
    },
})
