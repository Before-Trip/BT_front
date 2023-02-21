const Countries = () => {
  return (
    <section style="margin-top: 45px; padding: 0 18px">
      <h2 style="font-size: 19px; max-width: 732px; margin: 0 auto; font-weight: 700; ">
        국가 선택
      </h2>
      <div style="max-width: 733px; margin: 0 auto; display: flex; white-space: nowrap; overflow-x: scroll;">
        <div
          class="sc-gSQFLo eYZFXY"
          style="min-width: 240px; max-height: 350px; background-color: white;"
        >
          <a class="sc-jgrJph dYjA-dM" href="/{{ country.country_code }}">
            <img src="{{ country.country_image.url }}" />
          </a>
          <div class="sc-lbhJGD jhNfXV">
            <a class="sc-jgrJph dYjA-dM" href="/{{ country.country_code }}">
              <h4>
                {}
                {}
              </h4>
            </a>
          </div>
          <div class="sc-iNGGcK UXOKy">
            <a class="userinfo" href="/{{ country.country_code }}">
              <img
                src="{{ country.flag_image.url }}"
                alt="user thumbnail of tosspayments"
              />
              <span>
                by
                <b>{}</b>
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Countries;
