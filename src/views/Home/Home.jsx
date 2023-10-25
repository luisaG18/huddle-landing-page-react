import "./Home.scss";
import Header from "../../components/Header/Header";
import Button from "../../components/Button/Button";

function Home() {
  return (
    <>
      <Header />
      <section className="container-section">
        <h1>Build The Community Your Fans Will Love</h1>
        <span>
          Huddle re-imagines the way we build communities. You have a voice, but
          so does your audience. Create connections with your users as you
          engage in genuine discussion.
        </span>
        <Button
          text="Get Started For Free"
          backgroundColor="hsl(322, 100%, 66%)"
          boxshadow="4px 4px 5px rgb(178 181 180)"
        />
      </section>
    </>
  );
}

export default Home;
