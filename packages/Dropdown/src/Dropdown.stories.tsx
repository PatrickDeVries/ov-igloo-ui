import Button from '@igloo-ui/button';
import Modal from '@igloo-ui/modal';
import { Meta, StoryFn } from '@storybook/react';
import React from 'react';

import readme from '../README.md';

import Dropdown from './Dropdown';

export default {
  title: 'Components/Dropdown',
  component: Dropdown,
  parameters: {
    docs: {
      description: {
        component: readme.replace(/<Example is="custom" \/>/g, '').replace(/<ReferenceLinks is="custom" \/>/g, ''),
      }
    },
    brand: "workleap"
  },
  argTypes: {
    children: {
      control: 'text',
      table: { type: { summary: 'ReactNode' } },
    },
    content: { control: 'text' },
    size: {
      options: ['xsmall', 'small', 'medium', 'large'],
    },
  },
  decorators: [
    (Story) => (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          height: '36rem',
          padding: '1.6rem',
          fontSize: '1.6rem',
        }}
      >
        {Story()}
      </div>
    ),
  ],
} as Meta<typeof Dropdown>;

const List = ({ items }: { items: string[] }) => {
  const listItem = items.map((item, key) => (
    <li className="isb-list__item" key={`items_${key}`}>
      {item}
    </li>
  ));
  return <ul className="isb-list">{listItem}</ul>;
};

const Template: StoryFn<typeof Dropdown> = (args) => {
  const [show, setShow] = React.useState(args.isOpen);
  return (
    <Dropdown
      {...args}
      isOpen={show}
      onClose={() => {
        setShow(false);
      }}
      content={
        <List
          items={['Organization details', 'Billing', 'Permissions', 'Segments']}
        />
      }
    >
      <Button
        appearance="secondary"
        size="small"
        onClick={() => setShow(!show)}
      >
        Settings
      </Button>
    </Dropdown>
  );
};

export const Overview = {
  render: Template,

  args: {
    isOpen: false,
  },
};

export const OnAfterClose = {
  render: Template,

  args: {
    isOpen: false,
    onAfterClose: () => console.log('onAfterClose'),
  },
};

export const DropdownInAModal = () => {
  const [show, setShow] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <Button onClick={() => setShow(true)}>open</Button>
      <Modal isClosable isDismissable isOpen={show} onClose={() => setShow(false)}>
        <div style={{ height: 400 }}>
          Scroll down
          <div style={{ height: 1000, paddingTop: 500 }}>
            <Dropdown
              isOpen={open}
              onClose={() => setOpen(false)}
              isScrollable
              onScrollEnd={() => console.log('end')}
              content={
                <List
                  items={[
                    'Organization details',
                    'Billing',
                    'Permissions',
                    'Segments',
                    'Organization details',
                    'Billing',
                    'Permissions',
                    'Segments',
                    'Organization details',
                    'Billing',
                    'Permissions',
                    'Segments',
                    'Organization details',
                    'Billing',
                    'Permissions',
                    'Segments',
                    'Organization details',
                    'Billing',
                    'Permissions',
                    'Segments',
                  ]}
                />
              }
            >
              <Button
                appearance="secondary"
                size="small"
                onClick={() => setOpen(!open)}
              >
                Settings
              </Button>
            </Dropdown>
          </div>
        </div>
      </Modal>
    </>
  );
};
