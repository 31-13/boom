/* eslint-disable */
import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// react components for routing our app without refresh
import Link from "next/link";
// nodejs library that concatenates classes
import classNames from "classnames";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// core components
import Info from "components/Typography/Info.js";
import Danger from "components/Typography/Danger.js";
import Success from "components/Typography/Success.js";

import cardBlog4 from "assets/img/examples/card-blog4.jpg";
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import NavPills from "components/NavPills/NavPills.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import Badge from "components/Badge/Badge.js";
import Muted from "components/Typography/Muted.js";
import Parallax from "components/Parallax/Parallax.js";
import Clearfix from "components/Clearfix/Clearfix.js";
import Button from "components/CustomButtons/Button.js";
import headersStyle from "assets/jss/nextjs-material-kit-pro/pages/sectionsSections/headersStyle.js";
// react component for creating beautiful carousel
import Carousel from "react-slick";
import bg12 from "assets/img/bg12.jpg";
import office2 from "assets/img/examples/office2.jpg";
import dg1 from "assets/img/dg1.jpg";
import dg2 from "assets/img/dg2.jpg";
import dg3 from "assets/img/corner.jpg";
// @material-ui/icons
import Share from "@material-ui/icons/Share";
import ShoppingCart from "@material-ui/icons/ShoppingCart";
import TrendingUp from "@material-ui/icons/TrendingUp";
import blogsStyle from "assets/jss/nextjs-material-kit-pro/pages/sectionsSections/blogsStyle.js";

const useStyles = makeStyles(headersStyle);
const useStyle = makeStyles(blogsStyle);
const uses = makeStyles({
  title: {
    color: "#fff",
    fontFamily: `"Roboto Slab", "Times New Roman", serif`,
  },
});

export default function Index(props, { ...rest }) {
  const classes = useStyles();
  const classe = useStyle();
  const typo = uses();
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
  };

  return (
    <div>
      <Header
        color="transparent"
        brand="Boomers Corner"
        links={<HeaderLinks dropdownHoverColor="info" />}
        fixed
        changeColorOnScroll={{
          height: 200,
          color: "white",
        }}
        {...rest}
      />
      <Carousel {...settings}>
        {/* Carousel 1 START */}
        <div>
          <div
            className={classes.pageHeader}
            style={{ backgroundImage: `url("${dg1}")` }}
          >
            <div className={classes.container}>
              <GridContainer>
                <GridItem xs={12} sm={6} md={6}>
                  <h1 className={classes.title}>Boomers Corner</h1>
                  <h4>
                    Dolce & Gabbana is a luxury Italian fashion house founded in
                    1985 in Legnano by Italian designers Domenico Dolce and
                    Stefano Gabbana. The two met in Milan in 1980 and designed
                    for the same fashion house.
                  </h4>
                  <br />
                  <Link href="/blog-posts">
                    <Button color="danger" size="lg">
                      Articles
                    </Button>
                  </Link>
                </GridItem>
              </GridContainer>
            </div>
          </div>
        </div>
        {/* Carousel 1 END */}
        {/* Carousel 2 START */}
        <div>
          <div
            className={classes.pageHeader}
            style={{ backgroundImage: `url("${dg2}")` }}
          >
            <div className={classes.container}>
              <GridContainer>
                <GridItem
                  xs={12}
                  sm={8}
                  md={8}
                  className={classNames(
                    classes.mlAuto,
                    classes.mrAuto,
                    classes.textCenter
                  )}
                >
                  <h1 className={classes.title}>Connect With us</h1>
                  <h4>
                    Dolce & Gabbana is a luxury Italian fashion house founded in
                    1985 in Legnano by Italian designers Domenico Dolce and
                    Stefano Gabbana. The two met in Milan in 1980 and designed
                    for the same fashion house.
                  </h4>
                  <br />
                  <h6>on:</h6>
                  <div>
                    <Button
                      href="https://twitter.com/"
                      target="_blank"
                      color="white"
                      simple
                      size="lg"
                      justIcon
                    >
                      <i className="fab fa-twitter" />
                    </Button>

                    <Button
                      href="https://facebook.com/"
                      target="_blank"
                      color="white"
                      simple
                      size="lg"
                      justIcon
                    >
                      <i className="fab fa-facebook-square" />
                    </Button>

                    <Button
                      target="_blank"
                      href="https://gmail.com/"
                      color="white"
                      simple
                      size="lg"
                      justIcon
                    >
                      <i className="fab fa-google-plus-g" />
                    </Button>

                    <Button
                      href="https://instagram.com/"
                      color="white"
                      target="_blank"
                      simple
                      size="lg"
                      justIcon
                    >
                      <i className="fab fa-instagram" />
                    </Button>
                  </div>
                </GridItem>
              </GridContainer>
            </div>
          </div>
        </div>
        {/* Carousel 2 END */}
        {/* Carousel 3 START */}
        <div>
          <div
            className={classes.pageHeader}
            style={{ backgroundImage: `url("${dg3}")` }}
          >
            <div className={classes.container}>
              <div>
                <div className={classe.blog}>
                  <div className={classes.container}>
                    <GridContainer>
                      <GridItem
                        xs={12}
                        sm={10}
                        md={10}
                        className={classe.mlAuto + " " + classes.mrAuto}
                      >
                        <br />
                        <h1 className={classes.title}>Latest Blogposts</h1>

                        <Card plain blog className={classe.card}>
                          <GridContainer>
                            <GridItem xs={12} sm={5} md={5}>
                              <CardHeader image plain>
                                <a
                                  href="#pablito"
                                  onClick={(e) => e.preventDefault()}
                                >
                                  <img src={cardBlog4} alt="..." />
                                </a>
                                <div
                                  className={classe.coloredShadow}
                                  style={{
                                    backgroundImage: `url(${cardBlog4})`,
                                    opacity: "1",
                                  }}
                                />
                              </CardHeader>
                            </GridItem>
                            <GridItem xs={12} sm={7} md={7}>
                              <Info>
                                <h6 className={classe.cardCategory}>
                                  ENTERPRISE
                                </h6>
                              </Info>
                              <h2 className={typo.title}>
                                <a
                                  className={typo.title}
                                  href="#pablo"
                                  onClick={(e) => e.preventDefault()}
                                >
                                  Autodesk looks to future of 3D printing with
                                  Project Escher
                                </a>
                              </h2>
                              <p className={typo.title}>
                                Like so many organizations these days, Autodesk
                                is a company in transition. It was until
                                recently a traditional boxed software company
                                selling licenses. Today, it’s moving to a
                                subscription model. Yet its own business model
                                disruption is only part of the story — and…
                                <a
                                  href="#pablo"
                                  onClick={(e) => e.preventDefault()}
                                >
                                  {" "}
                                  Read More{" "}
                                </a>
                              </p>
                              <p className={classe.author}>
                                by{" "}
                                <a href="/" onClick={(e) => e.preventDefault()}>
                                  <b>Ricardo Menotti</b>
                                </a>{" "}
                                , 2 days ago
                              </p>
                            </GridItem>
                          </GridContainer>
                        </Card>
                        <Card plain blog className={classe.card}>
                          <GridContainer>
                            <GridItem xs={12} sm={7} md={7}>
                              <Danger>
                                <h6 className={classe.cardCategory}>
                                  <TrendingUp />
                                  TRENDING
                                </h6>
                              </Danger>
                              <h3 className={typo.title}>
                                <a
                                  className={typo.title}
                                  href="/"
                                  onClick={(e) => e.preventDefault()}
                                >
                                  6 insights into the French Fashion landscape
                                </a>
                              </h3>
                              <p className={typo.title}>
                                Like so many organizations these days, Autodesk
                                is a company in transition. It was until
                                recently a traditional boxed software company
                                selling licenses. Today, it’s moving to a
                                subscription model. Yet its own business model
                                disruption is only part of the story — and…
                                <a href="/" onClick={(e) => e.preventDefault()}>
                                  {" "}
                                  Read More{" "}
                                </a>
                              </p>
                              <p className={classe.author}>
                                by{" "}
                                <a href="/" onClick={(e) => e.preventDefault()}>
                                  <b>Julio Iglesias</b>
                                </a>{" "}
                                , 2 days ago
                              </p>
                            </GridItem>
                            <GridItem xs={12} sm={5} md={5}>
                              <CardHeader image plain>
                                <a
                                  href="#pablito"
                                  onClick={(e) => e.preventDefault()}
                                >
                                  <img src={office2} alt="..." />
                                </a>
                                <div
                                  className={classes.coloredShadow}
                                  style={{
                                    backgroundImage: `url(${office2})`,
                                    opacity: "1",
                                  }}
                                />
                              </CardHeader>
                            </GridItem>
                          </GridContainer>
                        </Card>
                      </GridItem>
                    </GridContainer>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Carousel 3 END */}
      </Carousel>
    </div>
  );
}
