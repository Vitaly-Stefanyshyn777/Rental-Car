import React from "react";
import { DataImg, H1, TitleWrap, RentalLink } from "./HomeContent.styled";

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
            <RentalLink to="/catalog">View Catalog</RentalLink>
          </div>
        </DataImg>
      </TitleWrap>
    </main>
  );
};

export default HomeContent;
