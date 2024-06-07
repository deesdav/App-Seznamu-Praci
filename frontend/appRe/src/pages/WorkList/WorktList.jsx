import { Link } from "react-router-dom";
import WorkLink from "./WorkLink";
import { useState, useEffect } from "react";
import { getAllWorks } from "../../models/Work";

export default function WorkList() {
  const [work, setWork] = useState();
  const [works, setWorks] = useState();
  const [loaded, setLoaded] = useState(false);

  const load = async () => {
    const data = await getAllWorks();
    if (data.status === 500 || data.status === 404) return setLoaded(null);
    if (data.status === 200) {
      console.log(data);
      setWorks(data.payload);
      setLoaded(true);
    }
  };

  useEffect(() => {
    load();
  }, []);

  if (loaded === null) {
    return (
      <>
        <p>Works not found</p>
      </>
    );
  }

  if (!loaded) {
    return (
      <>
        <p>Works are loading</p>
      </>
    );
  }
  let worksList = works
  console.log(worksList)
  return (
    <>
      <h1>Work list</h1>
      {worksList ?
        worksList.map((work, index) => {
          console.log(work);
          return (<WorkLink key={index} id={work._id} name={work.workname} date={work.date} worktypes={work.worktypes} subject={work.subject} abstract={work.abstract}  status={work.status} />
          )
        })
        : <p></p>}
      <Link to={"/"}>
        <p>Go back</p>
      </Link>
    </>
  );
}
