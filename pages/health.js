import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import TrendingUp from "@material-ui/icons/TrendingUp";
// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import Info from "components/Typography/Info.js";
import Danger from "components/Typography/Danger.js";
import Success from "components/Typography/Success.js";
import Button from "components/CustomButtons/Button.js";
import Parallax from "components/Parallax/Parallax.js";

import blogsStyle from "assets/jss/nextjs-material-kit-pro/pages/sectionsSections/blogsStyle.js";

import cardBlog4 from "assets/img/examples/card-blog4.jpg";
import office2 from "assets/img/office2.jpg";
import blog5 from "assets/img/examples/blog5.jpg";
import blog6 from "assets/img/examples/blog6.jpg";
import blog7 from "assets/img/examples/blog7.jpg";
import blog8 from "assets/img/examples/blog8.jpg";
import bg5 from "assets/img/bg5.jpg";

const useStyles = makeStyles(blogsStyle);
const useStyle = makeStyles({
  title: {
    color: "#fff",
    fontFamily: `"Roboto Slab", "Times New Roman", serif`,
  },
});
export default function Health({ ...rest }) {
  const classes = useStyles();
  const classe = useStyle();
  return (
    <div className="cd-section" {...rest}>
      <Header
        brand="Travel"
        links={<HeaderLinks dropdownHoverColor="info" />}
        fixed
        color="rose"
        changeColorOnScroll={{
          height: 400,
          color: "white",
        }}
      />
      <div className={classes.blog}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem
              xs={12}
              sm={10}
              md={10}
              className={classes.mlAuto + " " + classes.mrAuto}
            >
              <h2 className={classes.title}>Latest Articles </h2>
              <br />
              <Card plain blog className={classes.card}>
                <GridContainer>
                  <GridItem xs={12} sm={4} md={4}>
                    <CardHeader image plain>
                      <a href="#pablito" onClick={(e) => e.preventDefault()}>
                        <img src={cardBlog4} alt="..." />
                      </a>
                      <div
                        className={classes.coloredShadow}
                        style={{
                          backgroundImage: `url(${cardBlog4})`,
                          opacity: "1",
                        }}
                      />
                      <div
                        className={classes.coloredShadow}
                        style={{
                          backgroundImage: `url(${cardBlog4})`,
                          opacity: "1",
                        }}
                      />
                    </CardHeader>
                  </GridItem>
                  <GridItem xs={12} sm={8} md={8}>
                    <Info>
                      <h6 className={classes.cardCategory}>ENTERPRISE</h6>
                    </Info>
                    <h3 className={classes.cardTitle}>
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        Autodesk looks to future of 3D printing with Project
                        Escher
                      </a>
                    </h3>
                    <p className={classes.description}>
                      Like so many organizations these days, Autodesk is a
                      company in transition. It was until recently a traditional
                      boxed software company selling licenses. Today, it’s
                      moving to a subscription model. Yet its own business model
                      disruption is only part of the story — and…
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        {" "}
                        Read More{" "}
                      </a>
                    </p>
                    <p className={classes.author}>
                      by{" "}
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        <b>Mike Butcher</b>
                      </a>{" "}
                      , 2 days ago
                    </p>
                  </GridItem>
                </GridContainer>
              </Card>
              <Card plain blog className={classes.card}>
                <GridContainer>
                  <GridItem xs={12} sm={4} md={4}>
                    <CardHeader image plain>
                      <a href="#pablito" onClick={(e) => e.preventDefault()}>
                        <img src={office2} alt="..." />
                      </a>
                      <div
                        className={classes.coloredShadow}
                        style={{
                          backgroundImage: `url(${office2})`,
                          opacity: "1",
                        }}
                      />
                      <div
                        className={classes.coloredShadow}
                        style={{
                          backgroundImage: `url(${office2})`,
                          opacity: "1",
                        }}
                      />
                    </CardHeader>
                  </GridItem>
                  <GridItem xs={12} sm={8} md={8}>
                    <Danger>
                      <h6 className={classes.cardCategory}>
                        <TrendingUp />
                        TRENDING
                      </h6>
                    </Danger>
                    <h3 className={classes.cardTitle}>
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        6 insights into the French Fashion landscape
                      </a>
                    </h3>
                    <p className={classes.description}>
                      Like so many organizations these days, Autodesk is a
                      company in transition. It was until recently a traditional
                      boxed software company selling licenses. Today, it’s
                      moving to a subscription model. Yet its own business model
                      disruption is only part of the story — and…
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        {" "}
                        Read More{" "}
                      </a>
                    </p>
                    <p className={classes.author}>
                      by{" "}
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        <b>Mike Butcher</b>
                      </a>{" "}
                      , 2 days ago
                    </p>
                  </GridItem>
                </GridContainer>
              </Card>
              <Card plain blog className={classes.card}>
                <GridContainer>
                  <GridItem xs={12} sm={4} md={4}>
                    <CardHeader image plain>
                      <a href="#pablito" onClick={(e) => e.preventDefault()}>
                        <img src={blog8} alt="..." />
                      </a>
                      <div
                        className={classes.coloredShadow}
                        style={{
                          backgroundImage: `url(${blog8})`,
                          opacity: "1",
                        }}
                      />
                      <div
                        className={classes.coloredShadow}
                        style={{
                          backgroundImage: `url(${blog8})`,
                          opacity: "1",
                        }}
                      />
                    </CardHeader>
                  </GridItem>
                  <GridItem xs={12} sm={8} md={8}>
                    <Success>
                      <h6 className={classes.cardCategory}>STARTUPS</h6>
                    </Success>
                    <h3 className={classes.cardTitle}>
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        Lyft launching cross-platform service this week
                      </a>
                    </h3>
                    <p className={classes.description}>
                      Like so many organizations these days, Autodesk is a
                      company in transition. It was until recently a traditional
                      boxed software company selling licenses. Today, it’s
                      moving to a subscription model. Yet its own business model
                      disruption is only part of the story — and…
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        {" "}
                        Read More{" "}
                      </a>
                    </p>
                    <p className={classes.author}>
                      by{" "}
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        <b>Megan Rose</b>
                      </a>{" "}
                      , 2 days ago
                    </p>
                  </GridItem>
                </GridContainer>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
}
