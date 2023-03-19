import style from "./Community.module.css";
import { useRef, useEffect, useState } from "react";
import { BASE_URL } from "../../utils/const";
import Best from "../../components/Community/Best";
import ReviewList from "../../components/Community/ReviewList";

const Community = () => {


  return (
    <div className="Community">
      <div style={{ height: '60vh' }}></div>
      <div className="inner">
        <div className={style.contents}>
          <Best />
          <ReviewList />
        </div>
      </div>
    </div>
  );
};

export default Community;
