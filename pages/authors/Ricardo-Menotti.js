/*eslint-disable*/
import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// @material-ui/icons
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks";
import Camera from "@material-ui/icons/Camera";
import Palette from "@material-ui/icons/Palette";
import People from "@material-ui/icons/People";
import Add from "@material-ui/icons/Add";
import Favorite from "@material-ui/icons/Favorite";
// core components
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

import christian from "assets/img/faces/christian.jpg";
import oluEletu from "assets/img/examples/olu-eletu.jpg";
import clemOnojeghuo from "assets/img/examples/clem-onojeghuo.jpg";
import cynthiaDelRio from "assets/img/examples/cynthia-del-rio.jpg";
import mariyaGeorgieva from "assets/img/examples/mariya-georgieva.jpg";
import clemOnojegaw from "assets/img/examples/clem-onojegaw.jpg";
import darrenColeshill from "assets/img/examples/darren-coleshill.jpg";
import avatar from "assets/img/faces/avatar.jpg";
import marc from "assets/img/faces/marc.jpg";
import kendall from "assets/img/faces/kendall.jpg";
import cardProfile2Square from "assets/img/faces/card-profile2-square.jpg";

import profilePageStyle from "assets/jss/nextjs-material-kit-pro/pages/profilePageStyle.js";

const useStyles = makeStyles(profilePageStyle);

export default function ProfilePage({ ...rest }) {
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
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
      <Parallax
        image={require("assets/img/examples/city.jpg")}
        filter="dark"
        className={classes.parallax}
      />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={6}>
              <div className={classes.profile}>
                <div>
                  <img src={christian} alt="..." className={imageClasses} />
                </div>
                <div className={classes.name}>
                  <h3 className={classes.title}>Ricardo Menotti</h3>
                  <h6>DESIGNER</h6>
                </div>
              </div>
            </GridItem>
          </GridContainer>
          <div className={classNames(classes.description, classes.textCenter)}>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
          <div className={classes.profileTabs}>
            <NavPills
              alignCenter
              color="primary"
              tabs={[
                {
                  tabButton: "Articles",
                  tabIcon: LibraryBooksIcon,
                  tabContent: (
                    <GridContainer>
                      <GridItem
                        xs={12}
                        sm={12}
                        md={7}
                        className={classes.gridItem}
                      >
                        <h4 className={classes.title}>Latest Articles</h4>
                        <GridContainer className={classes.collections}>
                          <GridItem xs={12} sm={12} md={6}>
                            <Card
                              background
                              style={{
                                backgroundImage: "url(" + mariyaGeorgieva + ")",
                              }}
                            >
                              <CardBody background className={classes.cardBody}>
                                <Badge
                                  color="warning"
                                  className={classes.badge}
                                >
                                  Spring 2016
                                </Badge>
                                <a href="#pablo">
                                  <h2 className={classes.cardTitleWhite}>
                                    Stilleto
                                  </h2>
                                </a>
                              </CardBody>
                            </Card>
                          </GridItem>
                          <GridItem xs={12} sm={12} md={6}>
                            <Card
                              background
                              style={{
                                backgroundImage: "url(" + clemOnojeghuo + ")",
                              }}
                            >
                              <CardBody background className={classes.cardBody}>
                                <Badge color="info" className={classes.badge}>
                                  Spring 2016
                                </Badge>
                                <a href="#pablo">
                                  <h2 className={classes.cardTitleWhite}>
                                    High Heels
                                  </h2>
                                </a>
                              </CardBody>
                            </Card>
                          </GridItem>
                          <GridItem xs={12} sm={12} md={6}>
                            <Card
                              background
                              style={{
                                backgroundImage: "url(" + oluEletu + ")",
                              }}
                            >
                              <CardBody background className={classes.cardBody}>
                                <Badge color="danger" className={classes.badge}>
                                  Summer 2016
                                </Badge>
                                <a href="#pablo">
                                  <h2 className={classes.cardTitleWhite}>
                                    Flats
                                  </h2>
                                </a>
                              </CardBody>
                            </Card>
                          </GridItem>
                          <GridItem xs={12} sm={12} md={6}>
                            <Card
                              background
                              style={{
                                backgroundImage: "url(" + darrenColeshill + ")",
                              }}
                            >
                              <CardBody background className={classes.cardBody}>
                                <Badge
                                  color="success"
                                  className={classes.badge}
                                >
                                  Winter 2016
                                </Badge>
                                <a href="#pablo">
                                  <h2 className={classes.cardTitleWhite}>
                                    Men{"'"}s Sneakers
                                  </h2>
                                </a>
                              </CardBody>
                            </Card>
                          </GridItem>
                        </GridContainer>
                      </GridItem>
                      <GridItem
                        xs={12}
                        sm={12}
                        md={2}
                        className={classes.gridItem}
                      >
                        <h4 className={classes.title}>Stats</h4>
                        <ul className={classes.listUnstyled}>
                          <li>
                            <b>4</b> Articles
                          </li>
                          <li>
                            <b>2</b> Collections
                          </li>

                          <li>
                            <b>1.2K</b> Likes
                          </li>
                        </ul>
                        <hr />
                        <h4 className={classes.title}>About this work</h4>
                        <p className={classes.description}>
                          French luxury footwear and fashion. The footwear has
                          incorporated shiny, red-lacquered soles that have
                          become his signature.
                        </p>
                        <hr />
                        <h4 className={classes.title}>Focus</h4>
                        <Badge color="primary">Health</Badge>
                        <Badge color="rose">Medicine</Badge>
                      </GridItem>
                    </GridContainer>
                  ),
                },
              ]}
            />
          </div>
          <Clearfix />
        </div>
      </div>
    </div>
  );
}
