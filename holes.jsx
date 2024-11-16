
import Hole from "./hole";

export default function Holes({num}) {
  return (
    <>
      <p>{num}</p>
      <div className="row">
        <Hole id={1} num={num}/>
        <Hole id={2} num={num}/>
        <Hole id={3} num={num}/>
      </div>
      <div className="row">
        <Hole id={4} num={num}/>
        <Hole id={5} num={num}/>
        <Hole id={6} num={num}/>
      </div>
      <div className="row">
        <Hole id={7} num={num}/>
        <Hole id={8} num={num}/>
        <Hole id={9} num={num}/>
      </div>
    </>
  );
}
