import Image from 'next/image';
import HeaderItem from './HeaderItem';
import {
  BadgeCheckIcon,
  CollectionIcon,
  HomeIcon,
  LightningBoltIcon,
  SearchIcon,
  UserIcon,
} from '@heroicons/react/outline';
const Header = () => {
  return (
    <header className="flex flex-col sm:flex-row mt-5 items-center justify-between">
      <div className="flex flex-grow justify-evenly max-w-xl">
        <HeaderItem Icon={HomeIcon} title="Home" />
        <HeaderItem Icon={BadgeCheckIcon} title="Badge" />
        <HeaderItem Icon={LightningBoltIcon} title="Trending" />
        <HeaderItem Icon={SearchIcon} title="Search" />
        <HeaderItem Icon={UserIcon} title="Login" />
        <HeaderItem Icon={CollectionIcon} title="Collection" />
      </div>

      <Image
        className="object-contain"
        width={200}
        height={100}
        src="https://links.papareact.com/ua6"
      />
    </header>
  );
};

export default Header;
