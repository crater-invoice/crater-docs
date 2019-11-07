module.exports = {
    description: 'Crater is an open-source app made in Laravel, VueJS & React Native that helps you track expenses, payments & create professional invoices & estimates',
    themeConfig: {
        logo: '/images/crater-logo.png',
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Github', link: 'https://github.com/bytefuryco/crater' },
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
                  '/guide/settings.md',
                ]
            },
            '/documentation.md',
            '/mobile.md',
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
}