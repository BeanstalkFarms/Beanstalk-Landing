import { useState } from "react";
import ContentWrapper from "../components/ContentWrapper";

const PARAMS = {
  BONUS: 3 // percent
}

const DAYS = [
  "Day 1 - 5/2",
  "Day 2 - 5/3",
  "Day 3 - 5/4",
  "Day 4 - 5/5",
  "Day 5 - 5/6",
  "Day 6 - 5/7",
  "Day 7 - 5/8",
]

const Calculator : React.FC = () => {
  const [day, setDay] = useState(0);
  const [weather, setWeather] = useState(20);
  const [_amount, setAmount] = useState<number | undefined>(undefined);
  const amount = _amount || 0;

  const bonus = PARAMS.BONUS * (DAYS.length - day);
  const bonusAmount = amount * bonus/100;
  const sownAmount = amount * (1 + bonus/100);
  const pods = sownAmount * (1 + weather/100);
  const ror = amount > 0 ? (pods / amount) - 1 : 0;

  return (
    <ContentWrapper variant="farm">
      <h1 className="text-4xl font-bold">Barn Raise: Bidding Calculator</h1>
      <div className="space-y-2">
        <div className={"w-full flex flex-row justify-between"}>
          <span>Bid Day</span>
          <select
            className="w-32 text-right font-mono"
            value={day} 
            onChange={e => setDay(parseInt(e.target.value))}>
            {DAYS.map((d, index) => (
              <option key={index} value={index}>
                {d}
              </option>
            ))}
          </select>
        </div>
        <div className={"w-full flex flex-row justify-between"}>
          <span>Weather</span>
          <div>
            <input
              className="w-32 text-right font-mono"
              type="number"
              min={0}
              max={100}
              value={weather}
              onChange={e => setWeather(parseInt(e.target.value))}
            />
            %
          </div>
        </div>
        <div className={"w-full flex flex-row justify-between"}>
          <span>Amount</span>
          <div>
            <input
              className="w-48 text-right font-mono"
              type="number"
              min={0}
              value={_amount}
              placeholder="Enter an amount"
              onChange={e => setAmount(parseFloat(e.target.value))}
            />
            USDC
          </div>
        </div>
        <div>
          <hr className="my-6" />
        </div>
        <div className={"w-full flex flex-row justify-between"}>
          <span>Bonus</span>
          <div>
            <span className="text-green-500">
              {bonus}% &rarr; +{bonusAmount.toLocaleString()} USDC
            </span>
          </div>
        </div>
        <div className={"w-full flex flex-row justify-between"}>
          <span>Amount Sown</span>
          <div>
            <span className="text-green-500">
              {sownAmount.toLocaleString()} USDC
            </span>
          </div>
        </div>
        <div className={"w-full flex flex-row justify-between"}>
          <span>Pods Received</span>
          <div>
          <span className="text-green-500">
            {(pods).toLocaleString()} Pods
          </span>
          </div>
        </div>
        <div className={"w-full flex flex-row justify-between"}>
          <span>Rate of Return</span>
          <div>
          <span className="text-green-500">
            {(ror*100).toLocaleString()}%
          </span>
          </div>
        </div>
      </div>
    </ContentWrapper>  
  );
}

export default Calculator