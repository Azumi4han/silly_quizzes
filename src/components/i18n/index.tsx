import {
  createContext,
  createSignal,
  useContext,
  useTransition,
} from "solid-js";
import * as i18n from "@solid-primitives/i18n";
import en from "./locales/en.json";

export const dict = {
  en,
};

export enum Language {
  FINNISH = "fi",
  ENGLISH = "en",
  RUSSIAN = "ru",
}

type Dictionary = i18n.Flatten<typeof dict.en>;

const [language, _setLanguage] = createSignal<Language>("en" as Language);
export { language };

export const I18nContext = createContext(
  i18n.translator(() => i18n.flatten(dict.en), i18n.resolveTemplate),
);

export const useTranslator = () => useContext(I18nContext);

const [duringI18nTransition, startI18nTransition] = useTransition();

export { duringI18nTransition };

export function setLanguage(key: Language) {
  startI18nTransition(() => {
    _setLanguage(key);
    console.log("Language set to:", key, "Current signal:", language());
  });
}

export async function fetchLanguage(key: Language): Promise<Dictionary> {
  const data = (await import(`./locales/${key}.json`)) as typeof dict.en;
  return i18n.flatten(data);
}
