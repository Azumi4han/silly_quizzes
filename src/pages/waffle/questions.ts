import { Dictionary } from "../../components/i18n";
import * as i18n from "@solid-primitives/i18n";
import { QuizProps } from "../../components/Quiz";

export const getWaffleQuizSettings = (
  t: i18n.Translator<Dictionary>,
): QuizProps => ({
  title: t("app.quizes.waffle.welcome.title"),
  description: t("app.quizes.waffle.welcome.description"),
  buttons: {
    start: t("app.quizes.waffle.welcome.buttons.start"),
    final: t("app.quizes.waffle.welcome.buttons.final"),
  },
  preview: "images/waffle/waffle.png",
  possibleTraits: [
    // User's traits
    "positive",
    "lazy",

    // Texture traits
    "soft",
    "fluffy",
    "crunchy",

    // Color traits
    "pink",
    "green",
    "brown",
    "golden",
    "purple",
    "white",

    // Shape traits
    "round",
    "square",
    "rectangular",

    // Flavor traits
    "sweet",
    "chocolate",
    "vanilla",
    "spiced",

    // Temperature traits
    "hot",
    "cold",

    // Special characteristics
    "stuffed",
    "layered",
    "glazed",
    "decorated",
  ],
  questions: [
    {
      id: 1,
      text: t("app.quizes.waffle.questions.first.text"),
      image: "images/waffle/woke_up.gif",
      answers: [
        {
          text: t("app.quizes.waffle.questions.first.buttons.first"),
          traits: ["positive", "golden", "soft"],
        },
        {
          text: t("app.quizes.waffle.questions.first.buttons.second"),
          traits: ["positive", "lazy", "cold"],
        },
        {
          text: t("app.quizes.waffle.questions.first.buttons.third"),
          traits: ["lazy", "cold", "vanilla"],
        },
      ],
    },
    {
      id: 2,
      text: t("app.quizes.waffle.questions.second.text"),
      image: "images/waffle/close_eyes.gif",
      answers: [
        {
          text: t("app.quizes.waffle.questions.second.buttons.first"),
          traits: ["sweet", "spiced", "lazy"],
        },
        {
          text: t("app.quizes.waffle.questions.second.buttons.second"),
          traits: ["sweet", "spiced", "hot"],
        },
        {
          text: t("app.quizes.waffle.questions.second.buttons.third"),
          traits: ["cold", "glazed", "decorated"],
        },
      ],
    },
    {
      id: 3,
      text: t("app.quizes.waffle.questions.third.text"),
      image: "images/waffle/sounds_from_kitchen.gif",
      answers: [
        {
          text: t("app.quizes.waffle.questions.third.buttons.first"),
          traits: ["pink", "sweet", "vanilla", "positive"],
        },
        {
          text: t("app.quizes.waffle.questions.third.buttons.second"),
          traits: ["brown", "round", "sweet", "chocolate"],
        },
        {
          text: t("app.quizes.waffle.questions.third.buttons.third"),
          traits: ["green", "rectangular", "vanilla", "decorated"],
        },
      ],
    },
    {
      id: 4,
      text: t("app.quizes.waffle.questions.fourth.text"),
      image: "images/waffle/waffle_standing.gif",
      answers: [
        {
          text: t("app.quizes.waffle.questions.fourth.buttons.first"),
          traits: ["spiced", "cold", "crunchy", "green", "stuffed"],
        },
        {
          text: t("app.quizes.waffle.questions.fourth.buttons.second"),
          traits: ["hot", "glazed", "purple", "crunchy", "layered"],
        },
        {
          text: t("app.quizes.waffle.questions.fourth.buttons.third"),
          traits: ["decorated", "vanilla", "white", "soft", "lazy"],
        },
      ],
    },
    {
      id: 5,
      text: t("app.quizes.waffle.questions.fifth.text"),
      image: "images/waffle/waffle_ask_for_help.gif",
      answers: [
        {
          text: t("app.quizes.waffle.questions.fifth.buttons.first"),
          traits: ["purple", "soft", "fluffy", "positive", "glazed"],
        },
        {
          text: t("app.quizes.waffle.questions.fifth.buttons.second"),
          traits: ["green", "spiced", "crunchy", "positive", "stuffed"],
        },
        {
          text: t("app.quizes.waffle.questions.fifth.buttons.third"),
          traits: ["cold", "stuffed", "layered", "glazed", "decorated"],
        },
      ],
    },
    {
      id: 6,
      text: t("app.quizes.waffle.questions.sixth.text"),
      image: "images/waffle/waffle_shows_products.gif",
      answers: [
        {
          text: t("app.quizes.waffle.questions.sixth.buttons.first"),
          traits: ["positive", "sweet", "chocolate", "hot", "decorated"],
        },
        {
          text: t("app.quizes.waffle.questions.sixth.buttons.second"),
          traits: ["positive", "sweet", "vanilla", "brown", "decorated"],
        },
        {
          text: t("app.quizes.waffle.questions.sixth.buttons.third"),
          traits: ["lazy", "spiced", "cold", "decorated", "golden"],
        },
      ],
    },
    {
      id: 7,
      text: t("app.quizes.waffle.questions.seventh.text"),
      image: "images/waffle/select_one.gif",
      answers: [
        {
          text: t("app.quizes.waffle.questions.seventh.buttons.first"),
          traits: ["white", "round", "decorated", "soft"],
        },
        {
          text: t("app.quizes.waffle.questions.seventh.buttons.second"),
          traits: ["brown", "square", "hot", "stuffed"],
        },
        {
          text: t("app.quizes.waffle.questions.seventh.buttons.third"),
          traits: ["decorated", "sweet", "fluffy", "round"],
        },
        {
          text: t("app.quizes.waffle.questions.seventh.buttons.fourth"),
          traits: ["spiced", "stuffed", "glazed", "crunchy"],
        },
      ],
    },
    {
      id: 8,
      text: t("app.quizes.waffle.questions.eight.text"),
      image: "images/waffle/perfect_waffle.gif",
      answers: [
        {
          text: t("app.quizes.waffle.questions.eight.buttons.first"),
          traits: [
            "positive",
            "pink",
            "golden",
            "purple",
            "rectangular",
            "stuffed",
          ],
        },
        {
          text: t("app.quizes.waffle.questions.eight.buttons.second"),
          traits: [
            "positive",
            "brown",
            "golden",
            "white",
            "square",
            "decorated",
          ],
        },
        {
          text: t("app.quizes.waffle.questions.eight.buttons.third"),
          traits: [
            "decorated",
            "positive",
            "white",
            "square",
            "round",
            "rectangular",
          ],
        },
      ],
    },
    {
      id: 9,
      text: t("app.quizes.waffle.questions.ninth.text"),
      image: "images/waffle/fades_out.gif",
      answers: [
        {
          text: t("app.quizes.waffle.questions.ninth.buttons.first"),
          traits: [
            "chocolate",
            "hot",
            "glazed",
            "decorated",
            "crunchy",
            "green",
          ],
        },
        {
          text: t("app.quizes.waffle.questions.ninth.buttons.second"),
          traits: [
            "positive",
            "pink",
            "golden",
            "sweet",
            "layered",
            "decorated",
          ],
        },
        {
          text: t("app.quizes.waffle.questions.ninth.buttons.third"),
          traits: ["cold", "white", "brown", "golden", "sweet", "decorated"],
        },
      ],
    },
  ],
  results: [
    {
      combination: [
        "positive",
        "crunchy",
        "golden",
        "rectangular",
        "sweet",
        "hot",
        "glazed",
      ],
      name: t("app.quizes.waffle.result.liege.name"),
      description: t("app.quizes.waffle.result.liege.description"),
      emoji: t("app.quizes.waffle.result.liege.emoji"),
    },
    {
      combination: [
        "positive",
        "fluffy",
        "golden",
        "rectangular",
        "sweet",
        "cold",
        "decorated",
      ],
      name: t("app.quizes.waffle.result.brussels.name"),
      description: t("app.quizes.waffle.result.brussels.description"),
      emoji: t("app.quizes.waffle.result.brussels.emoji"),
    },
    {
      combination: [
        "positive",
        "fluffy",
        "brown",
        "round",
        "sweet",
        "hot",
        "decorated",
      ],
      name: t("app.quizes.waffle.result.american.name"),
      description: t("app.quizes.waffle.result.american.description"),
      emoji: t("app.quizes.waffle.result.american.emoji"),
    },
    {
      combination: [
        "positive",
        "crunchy",
        "golden",
        "round",
        "sweet",
        "hot",
        "decorated",
      ],
      name: t("app.quizes.waffle.result.egg.name"),
      description: t("app.quizes.waffle.result.egg.description"),
      emoji: t("app.quizes.waffle.result.egg.emoji"),
    },
    {
      combination: [
        "positive",
        "crunchy",
        "brown",
        "round",
        "sweet",
        "cold",
        "layered",
      ],
      name: t("app.quizes.waffle.result.stroopwafel.name"),
      description: t("app.quizes.waffle.result.stroopwafel.description"),
      emoji: t("app.quizes.waffle.result.stroopwafel.emoji"),
    },
    {
      combination: [
        "positive",
        "soft",
        "golden",
        "round",
        "vanilla",
        "hot",
        "decorated",
      ],
      name: t("app.quizes.waffle.result.scandinavian.name"),
      description: t("app.quizes.waffle.result.scandinavian.description"),
      emoji: t("app.quizes.waffle.result.scandinavian.emoji"),
    },
    {
      combination: [
        "positive",
        "crunchy",
        "green",
        "square",
        "sweet",
        "hot",
        "glazed",
      ],
      name: t("app.quizes.waffle.result.pandan.name"),
      description: t("app.quizes.waffle.result.pandan.description"),
      emoji: t("app.quizes.waffle.result.pandan.emoji"),
    },
    {
      combination: [
        "lazy",
        "crunchy",
        "brown",
        "square",
        "spiced",
        "hot",
        "stuffed",
      ],
      name: t("app.quizes.waffle.result.savory.name"),
      description: t("app.quizes.waffle.result.savory.description"),
      emoji: t("app.quizes.waffle.result.savory.emoji"),
    },
    {
      combination: [
        "positive",
        "crunchy",
        "golden",
        "round",
        "sweet",
        "hot",
        "glazed",
      ],
      name: t("app.quizes.waffle.result.churro.name"),
      description: t("app.quizes.waffle.result.churro.description"),
      emoji: t("app.quizes.waffle.result.churro.emoji"),
    },
    {
      combination: [
        "positive",
        "soft",
        "pink",
        "round",
        "chocolate",
        "hot",
        "decorated",
      ],
      name: t("app.quizes.waffle.result.velvet.name"),
      description: t("app.quizes.waffle.result.velvet.description"),
      emoji: t("app.quizes.waffle.result.velvet.emoji"),
    },
    {
      combination: [
        "positive",
        "crunchy",
        "brown",
        "rectangular",
        "chocolate",
        "hot",
        "stuffed",
      ],
      name: t("app.quizes.waffle.result.chocolate.name"),
      description: t("app.quizes.waffle.result.chocolate.description"),
      emoji: t("app.quizes.waffle.result.chocolate.emoji"),
    },
    {
      combination: [
        "positive",
        "fluffy",
        "brown",
        "round",
        "spiced",
        "hot",
        "layered",
      ],
      name: t("app.quizes.waffle.result.winter.name"),
      description: t("app.quizes.waffle.result.winter.description"),
      emoji: t("app.quizes.waffle.result.winter.emoji"),
    },
    {
      combination: [
        "lazy",
        "soft",
        "white",
        "square",
        "vanilla",
        "cold",
        "glazed",
      ],
      name: t("app.quizes.waffle.result.lazy.name"),
      description: t("app.quizes.waffle.result.lazy.description"),
      emoji: t("app.quizes.waffle.result.lazy.emoji"),
    },
    {
      combination: [
        "positive",
        "fluffy",
        "purple",
        "round",
        "sweet",
        "hot",
        "decorated",
      ],
      name: t("app.quizes.waffle.result.ube.name"),
      description: t("app.quizes.waffle.result.ube.description"),
      emoji: t("app.quizes.waffle.result.ube.emoji"),
    },
    {
      combination: [
        "positive",
        "crunchy",
        "white",
        "square",
        "vanilla",
        "hot",
        "decorated",
      ],
      name: t("app.quizes.waffle.result.almond.name"),
      description: t("app.quizes.waffle.result.almond.description"),
      emoji: t("app.quizes.waffle.result.almond.emoji"),
    },
  ],
});
