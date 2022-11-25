import React from 'react';
import isChromatic from 'chromatic/isChromatic';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import Button from '@igloo-ui/button';
import ChromaticWrapper from '@components/chromaticWrapper';

import readme from '../README.md';

import Dialog from './Dialog';

export default {
  title: 'Components/Dialog',
  component: Dialog,
  parameters: {
    description: readme,
    chromatic: { pauseAnimationAtEnd: true },
  },
} as ComponentMeta<typeof Dialog>;

const Template: ComponentStory<typeof Dialog> = (args) => {
  const [open, setOpen] = React.useState(args.isOpen);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <ChromaticWrapper>
      <Button appearance="secondary" onClick={handleOpen}>
        open
      </Button>
      <Dialog {...args} isOpen={open} onDismiss={handleClose} />
    </ChromaticWrapper>
  );
};
export const Overview = Template.bind({});
Overview.args = {
  subTitle: 'This is a sub title',
  title: 'Dialog title',
  dismissText: 'Cancel',
  validateText: 'Confirm',
  isOpen: isChromatic(),
};

export const LongText = () => {
  const [open, setOpen] = React.useState(isChromatic());

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleValidate = () => {
    alert('You said yes');
    setOpen(false);
  };

  return (
    <ChromaticWrapper>
      <Button appearance="secondary" onClick={handleOpen}>
        open
      </Button>
      <Dialog
        title="Please read the question below and answer accordingly"
        subTitle="Do you agree with the terms set by this company?"
        dismissText="No"
        validateText="Yes"
        isOpen={open}
        onDismiss={handleClose}
        onValidate={handleValidate}
      />
    </ChromaticWrapper>
  );
};

export const FewestNumberOfProps = () => {
  const [open, setOpen] = React.useState(isChromatic());

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleValidate = () => {
    alert('You said yes');
    setOpen(false);
  };

  return (
    <ChromaticWrapper>
      <Button appearance="secondary" onClick={handleOpen}>
        open
      </Button>
      <Dialog
        title="I only have a title, a validate action and an X to close this dialog"
        validateText="Confirm"
        isOpen={open}
        onDismiss={handleClose}
        onValidate={handleValidate}
      />
    </ChromaticWrapper>
  );
};
