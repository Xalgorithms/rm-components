import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { deepCopy, RuleSchema } from 'xalgo-rule-processor';
import { Box, Text, Button, FormStandard } from '../../components';
import FormTextArea from '../../components/patterns/FormTextArea';

export default function RuleNameSection({ rule, updateRule, active }) {
  // 0. Fill out the section name.
  const sectionName = 'Rule Information';
  const sectionDesc = 'Begin your rule by providing a title and concise description.';
  const [modified, setModified] = useState(false);

  // 1. Set a state for each element that must be filled.
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');

  // Don't touch this.
  if (active && !modified) {
    console.log(`${sectionName} section is being edited.`);

    // 2. Ensure each field is set according to the current rule state.
    if (title !== rule.metadata.rule.title) setTitle(rule.metadata.rule.title);
    if (desc !== rule.metadata.rule.description) setDesc(rule.metadata.rule.description);
  }

  // 3. Return a rendering of the component.
  return (
    <Box>
      <Box padding={2} />
      <Text variant="heading">{sectionName}</Text>
      <Box padding={1} />
      <Text>{sectionDesc}</Text>
      <Box padding={2} />
      <Box>
        <FormStandard
          name="Rule Name (max 120 char)"
          description={RuleSchema.metadata.rule.__title}
          placeholder={RuleSchema.metadata.rule.title}
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
            setModified(true);
          }}
        />
        <Box m={1} />
        <FormTextArea
          name="Short Description (max 240 char)"
          description={RuleSchema.metadata.rule.__description}
          placeholder={RuleSchema.metadata.rule.description}
          value={desc}
          onChange={(e) => {
            setDesc(e.target.value);
            setModified(true);
          }}
        />
        <Box padding={2} />

        {/* SAVE BUTTON */}
        {/* 4. In the save method, update the rule state. */}
        <Button
          disabled={!modified}
          onClick={() => {
            const ruleCopy = deepCopy(rule);

            // Modify all necessary fields in the rule.
            ruleCopy.metadata.rule.title = title;
            ruleCopy.metadata.rule.description = desc;

            // Call the updateRule function with the new content.
            updateRule(ruleCopy);

            // Cleanup and notifications.
            toast(`Saved ${sectionName}`);
            setModified(false);
          }}
        >
          {`Save ${sectionName}`}
        </Button>
        <Box padding={4} />
      </Box>
    </Box>
  );
}
