import fida from "../../../assets/onespase.svg";

export const Logo = () => {
  return (
    <div className="flex flex-row items-center">
      <img className="h-[50px] mr-3" src={fida} />
      <span className="text-white text-[24px] font-[700] capitalize bg-gradient-to-r bg-clip-text  text-transparent from-blue-300 to-blue-700 animate-text">
        
      </span>
    </div>
  );
};
