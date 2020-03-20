import React from "react";
import TestRenderer from 'react-test-renderer';
import { shallow } from "enzyme";
import { ShallowWrapper } from 'enzyme';
import Message from '../../components/Message';
import { MessageProps } from '../../types/types';
import { MESSAGE_HEADER_SUCCESS, MESSAGE_HEADER_WARNING } from '../../constants/constants';

const data: MessageProps = {
    message: 'You have won',
    onRemoveAlert: () => {},
    success: true,
    warning: false
}

const component = (
    <Message
        message={data.message}
        onRemoveAlert={data.onRemoveAlert}
        success={data.success}
        warning={data.warning}
    />
);
const testData = TestRenderer.create(component);

describe('Message component snapshot', () => {
    it('Message component renders correctly', async () => {
        expect(testData.toJSON()).toMatchSnapshot();
    });
});

describe('AccountDetails tests', () => {
    let wrapper: ShallowWrapper;
    beforeEach(() => {
        wrapper = shallow(component);
    });

    it('there is one h3 tag with a desired value', () => {
        const el = wrapper.find('h3');
        expect(el).toHaveLength(1);
        expect(el.text()).toEqual(MESSAGE_HEADER_SUCCESS);
    });

    it('there is one h4 tag with a desired value', () => {
        const el = wrapper.find('h4');
        expect(el).toHaveLength(1);
        expect(el.text()).toEqual(data.message);
    });

    it('there are alert classes attached to the div tag', () => {
        const el = wrapper.find('div');
        expect(el.hasClass('alert')).toBeTruthy;
        expect(el.hasClass('alert-danger')).toBeFalsy;
        expect(el.hasClass('alert-success')).toBeTruthy;
    });

    it('there should be a different header and alert class when success turned into warning', () => {
        wrapper.setProps({ success: false, warning: true });
        expect(wrapper.find('h3').text()).toEqual(MESSAGE_HEADER_WARNING);
        const el = wrapper.find('div');
        expect(el.hasClass('alert-danger')).toBeTruthy;
        expect(el.hasClass('alert-success')).toBeFalsy;
    }); 
});
