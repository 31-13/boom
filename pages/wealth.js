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
export default function Travel({ ...rest }) {
  const classes = useStyles();
  const classe = useStyle();
  return (
    <div className="cd-section" {...rest}>
      <Header
        brand="Wealth Presentation"
        links={<HeaderLinks dropdownHoverColor="info" />}
        fixed
        color="danger"
        changeColorOnScroll={{
          height: 200,
          color: "white",
        }}
      />
      <div className={classes.blog}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem
              xs={12}
              sm={8}
              md={8}
              className={classes.mlAuto + " " + classes.mrAuto}
            >
              <br />
              <h2 className={classes.title}>Most viewed articles</h2>

              <Card plain blog className={classes.card4}>
                <CardHeader image plain>
                  <a href="#pablito" onClick={(e) => e.preventDefault()}>
                    <img src={bg5} alt="..." />
                  </a>
                  <div
                    className={classes.coloredShadow}
                    style={{ backgroundImage: `url(${bg5})`, opacity: "1" }}
                  />
                </CardHeader>
                <CardBody plain>
                  <Info>
                    <h6 className={classes.cardCategory}>FASHION</h6>
                  </Info>
                  <h3 className={classes.cardTitle}>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      Autodesk looks to future of 3D
                    </a>
                  </h3>
                  <h5 className={classes.description}>
                    Don{"'"}t be scared of the truth because we need to restart
                    the human foundation in truth And I love you like Kanye
                    loves Kanye I love Rick Owens’ bed design but the back is
                    too high for the beams and angle of the ceiling I also
                    wanted to point out that it’s the first album to go number 1
                    off of streaming...
                  </h5>
                  <Button round color="primary">
                    Read More
                  </Button>
                </CardBody>
              </Card>
              <Card plain blog className={classes.card4}>
                <CardHeader image plain>
                  <a href="#pablito" onClick={(e) => e.preventDefault()}>
                    <img src={blog6} alt="..." />
                  </a>
                  <div
                    className={classes.coloredShadow}
                    style={{ backgroundImage: `url(${blog6})`, opacity: "1" }}
                  />
                </CardHeader>
                <CardBody plain>
                  <Success>
                    <h6 className={classes.cardCategory}>LIFESTYLE</h6>
                  </Success>
                  <h3 className={classes.cardTitle}>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      We will breathe clean air and exercise
                    </a>
                  </h3>
                  <h5 className={classes.description}>
                    Don{"'"}t be scared of the truth because we need to restart
                    the human foundation in truth And I love you like Kanye
                    loves Kanye I love Rick Owens’ bed design but the back is
                    too high for the beams and angle of the ceiling I also
                    wanted to point out that it’s the first album to go number 1
                    off of streaming...
                  </h5>
                  <Button round color="primary">
                    Read More
                  </Button>
                </CardBody>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
}
