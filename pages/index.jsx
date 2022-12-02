import Anchor from "../components/Anchor";
import HeadInfo from "../components/Head";

export default function Home() {
  return (
    <>
      {/* <HeadInfo>Index</HeadInfo> */}
      <main>
        <h1>This is index</h1>
        <Anchor href={"/tickets"}>Take me to tickets</Anchor>
      </main>
    </>
  );
}

// http://localhost:8080/schedule
// http://localhost:8080/bands
// http://localhost:8080/available-spots
// http://localhost:8080/reserve-spot
// http://localhost:8080/fullfill-reservation
// http://localhost:8080/settings
//
//
//
