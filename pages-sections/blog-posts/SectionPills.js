import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";
import Link from "next/link";
// @material-ui/icons
import FormatAlignLeft from "@material-ui/icons/FormatAlignLeft";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import NavPills from "components/NavPills/NavPills.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import Button from "components/CustomButtons/Button.js";

import office2 from "assets/img/examples/office2.jpg";
import blog8 from "assets/img/examples/blog8.jpg";
import cardProject6 from "assets/img/beach.jpg";

import sectionPillsStyle from "assets/jss/nextjs-material-kit-pro/pages/blogPostsSections/sectionPillsStyle.js";

const useStyles = makeStyles(sectionPillsStyle);

export default function SectionPills() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8} className={classes.textCenter}>
          <NavPills
            alignCenter
            tabs={[
              {
                tabButton: "All",
                tabContent: (
                  <GridContainer>
                    <GridItem xs={12} sm={6} md={6}>
                      <Card
                        background
                        style={{ backgroundImage: "url(" + office2 + ")" }}
                      >
                        <CardBody background>
                          <h6 className={classes.category}>Health</h6>
                          <Link href="blog-post">
                            <a>
                              <h3 className={classes.cardTitle}>
                                Don't sleep more than 9 hours
                              </h3>
                            </a>
                          </Link>
                          <p className={classes.category}>
                            Too much sleep on a regular basis can increase the
                            risk of diabetes, heart disease, stroke, and death
                            according to several studies done over the years.
                            Too much is defined as greater than nine hours. The
                            most common cause is not getting enough sleep the
                            night before, or cumulatively....
                          </p>
                          <Link href="blog-post">
                            <Button round color="danger">
                              <FormatAlignLeft className={classes.icons} /> Read
                              article
                            </Button>
                          </Link>
                        </CardBody>
                      </Card>
                    </GridItem>
                    <GridItem xs={12} sm={6} md={6}>
                      <Card
                        background
                        style={{ backgroundImage: "url(" + blog8 + ")" }}
                      >
                        <CardBody background>
                          <h6 className={classes.category}>Hobbies</h6>
                          <Link href="blog-post">
                            <a>
                              <h3 className={classes.cardTitle}>
                                Reading books helps you more than you could
                                imagine
                              </h3>
                            </a>
                          </Link>
                          <p className={classes.category}>
                            When was the last time you read a book, or a
                            substantial magazine article? Do your daily reading
                            habits center around tweets, Facebook updates, or
                            the directions on your instant oatmeal packet?...
                          </p>
                          <Link href="blog-post">
                            <Button round color="primary">
                              <FormatAlignLeft className={classes.icons} /> Read
                              article
                            </Button>
                          </Link>
                        </CardBody>
                      </Card>
                    </GridItem>
                    <GridItem xs={12} sm={12} md={12}>
                      <Card
                        background
                        style={{ backgroundImage: "url(" + cardProject6 + ")" }}
                      >
                        <CardBody background>
                          <h6 className={classes.category}>Travel</h6>
                          <Link href="blog-post">
                            <a>
                              <h3 className={classes.cardTitle}>
                                Peaceful places to retire
                              </h3>
                            </a>
                          </Link>
                          <p className={classes.category}>
                            Don't overlook the big benefits of retiring to a
                            small town. On top of the peace and quiet you'd
                            expect, smaller places to live can also offer
                            tight-knit communities, active senior groups and
                            lower crime rates. Plus, many small towns come with
                            relatively low living costs compared with big-city
                            neighbors....
                          </p>
                          <Link href="blog-post">
                            <Button round color="warning">
                              <FormatAlignLeft className={classes.icons} /> Read
                              Article
                            </Button>
                          </Link>
                        </CardBody>
                      </Card>
                    </GridItem>
                  </GridContainer>
                ),
              },
              {
                tabButton: "Health",
                tabContent: (
                  <GridContainer>
                    <GridItem xs={12} sm={6} md={6}>
                      <Card
                        background
                        style={{ backgroundImage: "url(" + office2 + ")" }}
                      >
                        <CardBody background>
                          <h6 className={classes.category}>Health</h6>
                          <Link href="blog-post">
                            <a>
                              <h3 className={classes.cardTitle}>
                                Don't sleep more than 9 hours
                              </h3>
                            </a>
                          </Link>
                          <p className={classes.category}>
                            Too much sleep on a regular basis can increase the
                            risk of diabetes, heart disease, stroke, and death
                            according to several studies done over the years.
                            Too much is defined as greater than nine hours. The
                            most common cause is not getting enough sleep the
                            night before, or cumulatively....
                          </p>
                          <Link href="blog-post">
                            <Button round href="#pablo" color="danger">
                              <FormatAlignLeft className={classes.icons} /> Read
                              article
                            </Button>
                          </Link>
                        </CardBody>
                      </Card>
                    </GridItem>
                  </GridContainer>
                ),
              },
              {
                tabButton: "Travel",
                tabContent: (
                  <GridContainer>
                    <GridItem xs={12} sm={12} md={12}>
                      <Card
                        background
                        style={{ backgroundImage: "url(" + cardProject6 + ")" }}
                      >
                        <CardBody background>
                          <h6 className={classes.category}>Travel</h6>
                          <Link href="blog-post">
                            <a>
                              <h3 className={classes.cardTitle}>
                                Peaceful places to retire
                              </h3>
                            </a>
                          </Link>
                          <p className={classes.category}>
                            Don't overlook the big benefits of retiring to a
                            small town. On top of the peace and quiet you'd
                            expect, smaller places to live can also offer
                            tight-knit communities, active senior groups and
                            lower crime rates. Plus, many small towns come with
                            relatively low living costs compared with big-city
                            neighbors....
                          </p>
                          <Link href="blog-post">
                            <Button round href="#pablo" color="warning">
                              <FormatAlignLeft className={classes.icons} /> Read
                              Article
                            </Button>
                          </Link>
                        </CardBody>
                      </Card>
                    </GridItem>
                  </GridContainer>
                ),
              },
              {
                tabButton: "Wealth Presentation",
                tabContent: "",
              },
              {
                tabButton: "Hobbies",
                tabContent: (
                  <GridContainer>
                    <GridItem xs={12} sm={6} md={6}>
                      <Card
                        background
                        style={{ backgroundImage: "url(" + blog8 + ")" }}
                      >
                        <CardBody background>
                          <h6 className={classes.category}>Hobbies</h6>
                          <Link href="blog-post">
                            <a>
                              <h3 className={classes.cardTitle}>
                                Reading books helps you more than you could
                                imagine
                              </h3>
                            </a>
                          </Link>
                          <p className={classes.category}>
                            When was the last time you read a book, or a
                            substantial magazine article? Do your daily reading
                            habits center around tweets, Facebook updates, or
                            the directions on your instant oatmeal packet?...
                          </p>
                          <Link href="blog-post">
                            <Button round color="primary">
                              <FormatAlignLeft className={classes.icons} /> Read
                              article
                            </Button>
                          </Link>
                        </CardBody>
                      </Card>
                    </GridItem>
                  </GridContainer>
                ),
              },
            ]}
          />
          <div className={classes.tabSpace} />
        </GridItem>
      </GridContainer>
    </div>
  );
}
