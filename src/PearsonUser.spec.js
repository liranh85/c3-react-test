import React from 'react';
import { shallow } from 'enzyme';
import PearsonUser from './PearsonUser';
import testImage from './test-image.png';
import avatarPlaceholder from './images/avatar-placeholder.png';

describe("PearsonUser", () => {
  let component;
  const minProps = {
    first_name: 'John',
    id: 1,
    last_name: 'Doe',
    onClickDelete: () => {}
  };

  beforeEach(() => {
    component = shallow(<PearsonUser {...minProps} />)
  })

  it('renders without exploding', () => {
    expect(component.length).toEqual(1);
  });

  it('renders an img with the prop avatar as its src', () => {
    component = shallow(
      <PearsonUser
        {...minProps}
        avatar={testImage}
      />
    );
    const imgSrc = component.find('img').prop('src');
    expect(imgSrc).toEqual(testImage);
  });

  it('renders the avatar-placeholder image when an avatar prop was not passed', () => {
    const imgSrc = component.find('img').prop('src');
    expect(imgSrc).toEqual(avatarPlaceholder);
  });

  it('renders a `.user-full-name` with `${first_name} ${last_name}`', () => {
    const { first_name, last_name } = minProps;
    const userFullNameElm = component.find('.user-full-name');
    expect(userFullNameElm.text()).toEqual(`${first_name} ${last_name}`)
  });

  it('renders a `.delete-btn` which calls onClickDelete', () => {
    const mockDeleteFunc = jest.fn();
    component.setProps({ onClickDelete: mockDeleteFunc });
    const button = component.find('.delete-btn');
    button.simulate('click');
    expect(mockDeleteFunc).toHaveBeenCalledTimes(1);
  });
});
