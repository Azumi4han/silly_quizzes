import { styled, keyframes } from "solid-styled-components";
import { language, setLanguage, Language } from "../../i18n";

const waffleSpin = keyframes`
  0% { transform: rotate(0deg) scale(1); }
  50% { transform: rotate(180deg) scale(1.2); }
  100% { transform: rotate(360deg) scale(1); }
`;

const LanguageButton = styled("div")`
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 9999;
  cursor: pointer;
  font-family: "Comic Sans MS", cursive;

  @media (max-width: 767px) {
    position: absolute;
  }

  &:hover {
    .language-picker {
      transform: rotate(10deg) scale(1.1);
      background: #ffecb3;
    }

    .language-menu {
      opacity: 1;
      transform: translateY(0);
      pointer-events: all;
    }
  }
`;

const PickerButton = styled("button")`
  background: #ffd700;
  border: 3px solid #ffb300;
  border-radius: 50px 10px 10px 50px;
  padding: 12px 24px;
  font-size: 1.2rem;
  color: #8d6e63;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  gap: 8px;

  &:active {
    transform: scale(0.95) rotate(-5deg);
  }

  .waffle-icon {
    animation: ${waffleSpin} 2s infinite linear;
    font-size: 1.5em;
  }
`;

const LanguageMenu = styled("div")`
  position: absolute;
  right: 0;
  top: 100%;
  background: #fff3e0;
  border: 2px solid #ffb300;
  border-radius: 15px;
  opacity: 0;
  transform: translateY(-10px);
  transition: all 0.3s ease;
  pointer-events: none;
  min-width: 150px;
  overflow: hidden;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
`;

const LanguageOption = styled("button")<{ selected?: boolean }>`
  width: 100%;
  padding: 12px;
  background: ${(props) => (props.selected ? "var(--dark-waffle)" : "none")};
  border: none;
  text-align: left;
  font-size: 1.1rem;
  color: #6d4c41;
  cursor: pointer;
  transition: all 0.2s ease;

  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;

  &:hover {
    background: var(--light-waffle-2);
    transform: translateX(10px);
  }

  &::before {
    content: "🥞";
    margin-right: 8px;
  }
`;

export const LanguageDropdown = () => {
  return (
    <LanguageButton>
      <PickerButton class="language-picker">
        <span class="waffle-icon">🧇</span>
        WaffleLang
      </PickerButton>
      <LanguageMenu class="language-menu">
        {[
          ["English", "🥞", "en"],
          ["Suomi", "🍯", "fi"],
          ["Русский", "🥐", "ru"],
        ].map((i) => (
          <LanguageOption
            selected={i[2] === language()}
            onClick={() => setLanguage(i[2] as Language)}
          >{`${i[0]} ${i[1]}`}</LanguageOption>
        ))}
      </LanguageMenu>
    </LanguageButton>
  );
};
