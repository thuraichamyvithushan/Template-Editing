function Button() {
    return (
      <div className="button">
        <button> On Click</button>
        <Text/>
      </div>
    );
  }
  
//Nested
function Text() {
    return (
      <div className="button">
        hi hi
      </div>
    );
  }
  

  export default Button;
  
  