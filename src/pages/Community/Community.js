import style from "./Community.module.css";
import { useRef, useEffect } from "react";

const Community = () => {
  return (
    <div className="Community">
      {/* 베스트 리뷰 */}
      <section className={style.best_wrapper}>
        <h2>베스트리뷰</h2>
        <div className={style.best_wrapper_card}>
          <div className={style.best_card}>
            <a className={style.best_link}></a>
            <div className={style.best_detail}>
              <a className={style.best_link} href="">
                <h4>title</h4>
                <div class="description-wrapper">content</div>
              </a>
              <div class="sub-info">
                <span>created_at</span>
                {/* separator 모르겠어요 */}
                <span class="separator">·</span>
                <span>articlecomment_set.count</span>
              </div>
            </div>
            <div className={style.best_user}>
              <a class="userinfo" href="">
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

        <div className={style.best_wrapper_card}>
          <div className={style.best_card}>
            <a className={style.best_link}></a>
            <div className={style.best_detail}>
              <a className={style.best_link} href="">
                <h4>title</h4>
                <div class="description-wrapper">content</div>
              </a>
              <div class="sub-info">
                <span>created_at</span>
                {/* separator 모르겠어요 */}
                <span class="separator">·</span>
                <span>articlecomment_set.count</span>
              </div>
            </div>
            <div className={style.best_user}>
              <a class="userinfo" href="">
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

      {/* 리뷰글들 */}
      <section className={style.review_wrapper}>
        <div className={style.review_list_title}>
          <h2>리뷰목록</h2>
          <div className={style.create_wrapper}>
            <a href="" className={style.review_button_link}>
              <div class="m-create">후기작성</div>
            </a>
            <a href="" className={style.review_button_link}>
              <div class="m-create">꿀팁작성</div>
            </a>
          </div>
        </div>
        <div className={style.review_list}>
          <ul>
            <div className={style.review_row}>
              <div class="row">
                {/*  col-8 */}
                <div className={style.review_detail_block}>
                  <a href="">
                    <p className={style.review_title}>review.title</p>
                  </a>
                  {/* <!-- 닉네임|작성일 --> */}
                  <p className={style.review_date}>
                    review.user.nick_name | review.created_at
                  </p>
                  <div class="like-wrapper">
                    {/* <!-- 좋아요 --> */}
                    <div className={style.like}>
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
                {/* col-4 */}
                <div className={style.review_list}>
                  <div>
                    <img
                      class="review-img"
                      src="{{ review.image.url }}"
                      alt=""
                    ></img>
                  </div>
                </div>
              </div>
            </div>
          </ul>
        </div>

        <div className={style.review_list}>
          <ul>
            <div className={style.review_row}>
              <div class="row">
                {/*  col-8 */}
                <div className={style.review_detail_block}>
                  <a href="">
                    <p className={style.review_title}>review.title</p>
                  </a>
                  {/* <!-- 닉네임|작성일 --> */}
                  <p className={style.review_date}>
                    review.user.nick_name | review.created_at
                  </p>
                  <div class="like-wrapper">
                    {/* <!-- 좋아요 --> */}
                    <div className={style.like}>
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
                {/* col-4 */}
                <div className={style.review_list}>
                  <div>
                    <img
                      class="review-img"
                      src="{{ review.image.url }}"
                      alt=""
                    ></img>
                  </div>
                </div>
              </div>
            </div>
          </ul>
        </div>

        <div className={style.review_list}>
          <ul>
            <div className={style.review_row}>
              <div class="row">
                {/*  col-8 */}
                <div className={style.review_detail_block}>
                  <a href="">
                    <p className={style.review_title}>review.title</p>
                  </a>
                  {/* <!-- 닉네임|작성일 --> */}
                  <p className={style.review_date}>
                    review.user.nick_name | review.created_at
                  </p>
                  <div class="like-wrapper">
                    {/* <!-- 좋아요 --> */}
                    <div className={style.like}>
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
                {/* col-4 */}
                <div className={style.review_list}>
                  <div>
                    <img
                      class="review-img"
                      src="{{ review.image.url }}"
                      alt=""
                    ></img>
                  </div>
                </div>
              </div>
            </div>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Community;
