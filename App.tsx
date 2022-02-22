import React from "react";
import MainStack from "./app/routes/stacknavigation";
import Timing_animation from "./app/views/basics/timing";
import Decay_animation from "./app/views/basics/decay";
import Event_animation from "./app/views/basics/event";
import FadeInOutOnPress from "./app/views/fadeInOutOnPress/fadeInOutOnPress";
import Interpolation_demo from "./app/views/interpolation/interpolation";
import Loop_demo from "./app/views/loop/loop";
import Sequence_demo from "./app/views/seqence/sequence";
import Parellel_demo from "./app/views/parallel/parallel";
import Stagger_demo from "./app/views/stagger/stagger";
const App=()=>
{
  return(
    <Stagger_demo/>
  );
}

export default App;
