/*eslint-disable*/
import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";
// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Parallax from "components/Parallax/Parallax.js";
// sections for this page
import SectionPills from "pages-sections/blog-posts/SectionPills.js";
import SectionInterested from "pages-sections/blog-posts/SectionInterested.js";
import SectionImage from "pages-sections/blog-posts/SectionImage.js";
import SubscribeLine from "pages-sections/blog-posts/SubscribeLine.js";

import blogPostsPageStyle from "assets/jss/nextjs-material-kit-pro/pages/blogPostsPageStyle.js";

const useStyles = makeStyles(blogPostsPageStyle);

export default function BlogPostsPage() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });
  const classes = useStyles();
  return (
    <div>
      <Header
        brand="Boomers Corner"
        links={<HeaderLinks dropdownHoverColor="info" />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 400,
          color: "info",
        }}
      />
      <Parallax image={require("assets/img/bg10.jpg")} filter="dark" small>
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={8} className={classes.textCenter}>
              <h2 className={classes.title}>
                A Place for Boomers to Share and Discover New Stories
              </h2>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classes.main}>
        <div className={classes.container}>
          <SectionPills />
        </div>
        <SubscribeLine />
      </div>
    </div>
  );
}
