import { styled } from "solid-styled-components";
import "./App.css";
import { JSX } from "solid-js";
import { LanguageDropdown } from "./components/ui";

const Layout = styled("div")`
  display: flex;
  height: 100%;
  padding: 15px;
  justify-content: center;
`;

const Content = styled("main")`
  flex: 1;
  justify-content: center;
  align-items: center;
  max-width: 750px;
  display: flex;
  position: relative;
  justify-content: center;
  flex-direction: column;
  border-start-start-radius: 8px;
  padding-bottom: 5.5rem;
`;

const Footer = styled("footer")`
  text-align: center;
  a {
    font-size: 10px;
  }
`;

export default function App(props: { children: JSX.Element }) {
  return (
    <>
      <Layout>
        <LanguageDropdown />
        <Content>{props.children}</Content>
      </Layout>
      <Footer>
        <a href="https://github.com/Azumi4han" target="_blank">
          © 2025 AzumiChan // All artwork is copyrighted. Please do not use,
          copy, or distribute without permission
        </a>
      </Footer>
    </>
  );
}
