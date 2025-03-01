import { useTranslator } from "../../components/i18n";
import SillyQuiz from "../../components/Quiz";
import { getWaffleQuizSettings } from "./questions";

export default function WaffleQuiz() {
  const t = useTranslator();
  return (
    <div>
      <SillyQuiz {...getWaffleQuizSettings(t)} />
    </div>
  );
}
