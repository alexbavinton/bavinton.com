import { graphql, useStaticQuery } from 'gatsby';

const useBackgroundImage = () => {
  return useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "backgroundHero.png" }) {
        sharp: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);
};

export default useBackgroundImage;
