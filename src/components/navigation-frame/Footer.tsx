import fida from "../../assets/one.svg";
import Urls from "../../settings/urls";
import { Link } from "../Link";

const ITEMS = [
  { name: "Website", url: Urls.website },
  { name: "Twitter", url: Urls.twitter },
  { name: "Discord", url: Urls.discord },
  { name: "Telegram", url: Urls.telegram },
  { name: "Github", url: Urls.github },
  { name: "NFT", url: Urls.nft },
  { name: "NFT Staking", url: Urls.staking },
  { name: "1SP Staking", url: Urls.staking2 },
  { name: "Farms", url: Urls.farms },
  { name: "Dex", url: Urls.dex },
  { name: "Docs", url: Urls.docs },
  
  
  
  
  
  //{ name: "Old version", url: Urls.oldDex },
  //{ name: "Jupiter", url: Urls.jupiter },
];

const Footer = () => {
  return (
    <footer className="p-10 footer footer-center bg-neutral-focus text-primary-content">
      <div>
        <img src={fida} className="w-10" />
        <p className="font-light">
          Onespace Tech <br />
        </p>
      </div>
      <div>
        <div className="grid gap-4 font-bold grid-col sm:grid-flow-col">
          {ITEMS.map((e, idx) => (
            <Link key={`footer-${idx}`} href={e.url}>
              {e.name}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
