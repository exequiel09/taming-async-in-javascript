// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  Deck,
  Heading,
  Image,
  ListItem,
  List,
  Quote,
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
    hell: require("../assets/callbacks/hell.png")
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

        <Slide transition={[]} bgColor="secondary" textColor="primary">
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
      </Deck>
    );
  }
}
