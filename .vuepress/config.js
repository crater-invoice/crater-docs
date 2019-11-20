module.exports = {
    description: 'Crater is an open-source app made in Laravel, VueJS & React Native that helps you track expenses, payments & create professional invoices & estimates',
    head: [
      ['link', { rel: "apple-touch-icon", sizes: "180x180", href: "/images/favicons/apple-touch-icon.png"}],
      ['link', { rel: "icon", type: "image/png", sizes: "32x32", href: "/images/favicons/favicon-32x32.png"}],
      ['link', { rel: "icon", type: "image/png", sizes: "16x16", href: "/images/favicons/favicon-16x16.png"}],
      ['link', { rel: "manifest", href: "/images/favicons/site.webmanifest"}],
      ['link', { rel: "mask-icon", href: "/images/favicons/safari-pinned-tab.svg", color: "#5851d8"}],
      ['link', { rel: "shortcut icon", href: "/images/favicons/favicon.ico"}],
      ['meta', { name: "msapplication-TileColor", content: "#ffffff"}],
      ['meta', { name: "msapplication-config", content: "/images/favicons/browserconfig.xml"}],
      ['meta', { name: "theme-color", content: "#ffffff"}],
    ],
    themeConfig: {
        logo: '/images/crater-logo.png',
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Github', link: 'https://github.com/bytefury/crater' },
            { text: 'Website', link: 'https://craterapp.com' },
            {
                text: 'Languages',
                items: [
                  { text: 'English', link: '/language/chinese/' },
                  { text: 'Spanish', link: '/language/japanese/' }
                ]
            }
        ],
        sidebar: [
            '/',
            '/installation.md',
            {
                title: 'User Guide',
                collapsable: false,
                children: [
                  '/guide/dashboard.md',
                  '/guide/customers.md',
                  '/guide/items.md',
                  '/guide/estimates.md',
                  '/guide/invoices.md',
                  '/guide/payments.md',
                  '/guide/expenses.md',
                  '/guide/taxes.md',
                  '/guide/reports.md',
                  '/guide/settings.md',
                ]
            },
            '/mobile.md',
            '/api-documentation.md',
            '/developer-guide.md',
        ]
    },
    plugins: [
        // you can use this plugin multiple times
        [
          'vuepress-plugin-container',
          {
            type: 'wrapper',
            defaultTitle: '',
          },
        ]
    ],
    dest: './dist'
}