import React from "react";

const InputNumber = React.createClass({
    getDefaultProps(){
        return {
            prefixCls:"input-number",
            max:100,
            min:-10,
            defaultValue:13
        }
    },
    getInitialState(){
        return {
            inputValue:this.props.defaultValue,
            value:this.props.defaultValue,
            focused:false
        };
    },
    setInputValue(v){
        this.setState({
            inputValue:v
        });
    },
    onChange(e){
        this.setInputValue(e.target.value);
    },
    onBlur(e){
        this.setState({
            focused:false
        });
        let val = this.getValidValue(e.target.value.trim());
        this.setState({
            inputValue:val,
            value:val
        });
    },
    onFocus(){
        this.setState({
            focused:true
        });
    },
    getValidValue(v){
        let val = v;
        val = Number(val);
        if(val<this.props.min){
            val = this.props.min;
        }else if(val>this.props.max){
            val = this.props.max;
        }
        return val;
    },
    render(){
        const prefixCls = this.props.prefixCls;
        let value;
        if(this.state.focused){
            value = this.state.inputValue;
        }else{
            value = this.state.value;
        }
        return (
            <div>
                <div className={this.props.prefixCls}>
                    <div className={`${prefixCls}-input-wrap`}>
                    <input
                        className={`${prefixCls}-input`}
                        {...this.props}
                        value={value}
                        onChange={this.onChange}
                        onBlur={this.onBlur}
                        onFocus={this.onFocus}
                        />
                    </div>
                </div>
            </div>
        );
    }
});

export default InputNumber;