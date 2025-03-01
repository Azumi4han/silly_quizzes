import { createSignal, For, JSX, Show } from "solid-js";
import { styled, keyframes, DefaultTheme } from "solid-styled-components";
import { SillyButton } from "./ui";

export interface Question {
  id: number;
  text: string;
  image?: string;
  answers: Answer[];
}

export interface Answer {
  text: string;
  image?: string;
  traits: string[];
}

export interface QuizResult {
  combination: string[];
  name: string;
  description: string;
  image?: string;
  emoji?: string;
}

export interface QuizProps {
  title: JSX.Element;
  description: JSX.Element;
  buttons: {
    start: JSX.Element;
    final: JSX.Element;
  };
  preview: string;
  questions: Question[];
  possibleTraits: string[];
  results: QuizResult[];
  renderResult?: (result: QuizResult, restart: () => void) => JSX.Element;
}

const QuizContainer = styled("div")`
  text-align: center;
  width: 100%;
  padding: 2rem;
  background: #fff;
  border-radius: 10px 10px 0px 0px;
  box-shadow:
    0 0 0 2px var(--waffle-border),
    0.625em 0 0 0 var(--waffle-shadow);
`;

const ProgressBar = styled("div")<{ progress: number }>`
  height: 8px;
  background: #f0f0f0;
  border-radius: 4px;
  margin: 1rem 0;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: ${(props) => props.progress}%;
    background: #ffd700;
    border-radius: 4px;
    transition: width 0.3s ease;
  }
`;

const QuestionCard = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  animation: ${keyframes`from { opacity: 0; transform: translateY(20px); }`}
    0.3s ease;
`;

const Buttons = styled("div")`
  display: flex;
  flex-direction: column;
  width: 100%;
  background: var(--dark-waffle-2);
  padding: 2rem 4rem 3rem 4rem;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-top: 2px solid var(--waffle-border);
  box-shadow:
    0 0 0 2px var(--waffle-border),
    0.625em 0 0 0 var(--waffle-shadow);
`;

const Image = styled("img")`
  height: 200px;
  object-fit: cover;
  box-shadow:
    0 0 0 2.5px var(--waffle-border),
    0.5em 0 0 #dba129;
  border-radius: 20px;
`;

const Title = styled("div")<{ theme?: () => DefaultTheme }>`
  text-align: center;
  font-size: 1.678rem;
  font-weight: 600;
  overflow: hidden;
  font-family: ${(p) => p.theme!()!.fonts.primary};
  margin-bottom: 2.5rem;
  margin-top: 1.2rem;
`;

const Description = styled("div")<{ theme?: () => DefaultTheme }>`
  font-family: ${(p) => p.theme!()!.fonts.primary};
  font-size: 1.0875rem;
  font-weight: 500;
  overflow: hidden;
  margin-bottom: 1.5rem;
  margin-top: 2.5rem;
`;

const TraitPill = styled("div")`
  display: inline-block;
  padding: 0.25rem 0.75rem;
  margin: 0.25rem;
  background: #fff0f5;
  border-radius: 1rem;
  font-size: 0.9rem;
`;

export default function CombinationQuiz(props: QuizProps) {
  const [quizStarted, setQuizStarted] = createSignal(false);
  const [currentQuestion, setCurrentQuestion] = createSignal(0);
  const [traits, setTraits] = createSignal<Set<string>>(new Set());
  const [result, setResult] = createSignal<QuizResult | null>(null);

  const basePath = import.meta.env.BASE_URL;

  const handleAnswer = (selectedTraits: string[]) => {
    // Add new traits to the set
    setTraits((prev) => new Set([...prev, ...selectedTraits]));

    if (currentQuestion() < props.questions.length - 1) {
      setCurrentQuestion((c) => c + 1);
    } else {
      // Find the best matching result
      const userTraits = Array.from(traits());
      const bestMatch = props.results.reduce(
        (best, current) => {
          const matchCount = current.combination.filter((t) =>
            userTraits.includes(t),
          ).length;
          return matchCount > best.match
            ? { result: current, match: matchCount }
            : best;
        },
        { result: props.results[0], match: 0 },
      );

      setResult(bestMatch.result);
    }
  };

  const restartQuiz = () => {
    setQuizStarted(false);
    setCurrentQuestion(0);
    setTraits(new Set() as any); // lmao
    setResult(null);
  };

  // Progress calculation
  const progress = () =>
    ((currentQuestion() + 1) / props.questions.length) * 100;

  return (
    <>
      <Show when={!quizStarted()}>
        <QuizContainer>
          <Title>{props.title}</Title>
          <Image src={`${basePath}${props.preview}`} />
          <Description>{props.description}</Description>
        </QuizContainer>
        <Buttons>
          <SillyButton onClick={() => setQuizStarted(true)}>
            {props.buttons.start}
          </SillyButton>
        </Buttons>
      </Show>
      <Show when={quizStarted() && !result()}>
        <QuizContainer>
          <ProgressBar progress={progress()} />
          <QuestionCard>
            <h3>
              Question {currentQuestion() + 1} of {props.questions.length}
            </h3>
            <Title>{props.questions[currentQuestion()].text}</Title>
            <Image
              src={`${basePath}${props.questions[currentQuestion()].image}`}
            />
          </QuestionCard>
        </QuizContainer>

        <Buttons>
          <For each={props.questions[currentQuestion()].answers}>
            {(answer) => (
              <SillyButton onClick={() => handleAnswer(answer.traits)}>
                {answer.text}
              </SillyButton>
            )}
          </For>
        </Buttons>
      </Show>

      <Show when={result()}>
        <QuizContainer>
          <Title>{result()!.name}</Title>
          <Description>{result()!.description}</Description>
          <Description>Your Waffle Combination:</Description>
          <div style={{ margin: "1rem 0" }}>
            <For each={result()!.combination}>
              {(trait) => <TraitPill>{trait}</TraitPill>}
            </For>
          </div>
        </QuizContainer>
        {props.renderResult ? (
          props.renderResult(result()!, restartQuiz)
        ) : (
          <Buttons>
            <SillyButton onClick={restartQuiz}>
              {props.buttons.final}
            </SillyButton>
          </Buttons>
        )}
      </Show>
    </>
  );
}
