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
                fontSize: "24px",
                fontWeight: "600",
                color: "#fff",
                lineHeight: "133%",
                marginBottom: "40px",
                textAlign: "center",
              }}
            >
              Reliable and budget-friendly rentals for any journey
            </p>
            <RentalLink to="/catalog">
              <span>View Catalog</span>
            </RentalLink>
          </div>
        </DataImg>
      </TitleWrap>
    </main>
  );
};

export default HomeContent;
