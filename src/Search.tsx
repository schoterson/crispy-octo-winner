

export const Search = (props: { callback: (arg: any) => Function }) => {
	const debouncedChange = props.callback;
	return (<input name="search" onChange={debouncedChange}
		placeholder="Type to open popup, clear to close" />)
}