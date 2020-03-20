import React from "react";
import TestRenderer from 'react-test-renderer';
import { shallow } from "enzyme";
import { ShallowWrapper } from 'enzyme';
import Box from '../../components/Box';
import { BoxItemProps } from '../../types/types';

const boxItemProps: BoxItemProps = {
    data: {
        id: 0,
        item: {
            assigned: true,
            icon: 'ImageO',
            value: 'O',
            winning: false,
            iconWinning: 'ImageOWinning'
        }
    },
    onBoxClicked: () => {}
}

const component = (
    <Box
        data={boxItemProps.data}
        onBoxClicked={boxItemProps.onBoxClicked}
    />
);

const testData = TestRenderer.create(component);

describe('Box component snapshot', () => {
    it('Box component renders correctly', async () => {
        expect(testData.toJSON()).toMatchSnapshot();
    });
});

describe('Box component tests', () => {
    let wrapper: ShallowWrapper;
    beforeEach(() => {
        wrapper = shallow(component);
    });

    it('there is an image when item assigned', () => {
        const el = wrapper.find('img');
        expect(el).toBeTruthy;
        expect(el.prop("src")).toEqual('o_normal.png');
    });

    it('there is no img tag when an item not assigned', () => {
        wrapper.setProps({ assigned: false });
        expect(wrapper.find('img')).toBeFalsy;
    });
});  
