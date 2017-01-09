import * as React from 'react';
import Accordion from 'grommet/components/Accordion';
import AccordionPanel from 'grommet/components/AccordionPanel';
import Anchor from 'grommet/components/Anchor';
import Animate from 'grommet/components/Animate';
import App from 'grommet/components/App';
import Article from 'grommet/components/Article';
import Box from 'grommet/components/Box';
import Button from 'grommet/components/Button';
import Card from 'grommet/components/Card';
import Carousel from 'grommet/components/Carousel';
import CheckBox from 'grommet/components/CheckBox';
import Columns from 'grommet/components/Columns';
import DateTime from 'grommet/components/DateTime';
import Distribution from 'grommet/components/Distribution';
import Footer from 'grommet/components/Footer';
import Form from 'grommet/components/Form';
import FormattedMessage from 'grommet/components/FormattedMessage';
import FormField from 'grommet/components/FormField';
import FormFields from 'grommet/components/FormFields';
import Grommet from 'grommet/components/Grommet';
import Header from 'grommet/components/Header';
import Heading from 'grommet/components/Heading';
import Headline from 'grommet/components/Headline';
import Hero from 'grommet/components/Hero';
import Image from 'grommet/components/Image';
import Label from 'grommet/components/Label';
import Layer from 'grommet/components/Layer';
import Legend from 'grommet/components/Legend';
import List from 'grommet/components/List';
import ListItem from 'grommet/components/ListItem';
import LoginForm from 'grommet/components/LoginForm';
import Map from 'grommet/components/Map';
import Markdown from 'grommet/components/Markdown';
import Menu from 'grommet/components/Menu';
import Meter from 'grommet/components/Meter';
import Notification from 'grommet/components/Notification';
import NumberInput from 'grommet/components/NumberInput';
import Object from 'grommet/components/Object';
import Paragraph from 'grommet/components/Paragraph';
import Quote from 'grommet/components/Quote';
import RadioButton from 'grommet/components/RadioButton';
import Search from 'grommet/components/Search';
import SearchInput from 'grommet/components/SearchInput';
import Section from 'grommet/components/Section';
import Select from 'grommet/components/Select';
import Sidebar from 'grommet/components/Sidebar';
import SkipLinkAnchor from 'grommet/components/SkipLinkAnchor';
import SkipLinks from 'grommet/components/SkipLinks';
import SocialShare from 'grommet/components/SocialShare';
import Split from 'grommet/components/Split';
import SunBurst from 'grommet/components/SunBurst';
import SVGIcon from 'grommet/components/SVGIcon';
import Tab from 'grommet/components/Tab';
import Table from 'grommet/components/Table';
import TableHeader from 'grommet/components/TableHeader';
import TableRow from 'grommet/components/TableRow';
import Tabs from 'grommet/components/Tabs';
import TextInput from 'grommet/components/TextInput';
import Tile from 'grommet/components/Tile';
import Tiles from 'grommet/components/Tiles';
import Timestamp from 'grommet/components/Timestamp';
import Tip from 'grommet/components/Tip';
import Title from 'grommet/components/Title';
import Toast from 'grommet/components/Toast';
import Topology from 'grommet/components/Topology';
import Value from 'grommet/components/Value';
import Video from 'grommet/components/Video';
import WorldMap from 'grommet/components/WorldMap';

class App extends React.Component<any, any> {
  render() {
    return (
      <App centered inline>
        <Accordion>
          <AccordionPanel heading="First Title">
            <Paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat.
            </Paragraph>
          </AccordionPanel>
          <AccordionPanel heading="Second Title">
            <Paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat.
            </Paragraph>
          </AccordionPanel>
          <AccordionPanel heading="Third Title">
            <Paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat.
            </Paragraph>
          </AccordionPanel>
        </Accordion>
      </App>
    );
  }
}
