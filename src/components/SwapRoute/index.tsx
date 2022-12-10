import { InlineResponseDefaultMarketInfos } from "@jup-ag/api";
import { TokenInfo } from "@solana/spl-token-registry";
import { formatTokens, formatRoute } from "../../utils/swap-route";
import clsx from "clsx";

export const SwapRoute = ({
  selected,
  route,
  tokenMap,
  amount,
  isBestRoute,
}: {
  selected: boolean;
  route: InlineResponseDefaultMarketInfos[];
  tokenMap: Map<string, TokenInfo>;
  amount: number;
  isBestRoute?: boolean;
}) => {
  return (
    <div
      className={clsx(
        "relative",
        selected && "bg-gradient-to-r from-blue-300 to-blue-700",
        "p-[1px] rounded-[6px]",
        "animate-gradient-x"
      )}
    >
      {/* Badge */}
      {isBestRoute && (
        <div className="absolute right-0 top-[-11px] bg-blue-700 text-white text-sm font-normal px-2 py-[1px] rounded-[5px]">
          Best price
        </div>
      )}

      <div className="flex flex-row items-center justify-between bg-neutral-focus rounded-[5px] p-3">
        <div className="text-left	flex flex-col">
          <span className="text-sm font-bold text-white">{formatRoute(route)}</span>
          <span className="text-sm font-normal opacity-80">
            {formatTokens(tokenMap, route)}
          </span>
        </div>
        {/* Output amount */}
        <div className="text-lg font-bold">{amount}</div>
      </div>
    </div>
  );
};
