import React from 'react';
import { Button } from '@chakra-ui/core';
import { action, actions } from '@storybook/addon-actions';
import { text, boolean } from '@storybook/addon-knobs';

export default {
    title: 'Chakra/Button',
    component: Button
}

export const Success = () => (
   <Button onClick={action('Click handler')} variantColor='green'>
       Success
   </Button>
)

export const Danger = () => (
   <Button {...actions('onClick', 'onMouseOver')} variantColor='red'>
       Danger
   </Button>
)

export const log = () => (
    <Button variantColor='blue' onClick={() => console.log('Button clicked', process.env.STORYBOOK_THEME)}>
        Log
    </Button>
)

export const Knobs = () => (
    <Button variantColor="purple" disabled={boolean('Disabled', false)}>
        {text('Label', 'Button Label')}
    </Button>
)


