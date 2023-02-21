import CountryItem from "../../components/CounterItem/CountryItem";
import { countryList } from "../../util/countyList";
import style from './Countries.module.css'
import { useRef, useEffect } from "react";

const Countries = () => {
  const wrapperRef = useRef();

  // 가로 스크롤 함수
  useEffect(() => {
    if (wrapperRef.current) {
      const onWheel = e => {
        if (e.deltaY === 0) return;
        e.preventDefault();
        wrapperRef.current.scrollTo({
          left: wrapperRef.current.scrollLeft + e.deltaY,
          behavior: "smooth"
        })
      }
      wrapperRef.current.addEventListener('wheel', onWheel)
    }
  }, [])


  return (
    <section className="Countries">
      <h2>✈&nbsp;국가를 선택하세요.</h2>
      <div className={style.card_wrapper} ref={wrapperRef}>
        {countryList.map((country) =>
          <CountryItem country={country} />)}
      </div>
    </section >
  );
};

export default Countries;
