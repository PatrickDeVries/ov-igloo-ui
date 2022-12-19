import React, { useState, useRef, useEffect, useCallback } from 'react';

import cx from 'classnames';

import Tag from '@igloo-ui/tag';
import Dropdown from '@igloo-ui/dropdown';
import Input from '@igloo-ui/input';
import useClickOutside from './hooks/useClickOutside';
import TagPickerResult from './TagPickerResult';

import './tag-picker.scss';

export enum Keys {
  Comma = ',',
  Enter = 'Enter',
  Space = ' ',
  ArrowDown = 'ArrowDown',
  ArrowUp = 'ArrowUp',
  Escape = 'Escape',
  Tab = 'Tab',
}

export interface TagItem {
  /** Add a colored square instead of an image or an icon */
  color?: string;
  /** Indicate whether the tag should have an error or not */
  hasError?: boolean;
  /** The icon used at the beginning of the Tag */
  icon?: React.ReactElement;
  /** Specify a specific ID */
  id: string;
  /** Specifies the url for the image icon */
  src?: string;
  /** The sub text for the tag */
  subtext?: string;
  /** The text for the tag */
  text: string;
}

export interface TagPickerProps
  extends Omit<React.ComponentProps<'div'>, 'results' | 'onInput'> {
  /** Add a specific class to the tag picker */
  className?: string;
  /** Add a data-test tag for automated tests */
  dataTest?: string;
  /** Determines whether the tag picker is disabled (no interaction possible) */
  disabled?: boolean;
  /** Results of the current search to display
   * in the pop-up when the tag picker is focused */
  results?: TagItem[];
  /** The max height of the tag picker container */
  maxHeight?: string;
  /** The max number of tags that can be selected */
  maxTags?: number;
  /**  Number of characters needed to display the results of the search */
  minSearchLength?: number;
  /** Specify the text to display when there are no results found */
  noResultsText?: string;
  /** Callback to execute on input blur */
  onBlur?: () => void;
  /** Callback to execute on input */
  onInput?: (value: string) => void;
  /** Callback to execute when the max number of tags is reached */
  onMaxTags?: () => void;
  /** Callback to execute on result selection */
  onSelection: (id: string) => void;
  /** Callback to execute on tag removal */
  onTagRemove: (id: string) => void;
  /** Text to display when there are no selectedResults and no input value */
  placeholder?: string;
  /** Selected results to display as tags */
  selectedResults: TagItem[];
  /** KeyCodes used to separate the different tags */
  separators?: (Keys.Enter | Keys.Comma | Keys.Space)[];
}

const TagPicker: React.FunctionComponent<TagPickerProps> = (
  props: TagPickerProps
) => {
  const {
    className,
    dataTest,
    disabled,
    maxHeight,
    maxTags,
    minSearchLength = 2,
    noResultsText,
    onBlur,
    onInput,
    onMaxTags,
    onSelection,
    onTagRemove,
    placeholder,
    results,
    selectedResults,
    separators = [Keys.Enter],
    ...rest
  } = props;

  const defaultKeyboardFocusIndex = -1;
  const inputRef = useRef<HTMLInputElement>(null);
  const tagPickerRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [focused, setFocused] = useState(false);
  const [inputDisabled, setInputDisabled] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [keyboardFocusIndex, setKeyboardFocusIndex] = useState(
    defaultKeyboardFocusIndex
  );
  const [selectedResultsCount, setSelectedResultsCount] = useState(0);

  const hasResults = !!results;
  const shouldShowResults = !disabled && focused && showResults && hasResults;

  const handleChange = ({
    target,
  }: React.ChangeEvent<HTMLInputElement>): void => {
    const { value } = target;

    if (onInput) {
      onInput(value);
    }

    setShowResults(value.length >= minSearchLength);
  };

  const resetSearch = (): void => {
    if (inputRef && inputRef.current) {
      inputRef.current.value = '';
    }
    setShowResults(false);
  };

  const resetKeyboardFocus = useCallback((): void => {
    setKeyboardFocusIndex(defaultKeyboardFocusIndex);
  }, [defaultKeyboardFocusIndex]);

  const handleGainFocus = useCallback((): void => {
    if (!disabled && !inputDisabled && inputRef.current) {
      setFocused(true);

      if (inputRef.current !== document.activeElement) {
        inputRef.current.focus();
      }
    }
  }, [inputDisabled, inputRef, disabled]);

  const handleLoseFocus = (): void => {
    if (focused) {
      setFocused(false);
      resetKeyboardFocus();

      if (inputRef.current) {
        inputRef.current.blur();
      }

      if (onBlur) {
        onBlur();
      }
    }
  };

  useClickOutside([tagPickerRef, dropdownRef], handleLoseFocus);

  const handleResultHover = (): void => {
    resetKeyboardFocus();
  };

  const handleResultSelection = (resultId: string): void => {
    onSelection(resultId);
    resetSearch();

    if (maxTags && selectedResultsCount === maxTags - 1) {
      setInputDisabled(true);
      onMaxTags?.();
    } else {
      handleGainFocus();
      setTimeout(() => {
        inputRef?.current?.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
        });
      }, 5);
    }

    setSelectedResultsCount((prevCount) => prevCount + 1);
  };

  const handleKeyboardSelection = (index: number): void => {
    if (index >= 0 && results && results.length) {
      const focusedResult = results[index];
      handleResultSelection(focusedResult.id);
      resetKeyboardFocus();
    }
  };

  const handleNavigateUp = (): void => {
    if (keyboardFocusIndex >= 0) {
      setKeyboardFocusIndex(keyboardFocusIndex - 1);
    }
  };

  const handleNavigateDown = (): void => {
    if (results && keyboardFocusIndex < results.length - 1) {
      setKeyboardFocusIndex(keyboardFocusIndex + 1);
    }
  };

  const handleTagRemove = (tagId: string): void => {
    setInputDisabled(false);
    setSelectedResultsCount((prevCount) => prevCount - 1);
    onTagRemove(tagId);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    const { value } = e.currentTarget;

    if (
      !hasResults &&
      separators &&
      Object.values<string>(separators).includes(e.key) &&
      value
    ) {
      handleResultSelection(value);
      e.preventDefault();
    }

    switch (e.key) {
      case Keys.Enter:
        if (hasResults) {
          handleKeyboardSelection(keyboardFocusIndex);
        }
        e.preventDefault();
        break;
      case Keys.ArrowUp:
        if (hasResults) {
          handleNavigateUp();
        }
        e.preventDefault();
        break;
      case Keys.ArrowDown:
        if (hasResults) {
          handleNavigateDown();
        }
        e.preventDefault();
        break;
      case Keys.Escape:
        if (hasResults) {
          handleLoseFocus();
        }
        e.preventDefault();
        break;
      case Keys.Tab:
        handleLoseFocus();
        break;
      default:
        break;
    }
  };

  const renderSelectedResults = selectedResults.map((s) => {
    const tagClasses = cx('ids-tag-picker__tag', {
      'ids-tag-picker__tag--error': s.hasError,
    });

    return (
      <Tag
        key={s.id}
        className={tagClasses}
        id={s.id}
        src={s.src}
        color={s.color}
        icon={s.icon}
        dismissible={!disabled}
        appearance="secondary"
        onRemove={handleTagRemove}
      >
        {s.text}
      </Tag>
    );
  });

  const List = ({ items }: { items: TagItem[] | undefined }): JSX.Element => {
    if (items && items.length > 0) {
      const listItem = items.map((item, key) => (
        <li className="ids-tag-picker__results-item" key={item.id}>
          <TagPickerResult
            onHover={handleResultHover}
            onSelect={handleResultSelection}
            result={item}
            focused={keyboardFocusIndex === key}
          />
        </li>
      ));
      return <ul className="ids-tag-picker__results">{listItem}</ul>;
    }

    return <div className="ids-tag-picker__no-results">{noResultsText}</div>;
  };

  const input = (
    <Input
      ref={inputRef}
      className="ids-tag-picker__input"
      disabled={disabled}
      placeholder={selectedResults.length === 0 ? placeholder : ''}
      onChange={handleChange}
      onKeyDown={handleKeyDown}
      onFocus={handleGainFocus}
    />
  );

  const classes = cx(
    className,
    'ids-tag-picker',
    { 'ids-tag-picker--disabled': disabled },
    { 'ids-tag-picker--input-disabled': inputDisabled },
    { 'ids-tag-picker--focused': focused && !inputDisabled },
    {
      'ids-tag-picker--empty': selectedResults.length === 0,
    }
  );

  useEffect(() => {
    if (results && results.length === 0) {
      resetKeyboardFocus();
    }
  }, [results, resetKeyboardFocus]);

  useEffect(() => {
    if (!inputDisabled) {
      handleGainFocus();
    }
  }, [inputDisabled, handleGainFocus]);

  return (
    <div
      ref={tagPickerRef}
      className={classes}
      data-test={dataTest}
      style={{ maxHeight }}
      {...rest}
    >
      {selectedResults.length > 0 && (
        <div
          role="button"
          tabIndex={-1}
          className="ids-tag-picker__selected-results"
          onClick={() => {
            handleGainFocus();
          }}
        >
          {renderSelectedResults}
        </div>
      )}
      {results
        ? !inputDisabled && (
            <Dropdown
              ref={dropdownRef}
              content={<List items={results} />}
              isOpen={shouldShowResults}
              onClose={handleLoseFocus}
              onClick={handleGainFocus}
            >
              {input}
            </Dropdown>
          )
        : !inputDisabled && input}
    </div>
  );
};

export default TagPicker;
