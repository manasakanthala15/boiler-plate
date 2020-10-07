import React from 'react';
import Select from 'react-select';

interface props {
    options: any;
    selectedOptions: any;
}

class MultiSelect extends React.Component<props, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            selectedOption: null,

        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event: any) {
        if (event != undefined || event != null) {
            this.props.selectedOptions(event)
            this.setState({
                selectedOption: event[event.length - 1].value
            });
        }
        else{
            this.props.selectedOptions(event);  
        }
    };

    render() {
        return (
            <Select ref='dropdown'
                isMulti={true}
                name="colors"
                options={this.props.options}
                onChange={this.handleChange}
                required={true}
            />
        );
    }
}
export default MultiSelect;