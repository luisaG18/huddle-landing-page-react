import "./Home.scss";
import Header from "../../components/Header/Header";
import Button from "../../components/Button/Button";
import ImgScreenMockups from "../../assets/images/screen-mockups.svg";
import ImgGrowTogether from "../../assets/images/illustration-grow-together.svg";
import ImgFlowingConversation from "../../assets/images/illustration-flowing-conversation.svg";
import ImgYourUsers from "../../assets/images/illustration-your-users.svg";
import IconCommunities from "../../assets/icons/icon-communities.svg";
import IconMessages from "../../assets/icons/icon-messages.svg";

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
        <img
          className="container-section__img"
          src={ImgScreenMockups}
          alt="Image Screen Mockups"
        />
      </section>
      <section className="figures">
        <div className="figures__i">
          <img src={IconCommunities} alt="Icon of communities" />
          <div className="figures__i--span">
            <span>1.4K+</span>
            <span>Communities Formed</span>
          </div>
        </div>
        <div className="figures__i">
          <img src={IconMessages} alt="Icon of messages" />
          <div className="figures__i--span">
            <span>2.7m+</span>
            <span>Messages Sent</span>
          </div>
        </div>
      </section>
      <section className="container-section container-section--diferent container-section--diferent--reverse">
        <img src={ImgGrowTogether} alt="Image Screen Mockups" />
        <div className="container-section--text">
          <h1>Grow Together</h1>
          <span>
            Generate meaningful discussions with your audience and build a
            strong, loyal community. Think of the insightful conversations you
            miss out on with a feedback form.
          </span>
        </div>
      </section>
      <section className="container-section container-section--diferent">
        <img src={ImgFlowingConversation} alt="Image Screen Mockups" />
        <div className="container-section--text">
          <h1>Flowing Conversations</h1>
          <span>
            You wouldn`t paginate a conversation in real life, so why do it
            online? Our threads have just-in-time loading for a more natural
            flow.
          </span>
        </div>
      </section>
      <section className="container-section container-section--diferent container-section--diferent--reverse">
        <img src={ImgYourUsers} alt="Image Screen Mockups" />
        <div className="container-section--text">
          <h1>Your Users</h1>
          <span>
            It takes no time at all to integrate Huddle with your app`s
            authentication solution. This means, once signed in to your app,
            your users can start chatting immediately.
          </span>
        </div>
      </section>
      <section className="container-section container-section--final container-section--diferent">
        <h1>Ready To Build Your Community?</h1>
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
