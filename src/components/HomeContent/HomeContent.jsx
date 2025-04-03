import React from "react";
import {
  DataImg,
  H1,
  H2,
  Section,
  SocialList,
  TitleWrap,
} from "./HomeContent.styled";
// import { RentalLink } from "components/CarModal/CarModal.styled";
import { Link } from "react-router-dom";

const HomeContent = () => {
  return (
    <main>
      <TitleWrap>
        <DataImg>
          <div style={{ maxWidth: "900px" }}>
            <H1>Find your perfect rental car</H1>
            <p
              style={{
                fontSize: "22px",
                fontWeight: "400",
                color: "#fff",
                marginBottom: "40px",
              }}
            >
              Reliable and budget-friendly rentals for any journey
            </p>
            <Link to="/catalog" type="button">
              View Catalog
            </Link>
          </div>
        </DataImg>
      </TitleWrap>
    </main>
  );
};

export default HomeContent;
