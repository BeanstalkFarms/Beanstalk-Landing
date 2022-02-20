import { NextPage } from "next";
import Button from "../components/Button";
import ContentWrapper from "../components/ContentWrapper";
import CustomHead from "../components/CustomHead";

const Poker : NextPage = () => (
  <>
    <CustomHead
      title="Beanstalk | A Decentralized Credit Based Stablecoin Protocol"
      description="Beanstalk is a decentralized, credit-based stablecoin protocol that is built on Ethereum. Beanstalk uses credit instead of collateral to create a decentralized, liquid, blockchain-native asset, which is stable relative to the value of a non-blockchain-native asset."
    />
    <ContentWrapper>
      <div className="space-y-6">
        <h1 className="text-5xl font-normal leading-[3.5rem]">
          Beans on the Table Poker Tournament
        </h1>
        <p className="text-lg text-slate-500">Join now to get a seat at one the first Beanstalk poker tables (on a farm, in the meta, of course).</p>
        <div className="">
          <div className="inline-block space-y-2 mr-6">
            <p className="text-slate-500 uppercase text-md tracking-wider">Date</p>
            <p className="text-xl">2/26 5:30pm PT</p>
          </div>
          <div className="inline-block space-y-2">
            <p className="text-slate-500 uppercase text-md tracking-wider">Prize Pool</p>
            <p className="text-xl">600,000 Pods</p>
          </div>
        </div>
        <Button
          primary
          target="_blank"
          rel="noreferrer"
          href="https://app.bean.money/poker">
          Buy in &middot; 100 Beans
        </Button>
      </div>
    </ContentWrapper>
  </>
)

export default Poker;