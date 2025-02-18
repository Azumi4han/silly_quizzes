import { useTranslator } from "../../components/i18n";
import { QuizProps } from "../../components/Quiz";

const t = useTranslator();

export const WaffleQuizSettings: QuizProps = {
  title: t("app.quizes.waffle.welcome.title"),
  description: t("app.quizes.waffle.welcome.description"),
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
        "pink",
        "positive",
        "layered",
        "sweet",
        "hot",
        "decorated",
        "golden",
      ],
      name: "Ube Purple Waffle",
      description:
        "Vibrant Filipino-inspired yam delight with layered sweetness.",
      image: "",
      emoji: "🍠",
    },
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
      name: "Liège Waffle",
      description: "Caramelized Belgian delight with a crispy crust.",
      image: "",
      emoji: "🇧🇪",
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
      name: "Brussels Waffle",
      description: "Light and airy, perfect for toppings!",
      emoji: "🍓",
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
      name: "American Classic",
      description: "Fluffy circles of breakfast joy.",
      emoji: "🇺🇸",
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
      name: "Hong Kong Egg Waffle",
      description: "Crispy honeycombed bubbles of happiness.",
      emoji: "🐣",
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
      name: "Stroopwafel",
      description: "Dutch syrup-filled layers of crunch.",
      emoji: "🍯",
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
      name: "Scandinavian Heart Waffle",
      description: "Soft, vanilla-scented love on a plate.",
      emoji: "❤️",
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
      name: "Pandan Waffle",
      description: "Tropical green crispness with coconut glaze.",
      emoji: "🌴",
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
      name: "Savory Galette",
      description: "Buckwheat waffle stuffed with herbs and cheese.",
      emoji: "🧀",
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
      name: "Churro Waffle",
      description: "Cinnamon-sugar coated crunch.",
      emoji: "🎪",
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
      name: "Red Velvet Waffle",
      description: "Decadent cocoa with a cream cheese crown.",
      emoji: "🎀",
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
      name: "Chocolate-Stuffed Belgian",
      description: "Melted chocolate core in every bite.",
      emoji: "🍫",
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
      name: "Winter Spiced Waffle",
      description: "Cinnamon-apple layers for cozy mornings.",
      emoji: "❄️",
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
      name: "Lazy Day Waffle",
      description: "Microwaved leftovers with syrup drizzle.",
      emoji: "🛋️",
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
      name: "Ube Purple Waffle",
      description: "Vibrant Filipino-inspired yam delight.",
      emoji: "🍠",
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
      name: "Gluten-Free Almond",
      description: "Nutty crunch with fresh berries.",
      emoji: "🌾",
    },
  ],
};
