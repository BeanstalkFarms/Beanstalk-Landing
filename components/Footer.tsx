const Footer = () => (
  <footer className="my-12">
    <div className="flex flex-row flex-wrap justify-center space-x-8 text-gray-500">
      
      <a href="https://docs.bean.money/almanac" target="_blank" rel="noreferrer">
        Docs
      </a>
      <a href="https://discord.gg/beanstalk" target="_blank" rel="noreferrer">
        Discord
      </a>
      <a href="https://twitter.com/beanstalkmoney" target="_blank" rel="noreferrer">
        Twitter
      </a>
      <a href="https://immunefi.com/bounty/beanstalk" target="_blank" rel="noreferrer">
        Bug Bounty
      </a>
      <a href="https://github.com/beanstalkfarms" target="_blank" rel="noreferrer" className="md:inline-block hidden">
        GitHub
      </a>
      <a href="https://docs.bean.money/almanac/disclosures" target="_blank" rel="noreferrer" className="md:inline-block hidden">
        Disclosures
      </a>
      <a href="https://basin.exchange" target="_blank" rel="noreferrer" className="md:inline-block hidden">
        Basin
      </a>
      <a href="https://evmpipeline.org" target="_blank" rel="noreferrer" className="md:inline-block hidden">
        Pipeline
      </a>
    </div>
  </footer>
);

export default Footer;
