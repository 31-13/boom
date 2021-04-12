/* eslint-disable */
import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// react components for routing our app without refresh
import Link from "next/link";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

// @material-ui/icons
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import FavoriteIcon from "@material-ui/icons/Favorite";
import AirplanemodeActiveTwoToneIcon from "@material-ui/icons/AirplanemodeActiveTwoTone";
import PersonIcon from "@material-ui/icons/Person";
import ExploreIcon from "@material-ui/icons/Explore";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";

import AccountBalanceWalletIcon from "@material-ui/icons/AccountBalanceWallet";

import LineStyle from "@material-ui/icons/LineStyle";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/nextjs-material-kit-pro/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const easeInOutQuad = (t, b, c, d) => {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  };

  const smoothScroll = (e, target) => {
    if (window.location.pathname === "/sections") {
      var isMobile = navigator.userAgent.match(
        /(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i
      );
      if (isMobile) {
        // if we are on mobile device the scroll into view will be managed by the browser
      } else {
        e.preventDefault();
        var targetScroll = document.getElementById(target);
        scrollGo(document.documentElement, targetScroll.offsetTop, 1250);
      }
    }
  };
  const scrollGo = (element, to, duration) => {
    var start = element.scrollTop,
      change = to - start,
      currentTime = 0,
      increment = 20;

    var animateScroll = function () {
      currentTime += increment;
      var val = easeInOutQuad(currentTime, start, change, duration);
      element.scrollTop = val;
      if (currentTime < duration) {
        setTimeout(animateScroll, increment);
      }
    };
    animateScroll();
  };
  var onClickSections = {};

  const { dropdownHoverColor } = props;
  const classes = useStyles();
  return (
    <List className={classes.list + " " + classes.mlAuto}>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          navDropdown
          hoverColor={dropdownHoverColor}
          buttonText="Authors"
          buttonProps={{
            className: classes.navLink,
            color: "transparent",
          }}
          buttonIcon={PersonIcon}
          dropdownList={[
            <Link href="/authors/Ricardo-Menotti">
              <a className={classes.dropdownLink}>
                <LineStyle className={classes.dropdownIcons} /> Ricardo Menotti
              </a>
            </Link>,
            <Link href="/authors/Bruno-Mars">
              <a className={classes.dropdownLink}>
                <LocalHospitalIcon className={classes.dropdownIcons} />
                Bruno Mars
              </a>
            </Link>,
            <Link href="/authors/Julio-Iglesias">
              <a className={classes.dropdownLink}>
                <AccountBalanceWalletIcon className={classes.dropdownIcons} />
                Julio Iglesias
              </a>
            </Link>,
            <Link href="/authors/Rachell-Batista">
              <a className={classes.dropdownLink}>
                <ExploreIcon className={classes.dropdownIcons} />
                Rachell Batista
              </a>
            </Link>,
          ]}
        />
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link href="/travel">
          <Button color="transparent" className={classes.navLink}>
            <AirplanemodeActiveTwoToneIcon className={classes.icons} />
            Travel
          </Button>
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link href="/health">
          <Button color="transparent" className={classes.navLink}>
            <FavoriteIcon className={classes.icons} />
            Health
          </Button>
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link href="/wealth">
          <Button color="transparent" className={classes.navLink}>
            <MonetizationOnIcon className={classes.icons} />
            Wealth presentation
          </Button>
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link href="/hobbies">
          <Button color="transparent" className={classes.navLink}>
            <FavoriteIcon className={classes.icons} />
            Hobbies
          </Button>
        </Link>
      </ListItem>
    </List>
  );
}

HeaderLinks.defaultProps = {
  hoverColor: "primary",
};

HeaderLinks.propTypes = {
  dropdownHoverColor: PropTypes.oneOf([
    "dark",
    "primary",
    "info",
    "success",
    "warning",
    "danger",
    "rose",
  ]),
};
