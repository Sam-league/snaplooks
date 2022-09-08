// parent component
function Hello1() {
  let jatin = { name: "jatin", bgColor: "skyblue" };
  return (
    <div>
      <Hello2 data={jatin} />
      {/* <Hello2 name={"pankaj"} bgColor={"lightgreen"} />
      <Hello2 name={"aman"} bgColor={"crimson"} />
      <Hello2 name={"Ishik"} bgColor={"cornflowerblue"} /> */}
    </div>
  );
}

// child component
function Hello2(props) {
  return (
    <h1 style={{ backgroundColor: props.data.bgColor }}>{props.data.name}</h1>
  );
}

// function Prop3() {
//   return <Prop4 />;
// }

// function Prop4(props) {
//   return <h1>helo</h1>;
// }

export default Hello1;
