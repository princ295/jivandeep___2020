import React, { useEffect } from "react";

const SectionThree = () => {

  const [donerprofile, setDonerProfile] = useEffect()

  return(
    <h1>
        Section Three Componet: {JSON.stringify(donerprofile)}
    </h1>
  )
}
export default SectionThree;
