/* @refresh reload */
import { render } from "solid-js/web";
import { createMemo, createResource, type JSX } from "solid-js";
import { Route, Router } from "@solidjs/router";
import "./index.css";
import App from "./App.tsx";
import * as i18n from "@solid-primitives/i18n";
// import { I18nContext, dict } from "./components/i18n/index.tsx";
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

  return (
    <I18nContext.Provider value={t()}>
      {props.children}
      <WaffleDropper />
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
