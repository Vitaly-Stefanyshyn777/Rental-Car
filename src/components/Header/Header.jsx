// import {
//   HeaderList,
//   HeaderWrap,
//   ListItem,
//   StyledLink,
//   SvgHeader,
//   LogoLink,
// } from "./Header.steled";
// import sprite from "../../images/sprite.svg";
// import { RentalLink } from "components/CarModal/CarModal.styled";
// import { Link } from "react-router-dom";
// export const Header = () => {
//   return (
//     <HeaderWrap>
//       <LogoLink to="/">
//         Rental<span>Car</span>
//       </LogoLink>
//       <nav>
//         <HeaderList>
//           <ListItem>
//             <StyledLink to="/favorites">
//               Favorites
//               {/* <SvgHeader width={24} height={24}>
//                 <use xlinkHref={`${sprite}#icon-heart`} />
//               </SvgHeader> */}
//             </StyledLink>
//           </ListItem>
//           <ListItem>
//             <StyledLink to="/">
//               Home
//               {/* <SvgHeader width={24} height={24}>
//                 <use xlinkHref={`${sprite}#icon-home`} />
//               </SvgHeader> */}
//             </StyledLink>
//           </ListItem>
//           <ListItem>
//             <StyledLink to="/catalog">
//               Catalog
//               {/* <SvgHeader width={24} height={24}>
//                 <use xlinkHref={`${sprite}#icon-catalog`} />
//               </SvgHeader> */}
//             </StyledLink>
//           </ListItem>
//         </HeaderList>
//       </nav>
//       <div>
//         {/* <RentalLink
//           href="tel:+380730000000"
//           type="button"
//           style={{ marginRight: "20px" }}
//         >
//           Phone
//         </RentalLink> */}
//         {/* <RentalLink href="mailto:example@gmail.com" type="button">
//           Gmail
//         </RentalLink> */}
//       </div>
//     </HeaderWrap>
//   );
// };
// import {
//   HeaderWrap,
//   HeaderInner,
//   HeaderList,
//   ListItem,
//   StyledLink,
//   LogoLink,
// } from "./Header.styled";

import {
  LogoLink,
  HeaderWrap,
  HeaderInner,
  HeaderList,
  ListItem,
  StyledLink,
} from "./Header.steled";

// import {
//   HeaderWrap,
//   HeaderInner,
//   HeaderList,
//   ListItem,
//   StyledLink,
//   LogoLink,
// } from "./Header.steled";

export const Header = () => {
  return (
    <HeaderWrap>
      <HeaderInner>
        <LogoLink to="/">
          Rental<span>Car</span>
        </LogoLink>
        <nav>
          <HeaderList>
            <ListItem>
              <StyledLink to="/favorites">Favorites</StyledLink>
            </ListItem>
            <ListItem>
              <StyledLink to="/">Home</StyledLink>
            </ListItem>
            <ListItem>
              <StyledLink to="/catalog">Catalog</StyledLink>
            </ListItem>
          </HeaderList>
        </nav>
      </HeaderInner>
    </HeaderWrap>
  );
};
