const path = require("path")
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query Projects {
      allMarkdownRemark {
        nodes {
          frontmatter {
            slug
          }
        }
      }
    }
  `)
  if (result?.data?.errors) {
    console.log("error building pages")
  }
  console.log(result)
  result?.data?.allMarkdownRemark?.nodes?.forEach(node => {
    actions.createPage({
      path: `/projects/${node.frontmatter.slug}`,
      component: path.resolve('./src/pageTemplate/index.jsx'),
      context:{
        slug: node.frontmatter.slug
      }
    })
  })
}
