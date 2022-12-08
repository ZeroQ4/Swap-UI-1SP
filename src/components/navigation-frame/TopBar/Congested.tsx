export const Congested = ({ congested }: { congested: boolean }) => {
  if (!congested) {
    return null;
  }

  return (
    <div className="mb-2 font-bold text-center text-white bg-gradient-to-r from-blue-300 to-blue-700 animate-gradient-x">
      Solana is congested, your transaction might fail to send or confirm
    </div>
  );
};
