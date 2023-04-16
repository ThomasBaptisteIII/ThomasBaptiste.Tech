"use client";

const CardHead = ({children}: {children:React.ReactNode; className:String;id:String}) => {
    
  return (
    <>
      {/* Card Background*/}
      <div className="flex flex-col p-2 mb-1 capitalize  font-medium bg-emerald-200 dark:bg-emerald-800 mt-0.5 -m-12  text-xl text-emerald-950 dark:text-emerald-200 overflow-hidden">
    {children}
      </div>
    </>
  );
};

export default CardHead;
