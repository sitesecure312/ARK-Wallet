import React from "react";
import AddressIcon from '-!react-svg-loader!../../../../assets/icons/addressIcon.svg';
import ArrowDown from '-!react-svg-loader!../../../../assets/icons/arrowDown.svg';
import ArrowUp from '-!react-svg-loader!../../../../assets/icons/arrowUp.svg';
import './address.css';

type AddressProps = {
    list:Array<String>,
    title: string,
    resetThenSet:Function,
}

type AddressState = {
    isListOpen:boolean,
    headerTitle:string
}

class AddressSelect extends React.Component<AddressProps, AddressState> {
    constructor(props:AddressProps){
        super(props)
        this.state = {
          isListOpen: false,
          headerTitle: this.props.title
        }
    }

    toggleList = () => {
        this.setState(prevState => ({
          isListOpen: !prevState.isListOpen
        }))
    }

    blurList = () => {
        console.log("blur successful");
        this.setState(prevState => ({
            isListOpen: false
        }))
    }

    selectItem = (item:String ) => {
        const { resetThenSet } = this.props;
        this.setState({
            headerTitle: item.toString(),
            isListOpen: false,
        }, () => resetThenSet(item));
    }

    checkForOverFlow = (str:string)=>{
        str = str.substring(0,7) + "..."+ str.substring(str.length-8,str.length);
        return str;
    }

    checkForOverFlow_less = (str:string)=>{
        str = str.substring(0,14) + "..."+ str.substring(str.length-13,str.length);
        return str;
    }
    
    render(){
        return (
            <div tabIndex={-1} onBlur={this.blurList} className={this.state.isListOpen ? "dd-wrapper-opened":"dd-wrapper"}>
                <div
                   
                    className={this.state.isListOpen?"dd-header":"dd-header"}
                    onClick={this.toggleList}
                    style={{borderRadius:'50%',display:'flex'}}
                >
                    <div className={this.state.isListOpen ? "prefix-icon-container-opened":"prefix-icon-container"} id="address">
                        <AddressIcon />
                    </div>
                    <div className="dd-header-title expanded" style={{color:'white'}}>{this.state.headerTitle}</div>
                    <div className="dd-header-title reduced" style={{color:'white'}}>{this.checkForOverFlow(this.state.headerTitle)}</div>
                    <div className="dd-header-title reduced-less" style={{color:'white'}}>{this.checkForOverFlow_less(this.state.headerTitle)}</div>
                    <div className="suffix-icon-container" id="arrow">
                        
                        {this.state.isListOpen
                        ? <ArrowUp />
                        : <ArrowDown />}
                    </div>
                </div>
                {this.state.isListOpen && (
                    <div>
                        <div
                            role="list"
                            className="dd-list expanded"
                        >
                        {this.props.list.map((item, index) => (
                            <div
                                className={item == this.state.headerTitle ? 'dd-list-item checked' : 'dd-list-item'}
                                key={index}
                                onClick={() => this.selectItem(item)}
                            >
                                {item}
                            </div>
                        ))}
                        </div>
                        <div
                            role="list"
                            className="dd-list reduced"
                        >
                        {this.props.list.map((item, index) => (
                            <div
                                className={item == this.state.headerTitle ? 'dd-list-item checked' : 'dd-list-item'}
                                key={index}
                                onClick={() => this.selectItem(item)}
                            >
                                {this.checkForOverFlow(item.toString())}
                            </div>
                        ))}
                        </div>
                    </div>
                )}
            </div>
        )
    }
}

export default AddressSelect;

