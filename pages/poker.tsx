import { NextPage } from "next";
import Button from "../components/Button";
import ContentWrapper from "../components/ContentWrapper";
import CustomHead from "../components/CustomHead";

const Poker : NextPage = () => (
  <>
    <CustomHead
      title="Beans on the Table Poker Tournament | Beanstalk"
      description="Join now to get a seat at one of Beanstalk's first ever poker tournaments on 3/5 at 5:30 PM PT. 100 Beans to buy in - 600,000+ Pods guaranteed."
      image="https://bean.money/meta/poker-03052022.jpg"
    />
    <ContentWrapper>
      <div className="space-y-6">
        <h1 className="md:text-5xl text-3xl md:leading-[3.5rem]">
          Beans on the Table Poker Tournament
        </h1>
        <div>
          <iframe className="hidden md:block w-full max-w-[560px]" width="560" height="315"  src="https://www.youtube.com/embed/doEEr-qCAb0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
        <p className="text-lg text-slate-500">
          Join now to get a seat at the &apos;Beans on the Table&apos; poker tournament. Registration will be capped at 300 participants.
        </p>
        <div className="md:flex md:flex-row md:space-x-8 md:space-y-0 block space-y-4">
          <div className="space-y-1">
            <p className="text-slate-500 uppercase text-sm tracking-wider">Date</p>
            <p className="text-lg">3/5 5:30 PM PT</p>
          </div>
          <div className="space-y-1">
            <p className="text-slate-500 uppercase text-sm tracking-wider">Prize Pool</p>
            <p className="text-lg">+600,000 Pods & More</p>
          </div>
          <div className="space-y-1">
            <p className="text-slate-500 uppercase text-sm tracking-wider">Buy in</p>
            <p className="text-lg">100 Beans</p>
          </div>
        </div>
        <Button
          primary
          target="_blank"
          rel="noreferrer"
          href="https://app.bean.money/poker">
          Register Here
        </Button>
      </div>
    </ContentWrapper>
  </>
)

export default Poker;