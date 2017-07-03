// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  Deck,
  Heading,
  Image,
  List,
  ListItem,
  Slide,
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  callbacks: {
    hell: require("../assets/img/callbacks/hell.png")
  },
  backgrounds: {
    shocked1: require("../assets/img/backgrounds/shocked-1.gif"),
    planetHack: require("../assets/img/backgrounds/hack-the-planet.gif"),
    hackGossip: require("../assets/img/backgrounds/hack-gossip.gif"),
  }
};

preloader(images);

const theme = createTheme({
  primary: "white",
  secondary: "#1F2022",
  tertiary: "#03A9FC",
  quartenary: "#CECECE"
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Taming Async in JavaScript
          </Heading>

          <Text margin="10px 0 0" textColor="tertiary" size={6}>
            Exequiel Ceasar Navarrete
          </Text>
        </Slide>

        {/* [Callbacks] ::start */}
        <Slide transition={[]} bgColor="tertiary" textColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="primary">
            Callbacks
          </Heading>
        </Slide>

        <Slide transition={[]} bgColor="secondary" textColor="primary">
          <Appear fid="1">
            <Heading size={1} fit caps lineHeight={1} textColor="primary">
              What are callbacks?
            </Heading>
          </Appear>

          <Appear fid="2">
            <Text margin="10px 0 0" textColor="primary" size={1}>
              A callback function, is a function that is passed to another function as an argument,
              and the callback function is called (or executed) inside the other function.
            </Text>
          </Appear>
        </Slide>

        <Slide transition={[]} bgColor="secondary" textColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="primary">
            Go to the Demo App
          </Heading>
        </Slide>

        <Slide transition={[]} bgColor="secondary" textColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="primary">
            Problems with callbacks?
          </Heading>
        </Slide>

        <Slide transition={[]} bgImage={images.backgrounds.shocked1.replace("/", "")} bgDarken={0.25}>
          <Appear fid="3">
            <Heading size={1} fit caps lineHeight={1} textColor="primary">
              Callback Hell
            </Heading>
          </Appear>

          <Appear fid="4">
            <Image src={images.callbacks.hell}></Image>
          </Appear>
        </Slide>
        {/* [Callbacks] ::end */}

        {/* [Named Functions] ::start */}
        <Slide transition={[]} bgColor="secondary" textColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="primary">
            Solution? Named functions.
          </Heading>
        </Slide>

        <Slide transition={[]} bgColor="secondary" textColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="primary">
            Go to the Demo App
          </Heading>
        </Slide>

        <Slide transition={[]} bgImage={images.backgrounds.planetHack.replace("/", "")} bgDarken={0.25}>
          <Appear fid="5">
            <Heading size={1} fit caps lineHeight={1} textColor="primary">
              Much better than nested callbacks.
            </Heading>
          </Appear>
        </Slide>
        {/* [Named Functions] ::end */}

        {/* [Promises] ::start */}
        <Slide transition={[]} bgColor="tertiary" textColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="primary">
            ES2015 Promises
          </Heading>
        </Slide>

        <Slide transition={[]} bgColor="secondary" textColor="primary">
          <Appear fid="6">
            <Heading size={1} fit caps lineHeight={1} textColor="primary">
              What are promises?
            </Heading>
          </Appear>

          <Appear fid="7">
            <Text margin="10px 0 0" textColor="primary" size={1}>
              A promise represents the eventual result of an asynchronous operation.
            </Text>
          </Appear>
        </Slide>

        <Slide transition={[]} bgColor="secondary" textColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="primary">
            A promise has 3 states
          </Heading>

          <List>
            <Appear fid="8">
              <ListItem>Resolved/Fulfilled</ListItem>
            </Appear>

            <Appear fid="9">
              <ListItem>Rejected</ListItem>
            </Appear>

            <Appear fid="10">
              <ListItem>Pending</ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide transition={[]} bgColor="secondary" textColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="primary">
            Go to the Demo App
          </Heading>
        </Slide>

        <Slide transition={[]} bgImage={images.backgrounds.hackGossip.replace("/", "")} bgDarken={0.25}>
          <Appear fid="11">
            <Heading size={1} fit caps lineHeight={1} textColor="primary">
              Much better than named functions. But it can be better.
            </Heading>
          </Appear>
        </Slide>
        {/* [Promises] ::end */}

        {/* [Async/Await] ::start */}
        <Slide transition={[]} bgColor="tertiary" textColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="primary">
            ES2017 Async/Await
          </Heading>
        </Slide>
        {/* [Async/Await] ::end */}
      </Deck>
    );
  }
}
