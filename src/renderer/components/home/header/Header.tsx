import React from "react";
import Logo from '-!react-svg-loader!../../../assets/icons/logo.svg';
import Balance from '-!react-svg-loader!../../../assets/icons/balance.svg';
import AddressSelect from './addressSelect/AddressSelect';
import './header.css';

type HeaderProps = {
    address: Array<String>,
    changeAddress: Function,
    balance: String
}

type HeaderState = {
    address : Array<String>,
}

class Header extends React.Component<HeaderProps, HeaderState> {
    constructor(props:HeaderProps){
        super(props);
        this.state = {
            address: this.props.address
        }
    }

    resetThenSet = (address: String) => {
        this.props.changeAddress(address);
    }

    render() {
        return (
            <div className="px-8 py-12 bg-green-dark   xl:px-10  md:px-10 sm:px-8">
                <div className="xl:w-1200 mx-auto">
                    <div className="bg-gray-darkest lg:flex lg:flex-row py-8 rounded-3xl divide-x md:divide-gray-normal">
                        <div className="px-8 lg:pb-0  xl:w-23/100 lg:w-15/100 lg:pr-8 lg:pl-10 md:w-full md:pb-8 md:px-10 sm:px-8 pb-8 w-full  flex flex-row align-middle content-center inline-block" id='logo'>
                            <Logo />
                            <span className="text-white ml-5 mb-auto mt-auto xl:inline-block lg:hidden md:block font-inter-regular text-xl">ARK Wallet</span>
                        </div>
                        <hr className="mx-10 lg:hidden md:block text-gray-normal block"/>
                        <div className="px-8 lg:pt-0 md:pt-8 xl:w-46/100 lg:w-55/100 lg:px-8 md:w-full md:px-10 sm:px-8 w-full pt-8  inline-block">
                        <AddressSelect 
                            title={this.state.address[0].toString()}
                            list={this.state.address}
                            resetThenSet={this.resetThenSet}
                        />
                        </div>
                        <div className="px-8 lg:pt-0  xl:w-31/100 lg:w-30/100 lg:pl-8 lg:pr-10 md:w-full md:pt-4 md:px-10 sm:px-8 pt-4 flex flex-row inline-block">
                            <div className="w-50 h-50 border-2 border-gray-normal rounded-full xs:flex hidden" id="balance">
                                <Balance  />
                            </div>
                            <div className="pl-2.5">
                                <span className="block text-gray-light pl-2 text-sm font-inter-semi">Balance</span>
                                <span className="block text-white font-lg font-inter-bold pl-2">{this.props.balance.toString() + ' DARK'}</span>
                            </div>
                        </div>
                    </div> 
                </div>
            </div>
        );
    }
}

export default Header;
