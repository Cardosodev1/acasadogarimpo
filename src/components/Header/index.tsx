import Image from 'next/image';
import Logo from '../../../public/LogoCasaDoGarimpo.png';
import Cart from '../../../public/Shopping cart.svg';
import Search from '../../../public/Search.svg';
import Link from 'next/link';

export default function Header() {
    return (
        <header className="flex justify-between items-center p-2 bg-white drop-shadow-sm md:px-10">
            <Link href="/">
                <Image src={Logo} alt="Logo da Casa do Garimpo" className="w-28 md:w-36" priority />
            </Link>
            <div className="relative flex-1 mx-4 sm:block max-w-lg">
                <input 
                    type="text" 
                    placeholder="Pesquise os produtos que procura" 
                    className="w-full p-3 pl-4 pr-10 border border-gray-300 rounded-xl focus:outline-none focus:ring-2"
                />
                <Image 
                    src={Search} 
                    alt="Ícone de busca" 
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 cursor-pointer"
                />
            </div>
            <div className="flex items-center space-x-4">
                <Link href="/cart" className="relative">
                    <Image src={Cart} alt="Carrinho de compras" className="w-6 h-6 md:w-8 md:h-8" />
                </Link>
            </div>
        </header>
    );
}