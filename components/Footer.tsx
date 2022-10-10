const Footer = () => (
  <footer className="my-12">
    <div className="flex flex-row flex-wrap justify-center space-x-8 text-gray-500">
      
      <a href="https://docs.bean.money" target="_blank" rel="noreferrer">
        Docs
      </a>
      <a href="https://discord.gg/beanstalk" target="_blank" rel="noreferrer">
        Discord
      </a>
      <a href="https://twitter.com/beanstalkfarms" target="_blank" rel="noreferrer">
        Twitter
      </a>
      <a href="https://immunefi.com/bounty/beanstalk" target="_blank" rel="noreferrer">
        Bug Bounty
      </a>
      <a href="https://github.com/beanstalkfarms" target="_blank" rel="noreferrer" className="md:inline-block hidden">
        Github
      </a>
      <a href="https://docs.bean.money/disclosures" target="_blank" rel="noreferrer" className="md:inline-block hidden">
        Disclosures
      </a>
    </div>
  </footer>
);

export default Footer;
