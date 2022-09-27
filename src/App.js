import { Fragment, useState } from "react";
import Header from "./components/Layout/Header";
import FullProfile from "./components/Profile/FullProfile";
import Logo from "./components/UI/Logo";
import Input from "./components/UI/Input";
import Profiles from "./Submission/Submission.json";

function App() {
  const [searchItem, setSearchItem] = useState("");

  const searchHandler = (event) => {
    setSearchItem(event.target.value);
  };

  const filter = Profiles.filter((val) => {
    if (searchItem === "") {
      return val;
    } else if (
      val.name.toLowerCase().includes(searchItem.toLowerCase()) ||
      val.jobTitle.toLowerCase().includes(searchItem.toLowerCase())
    ) {
      return val;
    }
  });
  const countLength = filter.length;

  return (
    <Fragment>
      <Header countLength={countLength}>
        <Logo />
        <Input onChange={searchHandler} />
      </Header>
      <div className="my-12 flex flex-row gap-12 flex-wrap justify-evenly mx-52">
        {filter.map((profile, i) => (
          <FullProfile
            key={i}
            id={profile.id}
            name={profile.name}
            image={profile.image}
            email={profile.email}
            linkedin={profile.linkedin}
            website={profile.website}
            github={profile.github}
            job={profile.jobTitle}
            location={profile.location}
          />
        ))}
      </div>
    </Fragment>
  );
}

export default App;
