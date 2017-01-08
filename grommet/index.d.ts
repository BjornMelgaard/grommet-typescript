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

declare namespace Grommet {
  type RestProps = any;

  interface AccordionProps extends React.Props<Accordion> {
    active?: number | Array<number>;
    animate?: boolean;
    onActive?: Function;
    openMulti?: boolean;
  }
  export class Accordion extends React.Component<AccordionProps, any> {
    render(): JSX.Element
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
    render(): JSX.Element
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
    render(): JSX.Element
  }

  type AnimationType = 'fade' | 'slide-up' | 'slide-down' | 'slide-left' | 'slide-right' | 'jiggle';
  type AnimationDetails = {
    animation: AnimationType;
    duration?: number;
    delay?: number;
  };
  interface AnimateProps extends React.Props<Animate> {
    component?: string | Function;
    enter?: AnimationDetails;
    keep?: boolean;
    leave: AnimationDetails;
    visible?: 'scroll' | boolean;
  }
  export class Animate extends React.Component<AnimateProps, any> {
    render(): JSX.Element
  }

  interface AppProps extends React.Props<App> {
    centered?: boolean;
    inline?: boolean;
  }
  export class App extends React.Component<AppProps, any> {
    render(): JSX.Element
  }

  interface ArticleProps extends BoxProps<Article> {
    controls?: boolean;
    onProgress?: Function;
    onSelect?: Function;
    scrollStep?: boolean;
    selected?: number;
  }
  export class Article extends React.Component<ArticleProps, any>{
    render(): JSX.Element
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
  export class Box extends React.Component<BoxProps<Box>, any>{
    render(): JSX.Element
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
  export class Button extends React.Component<ButtonProps, any>{
    render(): JSX.Element
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
  export class Card extends React.Component<CardProps, any>{
    render(): JSX.Element
  }

  interface CarouselProps extends React.Props<Carousel> {
    a11yTitle?: string;
    autoplay?: boolean;
    autoplaySpeed?: number;
    infinite?: boolean;
    persistentNav?: boolean;
  }
  export class Carousel extends React.Component<CarouselProps, any>{
    render(): JSX.Element
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
  export class CheckBox extends React.Component<CheckBoxProps, any>{
    render(): JSX.Element
  }

  interface ColumnsProps extends React.Props<Columns> {
    justify?: 'start' | 'center' | 'between' | 'end';
    margin?: 'small' | 'medium' | 'large';
    masonry?: boolean;
    maxCount?: number;
    responsive?: boolean;
    size?: 'small' | 'medium' | 'large';
  }

  export class Columns extends React.Component<ColumnsProps, any>{
    render(): JSX.Element
  }

  interface DateTimeProps extends React.Props<DateTime> {
    format?: string;
    id?: string;
    name?: string;
    onChange?: Function;
    step?: number;
    value?: string | {};
  }
  export class DateTime extends React.Component<DateTimeProps, any>{
    render(): JSX.Element
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
  export class Distribution extends React.Component<DistributionProps, any>{
    render(): JSX.Element
  }

  interface FooterProps extends BoxProps<Footer> {
    fixed?: boolean;
    float?: boolean;
    primary?: boolean;
    size: 'small' | 'medium' | 'large';
  }
  export class Footer extends React.Component<FooterProps, any>{
    render(): JSX.Element
  }

  type FormPadding = 'none' | 'small' | 'medium' | 'large';
  interface FormProps extends React.Props<Form> {
    compact?: boolean;
    fill?: boolean;
    onSubmit: Function;
    pad?: FormPadding | { horizontal?: FormPadding; vertical?: FormPadding };
  }
  export class Form extends React.Component<FormProps, any>{
    render(): JSX.Element
  }

  interface FormattedMessageProps extends React.Props<FormattedMessage> {
    id: string;
    defaultMessage?: string;
  }
  export class FormattedMessage extends React.Component<FormattedMessageProps, any>{
    render(): JSX.Element
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
  export class FormField extends React.Component<FormFieldProps, any>{
    render(): JSX.Element
  }

  interface FormFieldsProps extends React.Props<FormFields> {
    children?: React.ReactNode;
    className?: string;
  }
  export class FormFields extends React.Component<FormFieldsProps, any>{
    render(): JSX.Element
  }

  interface GrommetProps extends React.Props<Grommet> {
    children?: React.ReactNode;
    className?: string;
  }
  export class Grommet extends React.Component<GrommetProps, any>{
    render(): JSX.Element
  }

  interface HeaderProps extends BoxProps<Header> {
    fixed?: boolean;
    float?: boolean;
    size?: 'small' | 'medium' | 'large';
    splash?: boolean;
  }
  export class Header extends React.Component<HeaderProps, any>{
    render(): JSX.Element
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
  export class Heading extends React.Component<HeadingProps, any>{
    render(): JSX.Element
  }

  interface HeadlineProps extends React.Props<Headline> {
    align: 'start' | 'center' | 'end';
    margin?: 'none' | 'small' | 'medium' | 'large';
    size?: 'small' | 'medium' | 'large' | 'xlarge';
    strong?: boolean;
  }
  export class Headline extends React.Component<HeadlineProps, any>{
    render(): JSX.Element
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
  export class Hero extends React.Component<HeroProps, any>{
    render(): JSX.Element
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
  export class Image extends React.Component<ImageProps, any>{
    render(): JSX.Element
  }

  interface LabelProps extends React.Props<Label> {

  }
  export class Label extends React.Component<LabelProps, any>{
    render(): JSX.Element
  }

  interface LayerContext {
    router?: any;
    history?: {};
    intl?: {};
    store?: {};
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
    context: LayerContext
    render(): JSX.Element
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
  export class Legend extends React.Component<LegendProps, any>{
    render(): JSX.Element
  }

  interface ListContext {
    intl: {};
  }
  interface ListProps extends React.Props<List> {
    emptyIndicator?: React.ReactNode;
    onMore?: Function;
    onSelect?: Function;
    selectable?: boolean | 'multiple';
    selected?: number | Array<number>;
  }
  export class List extends React.Component<ListProps, any> {
    context: ListContext;
    render(): JSX.Element;
  }

  interface ListItemProps extends BoxProps<ListItem> {}
  export class ListItem extends React.Component<ListItemProps, any>{
    render(): JSX.Element
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

  interface MapContext {
    intl: {};
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
    context: MapContext;
    render(): JSX.Element
  }

  interface MarkdownProps extends React.Props<Markdown> {
    content?: string;
    components?: {
      props?: {};
    };
  }
  export class Markdown extends React.Component<MarkdownProps, any>{
    render(): JSX.Element;
  }

  interface MenuContext {
    history?: any;
    intl?: any;
    router?: any;
    store?: any;
  }
  type VERTICAL_ALIGN_OPTIONS = 'top' | 'bottom';
  type HORIZONTAL_ALIGN_OPTIONS = 'right' | 'left';
  interface MenuProps extends BoxProps<Menu> {
    closeOnClick?: boolean;
    dropAlign?: {
      top?: VERTICAL_ALIGN_OPTIONS;
      bottom?: VERTICAL_ALIGN_OPTIONS;
      left?: HORIZONTAL_ALIGN_OPTIONS;
      right?: HORIZONTAL_ALIGN_OPTIONS;
    },
    dropColorIndex?: string;
    icon?: React.ReactNode;
    id?: string;
    inline?: boolean | 'expand';
    fill?: boolean;
    label?: string;
    size?: 'small' | 'medium' | 'large';
  }
  export class Menu extends React.Component<MenuProps, any> {
    context: MenuContext;
    render(): JSX.Element;
  }

  interface MeterProps extends React.Props<Meter> {

  }
  export class Meter extends React.Component<MeterProps, any>{
    render(): JSX.Element
  }

  interface NotificationProps extends React.Props<Notification> {

  }
  export class Notification extends React.Component<NotificationProps, any> {
    render(): JSX.Element
  }

  interface NumberInputProps extends React.Props<NumberInput> {

  }
  export class NumberInput extends React.Component<NumberInputProps, any>{
    render(): JSX.Element
  }

  interface ObjectProps extends React.Props<Object>  {
    data: {};
  }
  export class Object extends React.Component<ObjectProps, any>{
    render(): JSX.Element
  }

  interface ParagraphProps extends React.Props<Paragraph> {
    align?: 'start' | 'center' | 'end';
    margin?: 'none' | 'small' | 'medium' | 'large';
    size?: 'small' | 'medium' | 'large' | 'xlarge';
    width?: 'small' | 'medium' | 'large';
  }
  export class Paragraph extends React.Component<ParagraphProps, any>{
    render(): JSX.Element
  }

  interface QuoteProps {

  }
  export class Quote extends React.Component<QuoteProps, any>{
    render(): JSX.Element
  }

  interface RadioButtonProps {

  }
  export class RadioButton extends React.Component<RadioButtonProps, any>{
    render(): JSX.Element
  }

  interface SearchProps {

  }
  export class Search extends React.Component<SearchProps, any>{
    render(): JSX.Element
  }

  interface SearchInputProps {

  }
  export class SearchInput extends React.Component<SearchInputProps, any>{
    render(): JSX.Element
  }

  interface SectionProps {

  }
  export class Section extends React.Component<SectionProps, any>{
    render(): JSX.Element
  }

  interface SelectProps {

  }
  export class Select extends React.Component<SelectProps, any>{
    render(): JSX.Element
  }

  interface SidebarProps {

  }
  export class Sidebar extends React.Component<SidebarProps, any>{
    render(): JSX.Element
  }

  interface SkipLinkAnchorProps {

  }
  export class SkipLinkAnchor extends React.Component<SkipLinkAnchorProps, any>{
    render(): JSX.Element
  }

  interface SkipLinksProps {

  }
  export class SkipLinks extends React.Component<SkipLinksProps, any>{
    render(): JSX.Element
  }

  interface SocialShareProps {

  }
  export class SocialShare extends React.Component<SocialShareProps, any>{
    render(): JSX.Element
  }

  interface SplitProps {

  }
  export class Split extends React.Component<SplitProps, any>{
    render(): JSX.Element
  }

  interface SunBurstProps {

  }
  export class SunBurst extends React.Component<SunBurstProps, any>{
    render(): JSX.Element
  }

  interface SVGIconProps {

  }
  export class SVGIcon extends React.Component<SVGIconProps, any>{
    render(): JSX.Element
  }

  interface TabProps {

  }
  export class Tab extends React.Component<TabProps, any>{
    render(): JSX.Element
  }

  interface TableProps {

  }
  export class Table extends React.Component<TableProps, any>{
    render(): JSX.Element
  }

  interface TableHeaderProps {

  }
  export class TableHeader extends React.Component<TableHeaderProps, any>{
    render(): JSX.Element
  }

  interface TableRowProps {

  }
  export class TableRow extends React.Component<TableRowProps, any>{
    render(): JSX.Element
  }

  interface TabsProps {

  }
  export class Tabs extends React.Component<TabsProps, any>{
    render(): JSX.Element
  }

  interface TBDProps {

  }
  export class TBD extends React.Component<TBDProps, any>{
    render(): JSX.Element
  }

  interface TextInputProps {

  }
  export class TextInput extends React.Component<TextInputProps, any>{
    render(): JSX.Element
  }

  interface TileProps {

  }
  export class Tile extends React.Component<TileProps, any>{
    render(): JSX.Element
  }

  interface TilesProps {

  }
  export class Tiles extends React.Component<TilesProps, any>{
    render(): JSX.Element
  }

  interface TimestampProps {

  }
  export class Timestamp extends React.Component<TimestampProps, any>{
    render(): JSX.Element
  }

  interface TipProps {

  }
  export class Tip extends React.Component<TipProps, any>{
    render(): JSX.Element
  }

  interface TitleProps {

  }
  export class Title extends React.Component<TitleProps, any>{
    render(): JSX.Element
  }

  interface ToastProps {

  }
  export class Toast extends React.Component<ToastProps, any>{
    render(): JSX.Element
  }

  interface TopologyProps {

  }
  export class Topology extends React.Component<TopologyProps, any>{
    render(): JSX.Element
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
  export class Value extends React.Component<ValueProps, any>{
    render(): JSX.Element
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
  export class Video extends React.Component<VideoProps, any>{
    render(): JSX.Element
  }

  interface WorldMapProps extends React.Props<WorldMap> {
    series?: Array<{
      continent?: 'NorthAmerica' | 'SouthAmerica' | 'Europe' | 'Africa' | 'Asia' | 'Australia';
      colorIndex?: string;
      onClick?: Function;
    }>;
  }
  export class WorldMap extends React.Component<WorldMapProps, any>{
    render(): JSX.Element
  }
}
