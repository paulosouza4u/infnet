import React from "react";
import { graphql } from "gatsby";
import Layout from "../componentes/layout";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

export default function BlogPost({data, children}) {

    return (
        <Layout>
            <h2>{data.mdx.frontmatter.title}</h2>
            <p>Data: {data.mdx.frontmatter.date}</p>
            <GatsbyImage image={getImage(data.mdx.frontmatter.hero_image)} alt={data.mdx.frontmatter.hero_image_alt} />
            {children}
        </Layout>
    )
}

export const query = graphql`
    query($id: String) {
        mdx(id: {eq: $id}) {
            frontmatter {
                title
                date(formatString: "DD/MM/YYYY")
                hero_image_alt
                hero_image_credit_link
                hero_image_credit_text
                hero_image {
                    childImageSharp {
                        gatsbyImageData(
                            width: 600
                            placeholder: BLURRED
                            formats: [AUTO, WEBP, AVIF]
                        )
                    }
                }
            }
        }
    }
`