import { NextPage } from "next";
import Button from "../components/Button";
import ContentWrapper from "../components/ContentWrapper";
import CustomHead from "../components/CustomHead";

const Poker : NextPage = () => (
  <>
    <CustomHead
      title="Beanstalk | A Decentralized Credit Based Stablecoin Protocol"
      description="Beanstalk is a decentralized credit-based stablecoin protocol that is built on Ethereum. Beanstalk uses credit instead of collateral to create a decentralized, liquid, blockchain-native asset, which is stable relative to the value of a non-blockchain-native asset."
    />
    <ContentWrapper>
      <div className="space-y-6">
        <h1 className="text-5xl font-normal leading-[3.5rem]">
          Beans on the Table Poker Tournament
        </h1>
        <div>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/PnP7FML-KoM" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
        <p className="text-lg text-slate-500">
          Join now to get a seat at one of Beanstalk's first ever poker tournaments.
        </p>
        {/* <p>
        The Beans on the Table Poker Tournament is set to run on 3/5 at 5:30 PM PT/8:30 PM ET. Registration will be capped at 300 participants, and the buy in for the tournament is 100 Beans (or ETH-equivalent) per player. The tournament is expected to run for 3-4+ hours. In order to participate: (1) register on bean.money, (2) create a user profile on the poker platform, (3) join the club lobby on the poker platform, and (4) finalize your transaction details. Anyone is welcome to join the tournament, listen to live updates, and become a part of the Beanstalk community.
        </p> */}
        <div className="md:flex md:flex-row md:space-x-8 md:space-y-0 block space-y-4">
          <div className="space-y-1">
            <p className="text-slate-500 uppercase text-sm tracking-wider">Date</p>
            <p className="text-lg">3/5 5:30 PM PT</p>
          </div>
          <div className="space-y-1">
            <p className="text-slate-500 uppercase text-sm tracking-wider">Prize Pool</p>
            <p className="text-lg">600,000+ Pods & More</p>
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