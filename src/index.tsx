/* @refresh reload */
import { render } from "solid-js/web";
import { createMemo, createResource, type JSX } from "solid-js";
import { Route, Router } from "@solidjs/router";
import { ThemeProvider, type DefaultTheme } from "solid-styled-components";
import "./index.css";
import App from "./App.tsx";
import * as i18n from "@solid-primitives/i18n";
import WaffleQuiz from "./pages/waffle/WaffleQuiz.tsx";
import WaffleDropper from "./components/WaffleDrop.tsx";
import {
  dict,
  fetchLanguage,
  I18nContext,
  language,
} from "./components/i18n/index.tsx";
function Context(props: { children?: JSX.Element }) {
  const [dictonary] = createResource(language, fetchLanguage, {
    initialValue: i18n.flatten(dict.en),
  });
  const t = createMemo(() => i18n.translator(dictonary, i18n.resolveTemplate));

  const theme = createMemo(
    (): DefaultTheme => ({
      fonts: {
        primary: language() === "ru" ? "SillyFontRU" : "SillyFont",
        secondary: language() === "ru" ? "SillyFontRU-2" : "SillyFont-2",
      },
    }),
  );

  return (
    <I18nContext.Provider value={t()}>
      <ThemeProvider theme={theme as unknown as DefaultTheme}>
        {props.children}
        <WaffleDropper />
      </ThemeProvider>
    </I18nContext.Provider>
  );
}

render(
  () => (
    <Router root={Context} base={import.meta.env.BASE_URL}>
      <Route path="/" component={App as never}>
        <Route path="/*" component={WaffleQuiz} />
      </Route>
    </Router>
  ),
  document.getElementById("root")!,
);
