import React from "react";
import { shallow } from "enzyme";
import PearsonUsers from "./PearsonUsers";

describe("PearsonUsers", () => {
  let component;
  const minProps = {
    onClickDelete: () => {},
    users: []
  };

  beforeEach(() => {
    component = shallow(<PearsonUsers {...minProps} />);
  });

  it('renders without exploding', () => {
    expect(component.length).toEqual(1);
  });

  it('renders a h1', () => {
    const h1 = component.find('h1');
    expect(h1.text()).toEqual('Pearson User Management');
  });
});
