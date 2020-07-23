import React, { useState } from 'react';
import {
	Label,
	Input,
  Stack,
  Dropdown,
  Box,
	Icon,
	Button,
	Grid,
	Text,
	Flex,
	Modal,
} from '../';


function FormStandardDropdown ({ name, nameTwo, description, descriptionTwo, label, value, options = [] }) {

	const [isOpen, setIsOpen] = React.useState(false)

	const [isOpena, setIsOpena] = React.useState(false)

	const renderOptions = () => {
    return options.map(({ value, label, disabled }, index) => (
        <option value={value} key={index}>
          {label}
        </option>
      ))
  }

	return(
	  <Stack gap={4}>
			{/*first modal*/}
			<Modal isOpen={isOpen}>
				<Box padding={1}/>
		    <Box p={2} m={0} width={1} bg="bluebg" border="1px solid" borderColor="primary" borderRadius="base">
		      <Grid gridTemplateColumns='24px auto 24px'>
		        <Icon name="info"/>
		        <Text color="primary" as="infobox">
		          {description}
		        </Text>
		        <Flex alignItems="flex-start">
		          <Button variant="invisible" onClick={() => setIsOpen(false)}>
		              <Icon name="ex"/>
		          </Button>
		        </Flex>
		      </Grid>
		    </Box>
			</Modal>
			{/*second modal*/}
			<Modal isOpen={isOpena}>
				<Box padding={1}/>
		    <Box p={2} m={0} width={1} bg="bluebg" border="1px solid" borderColor="primary" borderRadius="base">
		      <Grid gridTemplateColumns='24px auto 24px'>
		        <Icon name="info"/>
		        <Text color="primary" as="infobox">
		          {descriptionTwo}
		        </Text>
		        <Flex alignItems="flex-start">
		          <Button variant="invisible" onClick={() => setIsOpena(false)}>
		              <Icon name="ex"/>
		          </Button>
		        </Flex>
		      </Grid>
		    </Box>
			</Modal>
	    <Box padding={1}/>
			<Grid gridTemplateColumns='48.75% 48.75%' gridGap='2.5%'>
				<Box>
				{/*first input field*/}
					<Flex alignItems="center">
						<Text>
							{name}
						</Text>
						<Button variant="invisible" onClick={() => setIsOpen(true)}>
							<Flex alignItems="center">
								<Icon name="info"/>
							</Flex>
						</Button>
					</Flex>
					<Box padding={1}/>
					<Input/>
				</Box>
				<Box>
				{/*second input field*/}
					<Flex alignItems="center">
						<Text>
							{nameTwo}
						</Text>
						<Button variant="invisible" onClick={() => setIsOpena(true)}>
							<Flex alignItems="center">
								<Icon name="info"/>
							</Flex>
						</Button>
					</Flex>
					<Box padding={1}/>
					<Dropdown>
						{renderOptions()}
					</Dropdown>
				</Box>
			</Grid>
	  </Stack>
	);
}

export default FormStandardDropdown;
