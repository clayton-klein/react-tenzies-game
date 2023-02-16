import "../styles/Die.css";

export default function Die(props) {
  // dynamic styles
  const styles = {
    // use camel-case on the properties names
    backgroundColor: props.isHeld ? "#59E391" : "white",
  };

  return (
    // in this case the name of the attribute MUST be 'style'
    // and it should hold as it's value the variable (styles)
    // containing the object with the CSS properties/styles.
    <div
      className="dieFace"
      style={styles}
      onClick={props.funcHoldDice}
      id={props.id}
    >
      {props.value}
    </div>
  );
}
