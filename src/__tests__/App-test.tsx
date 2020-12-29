/**
 * @format
 */
import "react-native";
import React from "react";
import { shallow } from "enzyme";
import App from "../App";

// Creating a suite of tests related to running the app
describe("Running the app", () => {
  // Check to see if app renders like it has previously, by snapshotting.
  describe("Rendering the app", () => {
    it("should render correctly", () => {
      // Creates a shallow render of the app.
      const appRendered = shallow(<App />);
      // Expects the snapshot this render makes to match prior snapshot.
      expect(appRendered).toMatchSnapshot();
    });
  });
});
