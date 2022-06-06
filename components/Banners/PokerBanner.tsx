import Button from "../Buttons/Button"

const PokerBanner = () => (
  <div>
    <div className="flex flex-col space-y-4">
      <div className="max-w-sm">
        <img src="/assets/poker/poker-1.png" />
      </div>
      <div className="flex-1 space-y-4">
        <div>
          <h2 className="font-bold text-lg">Beans on the Table Poker Tournament</h2>
          <p className="text-slate-500">Join now to get a seat at one the first Beanstalk poker tables (on a farm, in the meta, of course).</p>
        </div>
        <div className="">
          <div className="inline-block space-y-1 mr-4">
            <p className="text-slate-500 uppercase text-xs tracking-wider">Date</p>
            <p className="text-xl">2/26 5:30pm PT</p>
          </div>
          <div className="inline-block space-y-1">
            <p className="text-slate-500 uppercase text-xs tracking-wider">Prize Pool</p>
            <p className="text-xl">600,000 Pods</p>
          </div>
        </div>
        <Button
          target="_blank"
          rel="noreferrer"
          href="https://bean.money/docs/beanstalk.pdf">
          Buy in: 100 Beans
        </Button>
      </div>
    </div>
  </div>
)

export default PokerBanner;