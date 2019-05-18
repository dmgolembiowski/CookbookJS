/* The spread operator, which resembles an ellipsis,
 * splits an iterable object into component slices.
 *
 * This is helpful in React, because it's possible
 * to push values into another array, for example
 * when one wants to insert a new element into a 
 * list (with `setState`)
 * */
this.setState({
    items: [
        ...this.state.items, // Collecting the items
        {
            task: 'Make your car payment already', 
                // This will be added to this.state.items
        }
    ]
});

/* The Spread operator, in React, can be used to
 * "spread" attributes (in this case, `props`)
 * in JSX.
 * */
render() {
    const props = {};

    props.name = 'David Golembiowski';
    props.age = 12;
    props.email = 'concern_intensifies@hacked.com';
    return <Person {...props} />;
}

