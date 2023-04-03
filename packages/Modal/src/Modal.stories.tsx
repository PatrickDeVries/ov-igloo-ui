import React, { useState } from 'react';
import isChromatic from 'chromatic/isChromatic';
import Button from '@igloo-ui/button';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import ChromaticWrapper from '@components/chromaticWrapper';
import Section from '@components/section';
import Mockup from '@components/mockup';

import readme from '../README.md';

import Modal from './Modal';

export default {
  title: 'Components/Modal',
  component: Modal,
  parameters: {
    description: readme,
  },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => {
  const [open, setOpen] = useState(isChromatic());

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <ChromaticWrapper>
      <Button appearance="secondary" onClick={handleOpen}>
        show modal
      </Button>
      <Modal
        {...args}
        isOpen={open}
        onClose={handleClose}
        children={args.children}
      />
    </ChromaticWrapper>
  );
};

export const Overview = Template.bind({});
Overview.args = {
  children: 'Dummy starter component',
  title: 'Modal title',
  isClosable: true,
  isDismissable: false,
};

export const Sizes = () => {
  const [show, setShow] = useState(false);
  const [size, setSize] = useState('');

  const handleOpen = (size: string) => {
    setShow(true);
    setSize(size);
  };

  return (
    <Section>
      <Button appearance="secondary" onClick={() => handleOpen('small')}>
        small
      </Button>
      <Button appearance="secondary" onClick={() => handleOpen('medium')}>
        medium
      </Button>
      <Button appearance="secondary" onClick={() => handleOpen('large')}>
        large
      </Button>
      <Button appearance="secondary" onClick={() => handleOpen('xlarge')}>
        xlarge
      </Button>
      <Modal
        title={`Modal size: ${size}`}
        isDismissable
        isClosable
        isOpen={show}
        // @ts-ignore
        size={size}
        closeBtnAriaLabel={`Close`}
        onClose={() => setShow(false)}
        onAfterClose={() => setSize('')}
      >
        Modal content
      </Modal>
    </Section>
  );
};

export const removeClose = () => {
  const [show, setShow] = useState(isChromatic());

  return (
    <ChromaticWrapper>
      <Button appearance="secondary" onClick={() => setShow(true)}>
        open
      </Button>
      <Modal isDismissable isOpen={show} onClose={() => setShow(false)}>
        Modal content
      </Modal>
    </ChromaticWrapper>
  );
};

export const Example = () => {
  const [show, setShow] = useState(false);

  return (
    <Section>
      <Button appearance="secondary" onClick={() => setShow(true)}>
        open
      </Button>
      <Modal
        isClosable
        isDismissable
        fullContent
        title="I'm a modal"
        size="xlarge"
        isOpen={show}
        onClose={() => setShow(false)}
      >
        <Mockup />
      </Modal>
    </Section>
  );
};

export const NoTitleAndNotClosable = () => {
  const [show, setShow] = useState(false);

  return (
    <Section>
      <Button appearance="secondary" onClick={() => setShow(true)}>
        open
      </Button>
      <Modal
        isDismissable
        fullContent
        size="xlarge"
        isOpen={show}
        onClose={() => setShow(false)}
      >
        <Mockup />
      </Modal>
    </Section>
  );
};

export const WithActions = () => {
  const [show, setShow] = useState(false);

  const handlePrimaryActionClick = () => {
    setShow(false);
  };

  const handleSecondaryActionClick = () => {
    setShow(false);
  };

  return (
    <Section>
      <Button appearance="secondary" onClick={() => setShow(true)}>
        open
      </Button>
      <Modal
        isClosable
        isDismissable
        title="I'm a modal with buttons"
        size="xlarge"
        isOpen={show}
        onClose={() => setShow(false)}
        primaryAction={
          <Button appearance={'primary'} onClick={handlePrimaryActionClick}>
            Done
          </Button>
        }
        secondaryAction={
          <Button appearance={'secondary'} onClick={handleSecondaryActionClick}>
            Cancel
          </Button>
        }
      >
        <p>Static content</p>
      </Modal>
    </Section>
  );
};

export const WithSteps = () => {
  const [show, setShow] = useState(false);
  const SLIDE_NUM = 3;
  const [selected, setSelected] = React.useState(0);

  const handlePageChange = (index: number) => {
    setSelected(index);
  };

  const handlePrimaryActionClick = () => {
    if (selected < SLIDE_NUM - 1) {
      handlePageChange(selected + 1);
    } else {
      setShow(false);
    }
  };

  const handleSecondaryActionClick = () => {
    if (selected > 0) {
      handlePageChange(selected - 1);
    } else {
      setShow(false);
    }
  };

  return (
    <Section>
      <Button appearance="secondary" onClick={() => setShow(true)}>
        open
      </Button>
      <Modal
        isClosable
        isDismissable
        title="I'm a modal with steps"
        size="xlarge"
        isOpen={show}
        onClose={() => setShow(false)}
        primaryAction={
          <Button appearance={'primary'} onClick={handlePrimaryActionClick}>
            {selected < SLIDE_NUM - 1 ? 'Next' : 'Done'}
          </Button>
        }
        secondaryAction={
          <Button appearance={'secondary'} onClick={handleSecondaryActionClick}>
            {selected > 0 ? 'Prev' : 'Cancel'}
          </Button>
        }
        carousel={{
          currentSlide: selected,
          onPageChange: handlePageChange,
          slides: [
            <div style={{ background: 'pink', padding: '4rem' }}>Slide 1</div>,
            <div style={{ background: 'lightBlue', padding: '4rem' }}>
              Slide 2
            </div>,
            <div style={{ background: 'lightGreen', padding: '4rem' }}>
              Slide 3
            </div>,
          ],
        }}
      >
        <p>Static content</p>
      </Modal>
    </Section>
  );
};

export interface keyModalInterface {
  title?: string;
  onAfterClose?: () => void;
}

export const ModalWithParentKey = () => {
  const KeyModal = ({ title, onAfterClose }: keyModalInterface) => {
    const [isOpen, setIsOpen] = useState(!!title);

    const handleOnClose = () => {
      setIsOpen(false);
    };

    const handleOnAfterClose = () => {
      onAfterClose?.();
    };

    return (
      <Modal
        keyValue={title}
        title={title}
        isDismissable={true}
        isClosable={true}
        isOpen={isOpen}
        closeBtnAriaLabel={`Close`}
        onClose={handleOnClose}
        onAfterClose={handleOnAfterClose}
        fullContent
      >
        {title}
      </Modal>
    );
  };

  const [key, setKey] = useState<string | undefined>();

  const clickPrimary = () => {
    setKey('key 1');
  };

  const clickSecondary = () => {
    setKey('key 2');
  };

  const handleOnAfterClose = () => {
    setKey(undefined);
  };

  return (
    <Section>
      <Button appearance="primary" onClick={clickPrimary}>
        key 1
      </Button>
      <Button appearance="secondary" onClick={clickSecondary}>
        key 2
      </Button>

      <KeyModal key={key} title={key} onAfterClose={handleOnAfterClose} />
    </Section>
  );
};

export const ModalWithKey = () => {
  const [key, setKey] = useState<string | undefined>();
  const [isOpen, setIsOpen] = useState(!!key);

  const clickPrimary = () => {
    setKey('key 1');
    setIsOpen(true);
  };

  const clickSecondary = () => {
    setKey('key 2');
    setIsOpen(true);
  };

  const handleOnClose = () => {
    setIsOpen(false);
  };

  return (
    <Section>
      <Button appearance="primary" onClick={clickPrimary}>
        key 1
      </Button>
      <Button appearance="secondary" onClick={clickSecondary}>
        key 2
      </Button>

      <Modal
        keyValue={key}
        title={key}
        isDismissable={true}
        isClosable={true}
        isOpen={isOpen}
        closeBtnAriaLabel={`Close`}
        onClose={handleOnClose}
        fullContent
      >
        {key}
      </Modal>
    </Section>
  );
};

// Chromatic configuration
Sizes.bind({});
Sizes.parameters = {
  chromatic: { disableSnapshot: true },
};

Example.bind({});
Example.parameters = {
  chromatic: { disableSnapshot: true },
};

NoTitleAndNotClosable.bind({});
NoTitleAndNotClosable.parameters = {
  chromatic: { disableSnapshot: true },
};

WithActions.bind({});
WithActions.parameters = {
  chromatic: { disableSnapshot: true },
};

WithSteps.bind({});
WithSteps.parameters = {
  chromatic: { disableSnapshot: true },
};

ModalWithParentKey.bind({});
ModalWithParentKey.parameters = {
  chromatic: { disableSnapshot: true },
};

ModalWithKey.bind({});
ModalWithKey.parameters = {
  chromatic: { disableSnapshot: true },
};
