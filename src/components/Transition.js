import React from "react";
import posed, { PoseGroup } from "react-pose";

const timeout = 0;

class Transition extends React.PureComponent {
  render() {
    const { children, location } = this.props;

    const RoutesContainer = posed.div({
      enter: {
        opacity: 1,
        //filter: "blur(0px)",
        // y: 0,
        // x: 0,
        // scale: 1,
        delay: timeout,
        delayChildren: timeout
      },
      exit: {
        opacity: 0,
        //filter: "blur(20px)",
        // x: 0,
        // y: 0,
        // scale: 0.8,
      }
    });

    return (
      <PoseGroup>
        <RoutesContainer key={location.pathname}>{children}</RoutesContainer>
      </PoseGroup>
    );
  }
}

export default Transition;