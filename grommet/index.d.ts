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

  interface AppProps {
    centered?: boolean;
    inline?: boolean;
  }
  export class AppProps extends React.Component<AppProps, any> {
    render(): JSX.Element
  }

  interface ArticleProps extends BoxProps<{ next?: string; previous?: string; }> {
    controls?: boolean;
    onProgress?: Function;
    onSelect?: Function;
    scrollStep?: boolean;
    selected?: number;
  }
  export class Article extends React.Component<ArticleProps, any>{
    render(): JSX.Element
  }

  export interface BoxProps<T> {
    a11yTitle?: string | T;
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
  export class Box extends React.Component<BoxProps<any>, any>{
    render(): JSX.Element
  }

  interface ButtonProps {
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

  interface CardProps extends BoxProps<any> {
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

  interface CarouselProps {
    a11yTitle?: string;
    autoplay?: boolean;
    autoplaySpeed?: number;
    infinite?: boolean;
    persistentNav?: boolean;
  }
  export class Carousel extends React.Component<CarouselProps, any>{
    render(): JSX.Element
  }

  interface chartProps {

  }
  export class chart extends React.Component<chartProps, any>{
    render(): JSX.Element
  }

  interface CheckBoxProps {

  }
  export class CheckBox extends React.Component<CheckBoxProps, any>{
    render(): JSX.Element
  }

  interface ColumnsProps {

  }

  export class Columns extends React.Component<ColumnsProps, any>{
    render(): JSX.Element
  }

  interface DateTimeProps {

  }
  export class DateTime extends React.Component<DateTimeProps, any>{
    render(): JSX.Element
  }

  interface DistributionProps {

  }
  export class Distribution extends React.Component<DistributionProps, any>{
    render(): JSX.Element
  }

  interface FooterProps {

  }
  export class Footer extends React.Component<FooterProps, any>{
    render(): JSX.Element
  }

  interface FormProps {

  }
  export class Form extends React.Component<FormProps, any>{
    render(): JSX.Element
  }

  interface FormattedMessageProps {

  }
  export class FormattedMessage extends React.Component<FormattedMessageProps, any>{
    render(): JSX.Element
  }

  interface FormFieldProps {

  }
  export class FormField extends React.Component<FormFieldProps, any>{
    render(): JSX.Element
  }

  interface FormFieldsProps {

  }
  export class FormFields extends React.Component<FormFieldsProps, any>{
    render(): JSX.Element
  }

  interface GrommetProps {

  }
  export class Grommet extends React.Component<GrommetProps, any>{
    render(): JSX.Element
  }

  interface HeaderProps {

  }
  export class Header extends React.Component<HeaderProps, any>{
    render(): JSX.Element
  }

  interface HeadingProps {

  }
  export class Heading extends React.Component<HeadingProps, any>{
    render(): JSX.Element
  }

  interface HeadlineProps {

  }
  export class Headline extends React.Component<HeadlineProps, any>{
    render(): JSX.Element
  }

  interface HeroProps {

  }
  export class Hero extends React.Component<HeroProps, any>{
    render(): JSX.Element
  }

  interface ImageProps {

  }
  export class Image extends React.Component<ImageProps, any>{
    render(): JSX.Element
  }

  interface LabelProps {

  }
  export class Label extends React.Component<LabelProps, any>{
    render(): JSX.Element
  }

  interface LayerProps {

  }
  export class Layer extends React.Component<LayerProps, any>{
    render(): JSX.Element
  }

  interface LegendProps {

  }
  export class Legend extends React.Component<LegendProps, any>{
    render(): JSX.Element
  }

  interface ListProps {

  }
  export class List extends React.Component<ListProps, any>{
    render(): JSX.Element
  }

  interface ListItemProps {

  }
  export class ListItem extends React.Component<ListItemProps, any>{
    render(): JSX.Element
  }

  interface LoginFormProps {

  }
  export class LoginForm extends React.Component<LoginFormProps, any>{
    render(): JSX.Element
  }

  interface MapProps {

  }
  export class Map extends React.Component<MapProps, any>{
    render(): JSX.Element
  }

  interface MarkdownProps {

  }
  export class Markdown extends React.Component<MarkdownProps, any>{
    render(): JSX.Element
  }

  interface MenuProps {

  }
  export class Menu extends React.Component<MenuProps, any>{
    render(): JSX.Element
  }

  interface MeterProps {

  }
  export class Meter extends React.Component<MeterProps, any>{
    render(): JSX.Element
  }

  interface NotificationProps {

  }
  export class Notification extends React.Component<NotificationProps, any>{
    render(): JSX.Element
  }

  interface NumberInputProps {
    render(): JSX.Element
  }
  export class NumberInput extends React.Component<NumberInputProps, any>{

  }

  interface ObjectProps {

  }
  export class Object extends React.Component<ObjectProps, any>{
    render(): JSX.Element
  }

  interface ParagraphProps {

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

  interface ValueProps {

  }
  export class Value extends React.Component<ValueProps, any>{
    render(): JSX.Element
  }

  interface VideoProps {

  }
  export class Video extends React.Component<VideoProps, any>{
    render(): JSX.Element
  }

  interface WorldMapProps {

  }
  export class WorldMap extends React.Component<WorldMapProps, any>{
    render(): JSX.Element
  }
}
