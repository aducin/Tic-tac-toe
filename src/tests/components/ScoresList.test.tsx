import React from "react";
import TestRenderer from 'react-test-renderer';
import { shallow } from "enzyme";
import { ShallowWrapper } from 'enzyme';
import ScoresList from '../../components/ScoresList';
import { ScoresProps } from '../../types/types';
import { DEFAULT_PLAYER1_NAME, DEFAULT_PLAYER2_NAME } from '../../constants/constants';

const data: ScoresProps = {
    scores: [
        {
            duration: 1.577,
            finishedTime: "2020-03-19 10:00",
            moves: 5,
            winner: DEFAULT_PLAYER1_NAME
        },
        {
            duration: 2.252,
            finishedTime: "2020-03-20 10:15",
            moves: 5,
            winner: DEFAULT_PLAYER2_NAME
        }
    ]
}

const component = <ScoresList scores={data.scores} />;

const testData = TestRenderer.create(component);

describe('ScoresList component snapshot', () => {
    it('ScoresList component renders correctly', async () => {
        expect(testData.toJSON()).toMatchSnapshot();
    });
});

describe('AccountDetails tests', () => {
    let wrapper: ShallowWrapper;
    beforeEach(() => {
        wrapper = shallow(component);
    });

    it('there is a table with two rows', () => {
        expect(wrapper.find('table')).toBeTruthy;
        expect(wrapper.find('tbody').first().children()).toHaveLength(2);
    });

    it('there should be a correct duration data displayed in each row', () => {
        const el = wrapper.find('tbody').first().children();
        expect(el.first().children().first().text()).toEqual(DEFAULT_PLAYER1_NAME);
        expect(el.last().children().first().text()).toEqual(DEFAULT_PLAYER2_NAME);
    });
});
