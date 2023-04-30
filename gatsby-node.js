const path = require('path')

exports.createPages = async ({graphql, actions}) => {

  const { data } = await graphql(`
  query PageQuery {
    allContentfulPost {
        edges {
        node {
          slug
        }
      }
    }
  }`)

  data.allContentfulPost.edges.forEach(edge => {
    actions.createPage({
      // URL
      path: '/post/'+edge.node.slug, 
      component: path.resolve('./src/templates/single.jsx'),
      context: { slug: edge.node.slug }
    })
  })
}

