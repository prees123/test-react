const SelectBoxField = async (elm, val, text) => {
	const countrySelect = await waitFor(() => screen.getByTestId(elm));
	const selectButton = countrySelect.parentNode.querySelector('[role=button]');
	UserEvent.click(selectButton);
	const listbox = document.body.querySelector('ul[role=listbox]');
	const listItem = within(listbox).getByText(text);
	UserEvent.click(listItem);
	fireEvent.change(countrySelect, { target: { value: val } });
	fireEvent.blur(countrySelect);
	await waitForElementToBeRemoved(() => document.body.querySelector('ul[role=listbox]'));
};
