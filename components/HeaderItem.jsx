const HeaderItem = ({ Icon, title }) => {
  return (
    <div className="group cursor-pointer w-12 sm:w-20 flex flex-col items-center hover:text-white">
      <Icon className="mb-1 group-hover:animate-bounce h-8" />
      <p className="opacity-0 group-hover:opacity-100 tracking-wider">
        {title}
      </p>
    </div>
  );
};

export default HeaderItem;
