import style from "./Community.module.css";
import { useRef, useEffect } from "react";

const Community = () => {
  return (
    <div className="Community">
      {/* 공지사항 */}
      <section className={style.notion_wrapper}>
        <h2>공지사항</h2>
        <div className={style.notion_list_wrapper}>
          <ul className={style.notion_list}>
            <h3>등업신청</h3>
          </ul>
        </div>
      </section>

      {/* 베스트 리뷰 */}
      <section className={style.best_wrapper}>
        <h2>베스트리뷰</h2>
        <div className={style.best_wrapper_card}>
          <div className={style.best_card}>
            <a className={style.best_link}></a>
            <div class="sc-lbhJGD jhNfXV">
              <a
                class="sc-jgrJph dYjA-dM"
                href="{% url 'communities:detail' country_code review.pk %}"
              >
                <h4>title</h4>
                <div class="description-wrapper">content</div>
              </a>
              <div class="sub-info">
                <span>created_at</span>
                <span class="separator">·</span>
                <span>articlecomment_set.count</span>
              </div>
            </div>
            <div class="sc-iNGGcK UXOKy">
              <a
                class="userinfo"
                href="{% url 'accounts:detail' review.user.pk %}"
              >
                <img
                  src="{{ review.user.profile_image.url }}"
                  alt="user thumbnail of tosspayments"
                />
                <span>
                  by
                  <b>review.user.nick_name</b>
                </span>
              </a>
              <div class="likes">
                <svg width="24" height="24" viewbox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M18 1l-6 4-6-4-6 5v7l12 10 12-10v-7z"
                  ></path>
                </svg>
                review.like_users.count
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Community;
