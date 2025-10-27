import React from "react";
import Layout from "../componentes/layout";
import { useStaticQuery, graphql, Link } from "gatsby";

export default function BlogPage() {

    const data = useStaticQuery(graphql`
        query {
            allMdx(sort: {frontmatter: {date: DESC}}) {
                nodes {
                    frontmatter {
                        date(formatString: "DD/MM/YYYY")
                        title
                        slug
                    }
                    id
                    excerpt
                }
            }        
        }
    `)
    const posts = data.allMdx.nodes;

    return (
        <Layout>
            <p>Esses são os últimos posts:</p>
                {
                    posts.map(item => (
                        <article key={item.id}>
                            <h2>
                                <Link to={`/${item.frontmatter.slug}`}>
                                    {item.frontmatter.title}
                                </Link>
                            </h2>
                            <p>Data: {item.frontmatter.date}</p>
                            <p>{item.excerpt}</p>
                        </article>
                    ))
                }
        </Layout>
    )
}

export const Head = () => <title>Meu Blog - Posts</title>