declare module 'react-dark-mode-toggle' {
  // imports here...

  export interface DarkModeToggleProps {
    onChange: (theme: boolean) => void;
    size: number;
    checked: boolean;
  }

  export default class DarkModeToggle extends React.Component<DarkModeToggleProps> {}
}
