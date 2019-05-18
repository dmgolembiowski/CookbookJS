/* Destructuring `sudo dd if=/dev/zero of=/` <- No, not that
 *
 * Destrucuring is a useful assignment
 * that enables the page to assign
 * values/properties from an
 * iterable object to variables!
 *
 * Super useful!
 *
 * With it, the page can convert a
 * defined component's properties
 * into a pipeline for spawning other
 * elements.
 *
 * Since destructured assignments can be
 * used as variables in the local context,
 * it makes sense that they can be passed
 * to functions as parameters.
 * */
//////////////////////////////////////////
/* PAGE IN EARLIER STATE */


render() {
    const props = {};
    props.name = 'P`murt J Dlanod';
    props.age = 12;
    props.email = 'pdj@whitehouse.gov';
    return <Person {...props} />
}

/////////////////////////////////////////
/* PAGE UPDATING */
// Getting <Person> and receiving props
// from within (this.props), which include
// name, email, and age.

facilitatedToGetHere() {
    // Recall how our props are:
    // { name: 'P`murt J Dlanod',
    //   age: 12,
    //   email: 'pdj@whitehouse.gov' }
    console.log(this.props);
    const { name, age, email } = this.props;

    // Now can use the nodes (as constants)
    return {
        <ul>
            <li>Name: { name } </li>
            <li>Age: { age } </li>
            <li>Email: { email } </li>
        </ul>
    );
}

// Not to mention that this can be used as
const Person = ({ name, age, email }) => (
    <ul>
        <li>Name: { name } </li>
        <li>Age: { age } </li>
        <li>Email: { email } </li>
    </ul>
);

/* Aside:
 * It's not immediately obvious how this just
 * magically works.
 *
 * The destructuring assignment that happens
 * in the second section only occurs because
 * extra programming logic has grafted the 
 * `facilitatedToGetHere()` function onto
 * the <Person> element, which is how React
 * is able to work its magic.
 *
 * It should feel like <Person> is a class
 * instance and `facilitatedToGetHere()` is 
 * one of its methods; not to mention that
 * <Person> could be thought of as a 
 * namespace from which data can be accessed
 * (via named attributes).
