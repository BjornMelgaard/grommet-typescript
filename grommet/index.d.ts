// Type definitions for Grommet
// Project: https://github.com/grommet/grommet
// Definitions by: Ryan C. Collins <https://www.ryancollins.io/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../react/index.d.ts" />

declare namespace GrommetBoxTypes {
  type FixedSizes = 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge';
  type MarginSizes = 'small' | 'medium' | 'large' | 'none';
  type BoxSizes = 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge' | 'full' | '1/2' | '1/3' | '2/3' | '1/4' | '3/4';
  type PadSizes = 'small' | 'medium' | 'large' | 'none';
  type Size = 'auto' | 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge' | 'full';
}

declare namespace GrommetContextTypes {
  type Intl = {
    intl?: {};
  }
  type All = {
    router?: any;
    history?: {};
    intl?: {};
    store?: {};
  }
}

declare namespace GrommetAnimationTypes {
  type AnimationType = 'fade' | 'slide-up' | 'slide-down' | 'slide-left' | 'slide-right' | 'jiggle';
  type AnimationDetails = {
    animation: AnimationType;
    duration?: number;
    delay?: number;
  };
}

declare namespace GrommetFormTypes {
  type FormPadding = 'none' | 'small' | 'medium' | 'large';
}

declare namespace GrommetDropTypes {
  type VERTICAL_ALIGN_OPTIONS = 'top' | 'bottom';
  type HORIZONTAL_ALIGN_OPTIONS = 'right' | 'left';
}

declare namespace Grommet {
  interface AccordionProps extends React.Props<Accordion> {
    active?: number | Array<number>;
    animate?: boolean;
    onActive?: Function;
    openMulti?: boolean;
  }
  export class Accordion extends React.Component<AccordionProps, any> {
    render(): JSX.Element;
  }

  interface AccordionPanelProps extends React.Props<AccordionPanel> {
    a11yTitle?: string;
    active?: boolean;
    animate?: boolean;
    heading?: React.ReactNode;
    onChange?: Function;
    pad?: any;
  }
  export class AccordionPanel extends React.Component<AccordionPanelProps, any> {
    context: GrommetContextTypes.Intl;
    render(): JSX.Element;
  }

  interface AnchorProps extends React.Props<Anchor> {
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
    context: GrommetContextTypes.Intl;
    render(): JSX.Element;
  }

  interface AnimateProps extends React.Props<Animate> {
    component?: string | Function;
    enter?: GrommetAnimationTypes.AnimationDetails;
    keep?: boolean;
    leave: GrommetAnimationTypes.AnimationDetails;
    visible?: 'scroll' | boolean;
  }
  export class Animate extends React.Component<AnimateProps, any> {
    render(): JSX.Element;
  }

  interface AppProps extends React.Props<App> {
    centered?: boolean;
    inline?: boolean;
  }
  export class App extends React.Component<AppProps, any> {
    render(): JSX.Element;
  }

  interface ArticleProps extends BoxProps<Article> {
    controls?: boolean;
    onProgress?: Function;
    onSelect?: Function;
    scrollStep?: boolean;
    selected?: number;
  }
  export class Article extends React.Component<ArticleProps, any> {
    render(): JSX.Element;
  }

  export interface BoxProps<T> extends React.Props<T> {
    a11yTitle?: string | any;
    announce?: boolean;
    align?: 'start' | 'center' | 'end' | 'baseline' | 'stretch';
    alignContent?: 'start' | 'center' | 'end' | 'between' | 'around' | 'stretch';
    alignSelf?: 'start' | 'center' | 'end' | 'stretch';
    appCentered?: boolean;
    backgroundImage?: string;
    basis?: GrommetBoxTypes.BoxSizes;
    colorIndex?: string;
    containerClassName?: string;
    direction?: 'row' | 'column';
    focusable?: boolean;
    flex?: 'grow' | 'shrink' | boolean;
    full?: 'horizontal' | 'vertical' | boolean;
    onClick?: Function;
    justify?: 'start' | 'center' | 'between' | 'end';
    margin?: GrommetBoxTypes.MarginSizes | {
      bottom: GrommetBoxTypes.MarginSizes;
      horizontal: GrommetBoxTypes.MarginSizes;
      left: GrommetBoxTypes.MarginSizes;
      right: GrommetBoxTypes.MarginSizes;
      top: GrommetBoxTypes.MarginSizes;
      vertical: GrommetBoxTypes.MarginSizes;
    };
    pad?: GrommetBoxTypes.PadSizes | {
      between?: GrommetBoxTypes.PadSizes;
      horizontal?: GrommetBoxTypes.PadSizes;
      vertical?: GrommetBoxTypes.PadSizes;
    };
    primary?: boolean;
    reverse?: boolean;
    responsive?: boolean;
    role?: string;
    separator?: 'top' | 'bottom' | 'left' | 'right' | 'horizontal' | 'vertical' | 'all' | 'none';
    size?: {
      height?: GrommetBoxTypes.Size | {
        max?: GrommetBoxTypes.FixedSizes;
        min?: GrommetBoxTypes.FixedSizes;
      };
      width?: GrommetBoxTypes.Size | {
        max?: GrommetBoxTypes.FixedSizes;
        min?: GrommetBoxTypes.FixedSizes;
      };
    };
    tag?: string;
    textAlign?: 'left' | 'center' | 'right';
    texture?: React.ReactNode | string;
    wrap?: boolean;
  }
  export class Box extends React.Component<BoxProps<Box>, any> {
    context: GrommetContextTypes.Intl;
    render(): JSX.Element;
  }

  interface ButtonProps extends React.Props<Button> {
    a11yTitle?: string;
    accent?: boolean;
    align?: 'start' | 'center' | 'end';
    fill?: boolean;
    href?: string;
    icon?: React.ReactElement<any>;
    label?: React.ReactNode;
    method?: 'push' | 'replace';
    onClick?: Function;
    path?: string;
    plain?: boolean;
    primary?: boolean;
    reverse?: boolean;
    secondary?: boolean;
    type?: 'button' | 'reset' | 'submit';
  }
  export class Button extends React.Component<ButtonProps, any> {
    render(): JSX.Element;
  }

  interface CardProps extends BoxProps<Card> {
    contentPad?: GrommetBoxTypes.PadSizes | {
      between?: GrommetBoxTypes.PadSizes;
      horizontal?: GrommetBoxTypes.PadSizes;
      vertical?: GrommetBoxTypes.PadSizes;
    };
    description?: string | React.ReactElement<any>;
    heading?: string | React.ReactElement<any>;
    headingStrong?: boolean;
    label?: string | React.ReactElement<any>;
    link?: React.ReactElement<any>;
    textSize?: 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge';
    thumbnail?: string | React.ReactElement<any>;
    truncate?: boolean;
    video?: { source: string, type?: string } | React.ReactElement<any>;
  }
  export class Card extends React.Component<CardProps, any> {
    render(): JSX.Element;
  }

  interface CarouselProps extends React.Props<Carousel> {
    a11yTitle?: string;
    autoplay?: boolean;
    autoplaySpeed?: number;
    infinite?: boolean;
    persistentNav?: boolean;
  }
  export class Carousel extends React.Component<CarouselProps, any> {
    render(): JSX.Element;
  }

  interface CheckBoxProps extends React.Props<CheckBox> {
    checked?: boolean;
    disabled?: boolean;
    label?: React.ReactNode;
    name?: string;
    onChange?: Function;
    reverse?: boolean;
    toggle?: boolean;
  }
  export class CheckBox extends React.Component<CheckBoxProps, any> {
    render(): JSX.Element;
  }

  interface ColumnsProps extends React.Props<Columns> {
    justify?: 'start' | 'center' | 'between' | 'end';
    margin?: 'small' | 'medium' | 'large';
    masonry?: boolean;
    maxCount?: number;
    responsive?: boolean;
    size?: 'small' | 'medium' | 'large';
  }

  export class Columns extends React.Component<ColumnsProps, any> {
    render(): JSX.Element;
  }

  interface DateTimeProps extends React.Props<DateTime> {
    format?: string;
    id?: string;
    name?: string;
    onChange?: Function;
    step?: number;
    value?: string | {};
  }
  export class DateTime extends React.Component<DateTimeProps, any> {
    render(): JSX.Element;
  }

  interface DistributionProps extends React.Props<Distribution> {
    a11yTitle?: string;
    full?: boolean;
    series?: Array<{
      label?: React.ReactNode;
      value: number;
      colorIndex?: string;
      important?: boolean;
      onClick?: Function;
      icon?: {
        width?: number;
        height?: number;
        svgElement?: React.ReactNode;
      }
    }>
    size?: 'small' | 'medium' | 'large' | 'full';
    units?: string;
    vertical?: boolean;
  }
  export class Distribution extends React.Component<DistributionProps, any> {
    render(): JSX.Element;
  }

  interface FooterProps extends BoxProps<Footer> {
    fixed?: boolean;
    float?: boolean;
    primary?: boolean;
    size: 'small' | 'medium' | 'large';
  }
  export class Footer extends React.Component<FooterProps, any> {
    render(): JSX.Element;
  }

  interface FormProps extends React.Props<Form> {
    compact?: boolean;
    fill?: boolean;
    onSubmit: Function;
    pad?: GrommetFormTypes.FormPadding | {
      horizontal?: GrommetFormTypes.FormPadding;
      vertical?: GrommetFormTypes.FormPadding;
    };
  }
  export class Form extends React.Component<FormProps, any> {
    render(): JSX.Element;
  }

  interface FormattedMessageProps extends React.Props<FormattedMessage> {
    id: string;
    defaultMessage?: string;
  }
  export class FormattedMessage extends React.Component<FormattedMessageProps, any> {
    render(): JSX.Element;
  }

  interface FormFieldProps extends React.Props<FormField> {
    error?: React.ReactNode;
    help?: React.ReactNode;
    hidden?: boolean;
    htmlFor?: string;
    label?: React.ReactNode;
    size?: 'medium' | 'large';
    strong?: boolean;
  }
  export class FormField extends React.Component<FormFieldProps, any> {
    render(): JSX.Element;
  }

  interface FormFieldsProps extends React.Props<FormFields> {
    children?: React.ReactNode;
    className?: string;
  }
  export class FormFields extends React.Component<FormFieldsProps, any> {
    render(): JSX.Element;
  }

  interface GrommetProps extends React.Props<Grommet> {
    children?: React.ReactNode;
    className?: string;
  }
  export class Grommet extends React.Component<GrommetProps, any> {
    render(): JSX.Element;
  }

  interface HeaderProps extends BoxProps<Header> {
    fixed?: boolean;
    float?: boolean;
    size?: 'small' | 'medium' | 'large';
    splash?: boolean;
  }
  export class Header extends React.Component<HeaderProps, any> {
    render(): JSX.Element;
  }

  interface HeadingProps extends React.Props<Heading> {
    align?: 'start' | 'center' | 'end';
    margin?: 'none' | 'small' | 'medium' | 'large';
    size?: 'small' | 'medium' | 'large';
    strong?: boolean;
    tag?: string;
    truncate?: boolean;
    uppercase?: boolean;
  }
  export class Heading extends React.Component<HeadingProps, any> {
    render(): JSX.Element;
  }

  interface HeadlineProps extends React.Props<Headline> {
    align: 'start' | 'center' | 'end';
    margin?: 'none' | 'small' | 'medium' | 'large';
    size?: 'small' | 'medium' | 'large' | 'xlarge';
    strong?: boolean;
  }
  export class Headline extends React.Component<HeadlineProps, any> {
    render(): JSX.Element;
  }

  interface HeroProps extends React.Props<Hero> {
    background?: React.ReactElement<any>;
    backgroundColorIndex?: string;
    size?: 'small' | 'medium' | 'large';
    // below props are all deprecated
    backgroundImage?: string;
    backgroundPosition?: 'left' | 'center' | 'right';
    backgroundVideo?: React.ReactElement<any>;
    colorIndex?: string;
    flush?: boolean;
    image?: string;
    justify?: 'start' | 'center' | 'end';
    responsiveBackgroundPosition?: 'left' | 'center' | 'right';
    separator?: boolean;
  }
  export class Hero extends React.Component<HeroProps, any> {
    render(): JSX.Element;
  }

  interface ImageProps extends React.Props<Image> {
    align?: {
      bottom?: boolean;
      left?: boolean;
      right?: boolean;
      top?: boolean;
    };
    alt?: string;
    caption?: boolean | string;
    fit?: 'contain' | 'cover';
    full?: 'horizontal' | 'vertical' | boolean;
    mask?: boolean;
    size?: 'small' | 'medium' | 'large' | 'thumb';
    src?: string;
    title?: string;
  }
  export class Image extends React.Component<ImageProps, any> {
    render(): JSX.Element;
  }

  interface LabelProps extends React.Props<Label> {
    announce?: boolean;
    labelFor?: string;
    margin?: 'none' | 'small' | 'medium' | 'large';
    size?: 'small' | 'medium';
    truncate?: boolean;
    uppercase?: boolean;
  }
  export class Label extends React.Component<LabelProps, any> {
    render(): JSX.Element;
  }

  interface LayerProps extends React.Props<Layer> {
    align?: 'center' | 'top' | 'bottom' | 'left' | 'right';
    closer?: React.ReactNode | boolean;
    flush?: boolean;
    hidden?: boolean;
    peek?: boolean;
    onClose?: Function;
  }
  export class Layer extends React.Component<LayerProps, any> {
    context: GrommetContextTypes.All;
    render(): JSX.Element;
  }

  interface LegendProps extends React.Props<Legend> {
    activeIndex?: number;
    announce?: boolean;
    onActive?: Function;
    series: Array<{
      label?: string;
      value?: number | React.ReactNode;
      units?: number | React.ReactNode | { prefix?: string, suffix?: string };
      colorIndex?: number | string;
      onClick?: Function;
    }>;
    total?: boolean | React.ReactNode;
    units?: string | {
      prefix?: string;
      suffix?: string;
    };
  }
  export class Legend extends React.Component<LegendProps, any> {
    render(): JSX.Element;
  }

  interface ListProps extends React.Props<List> {
    emptyIndicator?: React.ReactNode;
    onMore?: Function;
    onSelect?: Function;
    selectable?: boolean | 'multiple';
    selected?: number | Array<number>;
  }
  export class List extends React.Component<ListProps, any> {
    context: GrommetContextTypes.Intl;
    render(): JSX.Element;
  }

  interface ListItemProps extends BoxProps<ListItem> {}
  export class ListItem extends React.Component<ListItemProps, any> {
    render(): JSX.Element;
  }

  interface LoginFormProps extends React.Props<LoginForm> {
    align: 'start' | 'center' | 'end' | 'stretch';
    defaultValues?: {
      username?: string;
      rememberMe?: boolean;
    };
    errors?: Array<string>;
    forgotPassword?: React.ReactNode;
    logo?: React.ReactNode;
    onSubmit?: Function;
    onChange?: Function;
    rememberMe?: boolean;
    secondaryText?: string;
    title?: string;
    usernameType?: string;
  }
  export class LoginForm extends React.Component<LoginFormProps, any> {
    render(): JSX.Element
  }

  interface MapProps extends React.Props<Map> {
    active?: string;
    data: {
      categories: Array<{
        id?: string;
        label?: React.ReactNode;
        items: Array<{
          id?: string;
          label?: string;
          node?: React.ReactNode;
        }>;
      }>;
      links: Array<{
        childId: string;
        colorIndex?: string;
        parentId: string;
      }>;
    };
    linkColorIndex?: string;
    onActive?: Function;
    vertical?: boolean;
  }
  export class Map extends React.Component<MapProps, any> {
    context: GrommetContextTypes.Intl;
    render(): JSX.Element
  }

  interface MarkdownProps extends React.Props<Markdown> {
    content?: string;
    components?: {
      props?: {};
    };
  }
  export class Markdown extends React.Component<MarkdownProps, any> {
    render(): JSX.Element;
  }

  interface MenuProps extends BoxProps<Menu> {
    closeOnClick?: boolean;
    dropAlign?: {
      top?: GrommetDropTypes.VERTICAL_ALIGN_OPTIONS;
      bottom?: GrommetDropTypes.VERTICAL_ALIGN_OPTIONS;
      left?: GrommetDropTypes.HORIZONTAL_ALIGN_OPTIONS;
      right?: GrommetDropTypes.HORIZONTAL_ALIGN_OPTIONS;
    };
    dropColorIndex?: string;
    icon?: React.ReactNode;
    id?: string;
    inline?: boolean | 'expand';
    fill?: boolean;
    label?: string;
    size?: 'small' | 'medium' | 'large';
  }
  export class Menu extends React.Component<MenuProps, any> {
    context: GrommetContextTypes.Intl;
    render(): JSX.Element;
  }

  interface MeterProps extends React.Props<Meter> {
    active?: boolean;
    activeIndex?: number;
    a11yTitle?: string;
    colorIndex?: string;
    label?: React.ReactNode;
    max?: number;
    min?: number;
    onActive?: Function;
    series?: Array<{
      colorIndex?: string;
      onClick?: Function;
      label?: string;
      value: number;
    }>;
    size?: 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge';
    stacked?: boolean;
    tabIndex?: string;
    threshold?: number;
    thresholds?: Array<{
      value: number;
      colorIndex?: string;
    }>;
    type?: 'bar' | 'arc' | 'circle' | 'spiral';
    value?: number;
    vertical?: boolean;
    responsive?: boolean;
  }
  export class Meter extends React.Component<MeterProps, any> {
    context: GrommetContextTypes.Intl;
    render(): JSX.Element;
  }

  interface NotificationProps extends BoxProps<Notification> {
    closer?: React.ReactNode | boolean;
    context?: React.ReactNode
    message: string;
    onClose?: Function;
    percentComplete?: number;
    size?: 'small' | 'medium' | 'large';
    state?: string;
    status?: string;
    timestamp?: {};
  }
  export class Notification extends React.Component<NotificationProps, any> {
    context: GrommetContextTypes.Intl;
    render(): JSX.Element;
  }

  interface NumberInputProps extends React.Props<NumberInput> {
    defaultValue?: number;
    disabled?: boolean;
    id?: string;
    max?: number;
    min?: number;
    name?: string;
    onChange?: Function;
    step?: number;
    value?: number | string;
  }
  export class NumberInput extends React.Component<NumberInputProps, any> {
    render(): JSX.Element
  }

  interface ObjectProps extends React.Props<Object>  {
    data: {};
  }
  export class Object extends React.Component<ObjectProps, any> {
    render(): JSX.Element
  }

  interface ParagraphProps extends React.Props<Paragraph> {
    align?: 'start' | 'center' | 'end';
    margin?: 'none' | 'small' | 'medium' | 'large';
    size?: 'small' | 'medium' | 'large' | 'xlarge';
    width?: 'small' | 'medium' | 'large';
  }
  export class Paragraph extends React.Component<ParagraphProps, any> {
    render(): JSX.Element
  }

  interface QuoteProps extends BoxProps<Quote> {
    borderColorIndex?: string;
    size?: 'small' | 'medium' | 'large' | 'full';
    credit?: string | React.ReactElement<any>;
    emphasizeCredit?: boolean;
  }
  export class Quote extends React.Component<QuoteProps, any> {
    render(): JSX.Element
  }

  interface RadioButtonProps extends React.Props<RadioButton> {
    checked?: boolean;
    defaultChecked?: boolean;
    disabled?: boolean;
    id: string;
    label: React.ReactNode;
    name?: string;
    onChange?: Function;
    value?: string;
  }
  export class RadioButton extends React.Component<RadioButtonProps, any> {
    render(): JSX.Element
  }

  interface SearchProps extends React.Props<Search> {
    align?: string;
    defaultValue?: string;
    dropAlign?: {
      top?: GrommetDropTypes.VERTICAL_ALIGN_OPTIONS;
      bottom?: GrommetDropTypes.VERTICAL_ALIGN_OPTIONS;
      left?: GrommetDropTypes.HORIZONTAL_ALIGN_OPTIONS;
      right?: GrommetDropTypes.HORIZONTAL_ALIGN_OPTIONS;
    };
    dropColorIndex?: string;
    fill?: boolean;
    iconAlign?: 'start' | 'end';
    id?: string;
    initialFocus?: boolean;
    inline?: boolean;
    onDOMChange?: Function;
    onSelect?: Function;
    pad?: 'small' | 'medium';
    placeHolder?: string;
    responsive?: boolean;
    size?: 'small' | 'medium' | 'large';
    suggestions?: Array<{
      label?: React.ReactNode;
      value?: any;
    } | string>;
    value?: string;
  }
  export class Search extends React.Component<SearchProps, any> {
    context: GrommetContextTypes.Intl;
    render(): JSX.Element;
  }

  type SearchInputValue = { label?: string; value?: string };
  interface SearchInputProps extends React.Props<SearchInput> {
    defaultValue?: SearchInputValue | string;
    id?: string;
    name?: string;
    onDOMChange?: Function;
    onSelect?: Function;
    placeHolder?: string;
    suggestions?: Array<SearchInputValue | string>;
    value?: SearchInputValue | string;
  }
  export class SearchInput extends React.Component<SearchInputProps, any> {
    context: GrommetContextTypes.Intl;
    render(): JSX.Element;
  }

  interface SectionProps extends BoxProps<Section> {}
  export class Section extends React.Component<SectionProps, any> {
    render(): JSX.Element
  }

  type SelectValueType = { label?: string; value?: any; } | string | number;
  interface SelectProps extends React.Props<Select> {
    inline?: boolean;
    multiple?: boolean;
    onSearch?: Function;
    onChange?: Function;
    placeHolder?: string;
    options: Array<SelectValueType>;
    value?: SelectValueType | Array<SelectValueType>;
  }
  export class Select extends React.Component<SelectProps, any> {
    render(): JSX.Element
  }

  interface SidebarProps extends BoxProps<Sidebar> {
    fixed?: boolean;
    size?: 'xsmall' | 'small' | 'medium' | 'large';
    full?: boolean;
  }
  export class Sidebar extends React.Component<SidebarProps, any> {
    render(): JSX.Element
  }

  interface SkipLinkAnchorProps extends React.Props<SkipLinkAnchor> {
    label: React.ReactNode;
  }
  export class SkipLinkAnchor extends React.Component<SkipLinkAnchorProps, any> {
    render(): JSX.Element
  }

  export class SkipLinks extends React.Component<any, any> {
    context: GrommetContextTypes.Intl;
    render(): JSX.Element;
  }

  interface SocialShareProps extends React.Props<SocialShare> {
    a11yTitle?: string;
    className?: string;
    colorIndex?: string;
    link: string;
    text?: string;
    title?: string;
    type: 'email' | 'facebook' | 'twitter' | 'linkedin' | 'google';
  }
  export class SocialShare extends React.Component<SocialShareProps, any> {
    render(): JSX.Element
  }

  interface SplitProps extends React.Props<Split> {
    children: Array<React.ReactNode>;
    fixed?: boolean;
    flex?: 'left' | 'right' | 'both';
    onResponsive?: Function;
    priority?: 'left' | 'right';
    separator?: boolean;
    showOnResponsive?: 'priority' | 'both';
  }
  export class Split extends React.Component<SplitProps, any> {
    render(): JSX.Element
  }

  interface SunBurstProps extends React.Props<SunBurstProps> {
    a11yTitle?: string;
    active?: Array<number>;
    data?: Array<{
      children?: Array<{}>;
      colorIndex?: string;
      total?: number;
      value: number;
    }>;
    label?: React.ReactNode;
    onActive?: Function;
    onClick?: Function;
    size?: 'small' | 'medium' | 'large' | 'xlarge' | 'full';
  }
  export class SunBurst extends React.Component<SunBurstProps, any> {
    context: GrommetContextTypes.Intl;
    render(): JSX.Element;
  }

  interface SVGIconProps extends React.Props<SVGIcon> {
    a11yTitle?: string;
    colorIndex?: string;
    size?: 'small' | 'medium' | 'large' | 'xlarge' | 'huge';
    type?: 'control' | 'logo' | 'status';
  }
  export class SVGIcon extends React.Component<SVGIconProps, any> {
    context: GrommetContextTypes.Intl;
    render(): JSX.Element;
  }

  interface TabProps {
    title: string;
    active?: boolean;
    id?: string;
    onRequestForActive?: Function;
  }
  export class Tab extends React.Component<TabProps, any> {
    render(): JSX.Element
  }

  interface TableProps extends React.Props<Table> {
    a11yTitle?: string;
    onMore?: Function;
    onSelect?: Function;
    scrollable?: boolean;
    selectable?: boolean | 'multiple';
    selected?: number | Array<number>;
  }
  export class Table extends React.Component<TableProps, any> {
    context: GrommetContextTypes.Intl;
    render(): JSX.Element;
  }

  interface TableHeaderProps extends React.Props<TableHeader> {
    labels: Array<React.ReactNode>;
    onSort?: Function;
    sortAscending?: boolean;
    sortIndex?: number;
  }
  export class TableHeader extends React.Component<TableHeaderProps, any> {
    render(): JSX.Element
  }

  interface TableRowProps extends React.Props<TableRow> {
    onClick?: Function;
  }
  export class TableRow extends React.Component<TableRowProps, any> {
    render(): JSX.Element;
  }

  interface TabsProps extends React.Props<Tabs> {
    activeIndex?: number;
    justify?: 'start' | 'center' | 'end';
    responsive?: boolean;
    onActive?: Function;
  }
  export class Tabs extends React.Component<TabsProps, any> {
    context: GrommetContextTypes.Intl;
    render(): JSX.Element;
  }

  interface TextInputProps extends React.Props<TextInput> {
    defaultValue?: string;
    id?: string;
    name?: string;
    onDOMChange?: Function;
    onSelect?: Function;
    placeHolder?: string;
    suggestions?: Array<string | { label?: React.ReactNode; value?: any }>;
    value?: string;
  }
  export class TextInput extends React.Component<TextInputProps, any> {
    context: GrommetContextTypes.Intl;
    render(): JSX.Element;
  }

  interface TileProps extends BoxProps<Tile> {
    hoverStyle?: 'border' | 'background' | 'none';
    hoverColorIndex?: string;
    hoverBorder?: boolean;
    hoverBorderSize?: 'small' | 'medium' | 'large';
    wide?: boolean;
  }
  export class Tile extends React.Component<TileProps, any> {
    render(): JSX.Element;
  }

  interface TilesProps extends BoxProps<Tiles> {
    fill?: boolean;
    flush?: boolean;
    onMore?: Function;
    onSelect?: Function;
    selectable?: boolean | 'multiple';
    selected?: number | Array<number>;
  }
  export class Tiles extends React.Component<TilesProps, any> {
    context: GrommetContextTypes.Intl;
    render(): JSX.Element;
  }

  // DEPRECATED:
  type TimeStampFIELD_TYPES = 'date' | 'time' | 'year' | 'month' | 'day' | 'hour' | 'minute' | 'second' | 'hours' | 'minutes' | 'seconds';
  interface TimestampProps extends React.Props<Timestamp> {
    align?: 'start' | 'center' | 'end';
    fields?: Array<TimeStampFIELD_TYPES> | TimeStampFIELD_TYPES;
    value: string | {};
  }
  export class Timestamp extends React.Component<TimestampProps, any> {
    render(): JSX.Element;
  }

  interface TipProps extends React.Props<Tip> {
    colorIndex?: string;
    onClose: Function;
    target: string;
  }
  export class Tip extends React.Component<TipProps, any> {
    render(): JSX.Element;
  }

  interface TitleProps extends React.Props<Title> {
    a11yTitle?: string;
    onClick?: Function;
    responsive?: boolean;
    truncate?: boolean;
  }
  export class Title extends React.Component<TitleProps, any> {
    context: GrommetContextTypes.Intl;
    render(): JSX.Element;
  }

  interface ToastProps extends React.Props<Toast> {
    onClose?: Function;
    status?: string;
  }
  export class Toast extends React.Component<ToastProps, any> {
    render(): JSX.Element;
  }

  interface TopologyProps extends React.Props<Topology> {
    a11yTitle?: string;
    links?: Array<{ colorIndex?: string; ids: Array<string>}>;
    linkOffset?: number;
  }
  export class Topology extends React.Component<TopologyProps, any> {
    context: GrommetContextTypes.Intl;
    render(): JSX.Element;
  }

  interface ValueProps extends React.Props<Value> {
    active?: boolean;
    align?: 'start' | 'center' | 'end';
    announce?: boolean;
    colorIndex?: string;
    icon?: React.ReactNode;
    label?: string | React.ReactNode;
    onClick?: Function;
    size?: 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge';
    trendIcon?: React.ReactNode;
    value?: React.ReactNode | number | string;
    units?: React.ReactNode | string;
  }
  export class Value extends React.Component<ValueProps, any> {
    render(): JSX.Element;
  }

  interface VideoProps extends React.Props<Video> {
    align?: {
      bottom?: boolean;
      left?: boolean;
      right?: boolean;
      top?: boolean;
    },
    allowFullScreen?: boolean;
    autoPlay?: boolean;
    colorIndex?: string;
    fit?: 'contain' | 'cover';
    full?: boolean | 'horizontal' | 'vertical';
    loop?: boolean;
    muted?: boolean;
    poster?: string;
    shareLink?: string;
    shareHeadline?: string;
    shareText?: string;
    showControls?: boolean;
    size?: 'small' | 'medium' | 'large';
    timeline?: Array<{
      label?: string;
      time?: number;
    }>;
    title?: React.ReactNode;
  }
  export class Video extends React.Component<VideoProps, any> {
    render(): JSX.Element;
  }

  interface WorldMapProps extends React.Props<WorldMap> {
    series?: Array<{
      continent?: 'NorthAmerica' | 'SouthAmerica' | 'Europe' | 'Africa' | 'Asia' | 'Australia';
      colorIndex?: string;
      onClick?: Function;
    }>;
  }
  export class WorldMap extends React.Component<WorldMapProps, any> {
    render(): JSX.Element;
  }
}
