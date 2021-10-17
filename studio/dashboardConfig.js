export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '616c9c207f9d4fc71ddef410',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-a6tfeoeb',
                  apiId: '321db85f-73d1-49d6-959f-287ba38ae45b'
                },
                {
                  buildHookId: '616c9c21a4aa9e8128c7ede2',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-6x9a1rvw',
                  apiId: 'dba49f42-af40-4c72-a648-da15e3c0247d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Ksushana/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-6x9a1rvw.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
