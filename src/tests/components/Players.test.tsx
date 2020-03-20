import React from "react";
import TestRenderer from 'react-test-renderer';
import { shallow } from "enzyme";
import { ShallowWrapper } from 'enzyme';
import Players from '../../components/Players';
import { PlayersProps } from '../../types/types';
import { DEFAULT_PLAYER1_NAME , DEFAULT_PLAYER2_NAME } from '../../constants/constants';

const data: PlayersProps = {
    onInputChanged: () => {},
    player1: DEFAULT_PLAYER1_NAME,
    player2: DEFAULT_PLAYER2_NAME
}

const component = (
    <Players
        onInputChanged={data.onInputChanged}
        player1={data.player1}
        player2={data.player2}
    />
);

const testData = TestRenderer.create(component);

describe('Players component snapshot', () => {
    it('Players component renders correctly', async () => {
        expect(testData.toJSON()).toMatchSnapshot();
    });
});

describe('Players component tests', () => {
    let wrapper: ShallowWrapper;
    beforeEach(() => {
        wrapper = shallow(component);
    });

    it('there should be two input tags', () => {
        expect(wrapper.find('input')).toHaveLength(2);
    });

    it('there should be correct values in both inputs', () => {
        const el = wrapper.find('input');
        expect(el.first().prop('value')).toEqual(DEFAULT_PLAYER1_NAME);
        expect(el.last().prop('value')).toEqual(DEFAULT_PLAYER2_NAME);
    });
});

