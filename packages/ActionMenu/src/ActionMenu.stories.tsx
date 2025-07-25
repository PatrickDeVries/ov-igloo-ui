import isChromatic from 'chromatic/isChromatic';
import React from 'react';

import Button from '@igloo-ui/button';
import HelperText from '@igloo-ui/helper-text';
import IconButton from '@igloo-ui/icon-button';
import AddSolid from '@igloo-ui/icons/dist/AddSolid';
import Copy from '@igloo-ui/icons/dist/Copy';
import Delete from '@igloo-ui/icons/dist/Delete';
import Kebab from '@igloo-ui/icons/dist/Kebab';

import { Meta, StoryFn } from '@storybook/react';

import ChromaticWrapper from '@components/chromaticWrapper';
import Section from '@components/section';
import readme from '../README.md';

import ActionMenu, { ActionMenuOption, ActionMenuProps } from './ActionMenu';

const actionMenuList: ActionMenuOption[] = [
  {
    label: 'Add Item',
    value: 'add',
  },
  {
    label: 'Delete Item',
    value: 'delete',
    disabled: true,
  },
  {
    label: 'Copy Item',
    value: 'copy',
  },
];

const actionMenuList2: ActionMenuOption[] = [
  {
    label: 'Add Item',
    value: 'add',
    icon: <AddSolid size="medium" />,
  },
  {
    label: 'Delete Item',
    value: 'delete',
    icon: <Delete size="medium" />,
  },
  {
    label: 'Copy Item',
    value: 'copy',
    icon: <Copy size="medium" />,
  },
];

const actionMenuListEvents: ActionMenuOption[] = [
  {
    label: 'Add Item',
    value: 'add',
    icon: <AddSolid size="medium" />,
    onClick: () => {
      alert('"Add Item" was clicked');
    }
  },
  {
    label: 'Delete Item',
    value: 'delete',
    icon: <Delete size="medium" />,
    onClick: () => {
      alert('"Delete Item" was clicked');
    },
    closeOnSelect: false,
  },
  {
    label: 'Copy Item',
    value: 'copy',
    icon: <Copy size="medium" />,
    onClick: () => {
      alert('"Copy Item" was clicked');
    }
  },
];

export default {
  title: 'Components/ActionMenu',
  component: ActionMenu,
  parameters: {
    docs: {
      description: {
        component: readme.replace(/<Example is="custom" \/>/g, '').replace(/<ReferenceLinks is="custom" \/>/g, '').replace(/<Example is="custom" \/>/g, '').replace(/<ReferenceLinks is="custom" \/>/g, ''),
      }
    },
    brand: "workleap"
  },
  argTypes: {
    closeOnSelect: {
      control: { type: 'boolean' },
    },
  },
} as Meta<typeof ActionMenu>;

const kebab = (props: any) => {
  return (
    <IconButton
      icon={<Kebab size="medium" />}
      appearance={{ type: 'ghost', variant: 'secondary' }}
      size="medium"
      {...props}
    />
  );
};

const Template: StoryFn<typeof ActionMenu> = (args) => (
  <ChromaticWrapper>
    <ActionMenu
      {...args}
      style={{ display: 'flex', justifyContent: 'center' }}
    />
  </ChromaticWrapper>
);

export const Overview = {
  render: Template,

  args: {
    options: actionMenuList,
    renderReference: kebab,
    isOpen: isChromatic(),
    position: 'bottom-end',
  },
};

export const WithinContainer = {
  render: (args: ActionMenuProps) => {
    const [openedIndex, setOpenedIndex] = React.useState<number | null>(null);

    return (
      <ChromaticWrapper>
        <div className="isb-action-menu__card"
            style={{zIndex: openedIndex === 0 ? 5 : 0}}>
          <ActionMenu
            {...args}
            onMenuOpen={() => {
              setOpenedIndex(0);
            }}
            onMenuClose={() => {
              setOpenedIndex(null);
            }}
          />
        </div>
        <div className="isb-action-menu__card"
            style={{zIndex: openedIndex === 1 ? 5 : 0}}>
          <ActionMenu
            {...args}
            onMenuOpen={() => {
              setOpenedIndex(1);
            }}
            onMenuClose={() => {
              setOpenedIndex(null);
            }}
          />
        </div>
      </ChromaticWrapper>
    )
  },
  args: {
    options: actionMenuList,
    renderReference: kebab,
    isOpen: isChromatic(),
    position: 'bottom-end',
    disablePortal: true,
  },
};

export const Positioning = () => {
  return (
    <ChromaticWrapper>
      <Section style={{ gap: '2rem' }}>
        <ActionMenu
          options={actionMenuList2}
          position="bottom-end"
          isOpen
          renderReference={(props: any) => {
            return (
              <Button appearance="secondary" {...props}>
                Bottom End
              </Button>
            );
          }}
        />

        <ActionMenu
          options={actionMenuList2}
          position="top"
          isOpen
          renderReference={(props: any) => {
            return (
              <Button appearance="secondary" {...props}>
                Top
              </Button>
            );
          }}
        />

        <ActionMenu
          options={actionMenuList2}
          position="bottom-start"
          isOpen
          renderReference={(props: any) => {
            return (
              <Button appearance="secondary" {...props}>
                Bottom Start
              </Button>
            );
          }}
        />

        <ActionMenu
          options={actionMenuList2}
          position="top-end"
          isOpen
          renderReference={(props: any) => {
            return (
              <Button appearance="secondary" {...props}>
                Top End
              </Button>
            );
          }}
        />

        <ActionMenu
          options={actionMenuList2}
          position="bottom"
          isOpen
          renderReference={(props: any) => {
            return (
              <Button appearance="secondary" {...props}>
                Bottom
              </Button>
            );
          }}
        />

        <ActionMenu
          options={actionMenuList2}
          position="top-start"
          isOpen
          renderReference={(props: any) => {
            return (
              <Button appearance="secondary" {...props}>
                Top Start
              </Button>
            );
          }}
        />
      </Section>
    </ChromaticWrapper>
  );
};

export const Events = () => {
  return (
    <ChromaticWrapper>
      <p style={{ fontSize: '1.4rem' }}>
        The menu close event will not be called when clicking{' '}
        <strong>delete</strong>.
      </p>
      <ActionMenu
        renderReference={kebab}
        options={actionMenuListEvents}
        style={{ display: 'flex', justifyContent: 'center' }}
        onMenuOpen={() => {
          alert('The action menu was opened');
        }}
        onMenuClose={() => {
          alert('The action menu was closed');
        }}
        onAfterMenuClose={() => {
          alert('The action menu was closed and animations are done');
        }}
      />
    </ChromaticWrapper>
  );
};

export const WithFooter = () => {
  return (
    <ChromaticWrapper>
      <ActionMenu
        renderReference={kebab}
        options={actionMenuListEvents}
        footer={<HelperText>Helper text</HelperText>}
      />
    </ChromaticWrapper>
  );
};
