// Type definitions for Grommet
// Project: https://github.com/grommet/grommet
// Definitions by: Ryan C. Collins <https://www.ryancollins.io/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../react/index.d.ts" />

declare namespace Grommet {
  interface AccordionProps {
    active?: number | Array<number>;
    animate?: boolean;
    onActive?: Function;
    openMulti?: boolean;
  }
  export class Accordion extends React.Component<AccordionProps, any> {
    render(): JSX.Element
  }

  interface AccordionPanelProps {
    a11yTitle?: string;
    active?: boolean;
    animate?: boolean;
    heading?: React.ReactNode;
    onChange?: Function;
    pad?: any;
  }
  export class AccordionPanel extends React.Component<AccordionPanelProps, any> {
    render(): JSX.Element
  }

  interface AnchorProps {
    a11yTitle?: string;
    align?: 'start' | 'center' | 'end';
    animateIcon?: boolean;
    disabled?: boolean;
    href?: string;
    icon?: React.ReactNode | JSX.Element;
    id?: string;
    label?: string;
    method?: 'push' | 'replace';
    onClick?: Function;
    path?: string;
    primary?: boolean;
    reverse?: boolean;
    tag?: string;
    target?: string;
  }
  export class Anchor extends React.Component<AnchorProps, any> {
    render(): JSX.Element
  }

  type AnimationType = 'fade' | 'slide-up' | 'slide-down' | 'slide-left' | 'slide-right' | 'jiggle';
  type AnimationDetails = {
    animation: AnimationType;
    duration?: number;
    delay?: number;
  };
  interface AnimateProps {
    component?: string | Function;
    enter?: AnimationDetails;
    keep?: boolean;
    leave: AnimationDetails;
    visible?: 'scroll' | boolean;
  }

  export class Animate extends React.Component<AnimateProps, any> {
    render(): JSX.Element
  }

}
