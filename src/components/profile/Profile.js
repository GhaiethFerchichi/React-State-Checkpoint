import React from "react";
import PropTypes from "prop-types";
import classes from "./Profile.module.css";

const Profile = props => {
  return (
    <div className={classes.container}>
      <img src={props.imgSrc} alt='avatar' />
      <p className={classes.profession} onClick={props.handleName}>
        {props.profession}
      </p>
      <div className={classes.infoDiv}>
        <label className={classes.title}>{props.fullName}</label>
        <p className={classes.bio}> {props.bio}</p>
      </div>
    </div>
  );
};
Profile.propTypes = {
  fullName: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
  profession: PropTypes.string.isRequired
};
export default Profile;
