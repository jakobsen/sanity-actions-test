/* eslint-disable react/prop-types */
import { useId } from "@reach/auto-id";
import { FormField } from "@sanity/base/components";
import PatchEvent, { set, unset } from "@sanity/form-builder/PatchEvent";
import { Box, Card, Flex, Text, TextInput } from "@sanity/ui";
import React from "react";

const MorgenleveringUrl = React.forwardRef((props, ref) => {
  const {
    type,
    value,
    readOnly,
    placeholder,
    markers,
    presence,
    compareValue,
    onFocus,
    onBlur,
    onChange,
  } = props;

  const inputId = useId();

  const handleChange = React.useCallback(
    (event) => {
      const inputValue = event.currentTarget.value;
      onChange(PatchEvent.from(inputValue ? set(inputValue) : unset()));
    },
    [onChange]
  );

  return (
    <FormField
      description={type.description}
      title={type.title}
      compareValue={compareValue}
      __unstable_markers={markers}
      __unstable_presence={presence}
      inputId={inputId}
    >
      <Flex>
        <Flex as={Card} paddingX={3} border borderRight={false} align="center">
          <Text muted size={1}>
            {type.options?.prepend ?? "https://morgenlevering.no"}
          </Text>
        </Flex>
        <Box flex={1}>
          <TextInput
            id={inputId}
            onChange={handleChange}
            value={value || ""}
            readOnly={readOnly}
            placeholder={placeholder}
            onFocus={onFocus}
            onBlur={onBlur}
            ref={ref}
          />
        </Box>
      </Flex>
    </FormField>
  );
});

export default MorgenleveringUrl;
