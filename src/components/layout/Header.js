import styled from "styled-components";

const Header = () => (
    <HeaderContainer>
        <img className="logo"
             src="https://ajaib-wp-s3-artifact.s3.ap-southeast-1.amazonaws.com/prd/wp-content/uploads/2020/03/cropped-new_ajaib_logo.png"
             alt="logo"/>
    </HeaderContainer>
);

const HeaderContainer = styled('div')`
  background-color: #fff;
  max-height: 80px;
  padding-left: 165px;
  padding-right: 165px;
  box-shadow: 2px 6px 11px -8px rgb(51 51 51 / 10%);
  display: flex;
  align-items: center;
  height: 80px;

  .logo {
    height: 24px;
  }
`
export default Header;