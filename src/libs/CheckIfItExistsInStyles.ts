export const CheckIfItExistsInStyles = (_classes: string[], _styles: {}): string[] => {
	const _checkedClasses = []
	for(const _class of _classes){
		_checkedClasses.push(_styles[_class] || _class)
	}
	return _checkedClasses
}
