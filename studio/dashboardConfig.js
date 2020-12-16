export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '5fda65be9fa2c5008e8345f0',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-4xomk5qi',
                  apiId: '8e98e9a9-08a8-4dbc-a97f-3259408f94a1'
                },
                {
                  buildHookId: '5fda65bf11e2c800d7d3ace6',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-pym8pbno',
                  apiId: 'f0a6f64a-7c84-4293-ac88-6a34006e7e71'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/digthedill/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-pym8pbno.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
