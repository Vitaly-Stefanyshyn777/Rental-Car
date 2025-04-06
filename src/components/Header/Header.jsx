import {
  HeaderWrap,
  HeaderInner,
  HeaderList,
  ListItem,
  StyledLink,
  LogoLink,
} from "./Header.steled";

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
