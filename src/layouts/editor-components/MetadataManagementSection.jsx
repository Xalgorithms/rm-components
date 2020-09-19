import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { deepCopy } from 'xalgo-rule-processor';
import {
  Box,
  Text,
  Button,
  FormStandard,
  FormStandardLabel,
  FormStandardDropdown,
  Flex,
} from '../../components';

export default function MetadataManagementSection({ rule, updateRule, active }) {
  // 0. Fill out the section name.
  const sectionName = 'Rule Metadata';
  const sectionDesc = 'Provide additional information about the authors and entities associated with this rule.';
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

  /**
   "metadata": {
    "rule": {
      "title": "Test",
      "description": "",
      "version": "",
      "criticality": "",
      "entity": [
        {
          "name": "",
          "url": "",
          "id": ""
        }
      ],
    */

  /**
      "authors": [
        {
          "name": "",
          "email": "",
          "solid_profile": "",
          "role": ""
        }
      ],
    }
  },
  */

  // 3. Return a rendering of the component.
  return (
    <Box>
      <Box padding={2} />
      <Text variant="heading">{sectionName}</Text>
      <Box padding={1} />
      <Text>{sectionDesc}</Text>
      <Box padding={2} />

      <Box>
        <div>
          <FormStandardDropdown
            name="Rule Version"
            description="Each rule author or maintainer is responsible for version management based on the 'Semver' industry convention."
            placeholder="1.0.0"
            nameTwo="Xalgo Version"
            descriptionTwo="Which version of Interlibr and Xalgo is this rule expression designed to operate with?"
            options={[{ value: 'last stable', label: 'Last Stable' }]}
          />
          <Box padding={1} />
          <FormStandardDropdown
            name="Rule URL"
            description="Please supply a Web link directly to documentation about this rule."
            placeholder="www.your.organization.org"
            nameTwo="Rule Criticality"
            descriptionTwo="Choose: experimental, in effect or archived"
            options={[
              { value: 'experimental', label: 'Experimental' },
              { value: 'in effect', label: 'in effect' },
              { value: 'archived', label: 'archived' },
            ]}
          />
          <Box padding={1} />
          <Flex justifyContent="flex-end">{/* the modal button will go here */}</Flex>
        </div>
      </Box>
      <Box padding={2} />

      {/* Managment, Authorship and Maintainence */}

      <Box>
        <div>
          <FormStandardLabel
            name="RuleMaker Entity Name"
            description="hello world is asking the following things"
            nameTwo="RuleMaker ID"
            descriptionTwo="hello world is asking the following things"
            value="Vqp4nv8eGprI"
          />
          <Box padding={1} />
          <FormStandard
            name="RuleMaker URL"
            description="hello world is asking the following things"
          />
          <Box padding={1} />
          <FormStandardLabel
            name="Rule Manager Name"
            description="hello world is asking the following things"
            nameTwo="Rule Manager ID"
            descriptionTwo="hello world is asking the following things"
            value="Vqp4nv8eGprI"
          />
          <Box padding={1} />
          <FormStandard
            name="Rule Manager Email"
            description="hello world is asking the following things"
          />
          <Box padding={1} />
          <FormStandardLabel
            name="Rule Author Name"
            description="hello world is asking the following things"
            nameTwo="Rule Author ID"
            descriptionTwo="hello world is asking the following things"
            value="Vqp4nv8eGprI"
          />
          <Box padding={1} />
          <FormStandard
            name="Rule Author Email"
            description="hello world is asking the following things"
          />
          <Box padding={1} />
          <FormStandardLabel
            name="Rule Maintainer Name"
            description="hello world is asking the following things"
            nameTwo="Rule Maintainer ID"
            descriptionTwo="hello world is asking the following things"
            value="Vqp4nv8eGprI"
          />
          <Box padding={1} />
          <FormStandard
            name="Rule Maintainer Email"
            description="hello world is asking the following things"
          />
          <Box padding={1} />
          <Flex justifyContent="flex-end">
            <Box />
            {/* the modal button will go here */}
          </Flex>
        </div>
      </Box>

      <Box padding={2} />

      {/* SAVE BUTTON */}
      {/* 4. In the save method, update the rule state. */}
      <Button
        disabled={!modified}
        onClick={() => {
          const ruleCopy = deepCopy(rule);

          // Modify all necessary fields in the rule.
          //ruleCopy.metadata.rule.title = title;

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
  );
}
