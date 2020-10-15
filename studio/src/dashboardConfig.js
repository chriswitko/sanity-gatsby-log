export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f87cbadab244d55e4bf4268',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-log-studio',
                  apiId: '1e151faf-c005-42ab-8801-afc9cf88fcc5'
                },
                {
                  buildHookId: '5f87cbadf8a7175bfa6cc885',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-log',
                  apiId: 'f0e70eff-4910-4fd6-bb73-759e32cfdbb5'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/chriswitko/sanity-gatsby-log',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-log.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
