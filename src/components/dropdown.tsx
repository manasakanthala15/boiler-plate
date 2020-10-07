import React from 'react';
import MultiSelect from '../shared/multiSelect';

interface IState {
    options: any;
    selectedOptions: Array<any>
    submitted: boolean
}
class Login extends React.Component<any, IState>{
    constructor(props: any) {
        super(props);
        this.state = {
            options: [
                { value: 'chocolate', label: 'Chocolate' },
                { value: 'strawberry', label: 'Strawberry' },
                { value: 'vanilla', label: 'Vanilla' }
            ],
            selectedOptions: [],
            submitted: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.getSelectedOptions = this.getSelectedOptions.bind(this);
    }

    handleChange(event: any) {
        this.setState({

        });
    }

    getSelectedOptions(options: any) {
        this.setState({
            submitted: false
        })

        if (options != null) {
            options.filter((option: any) => {
                if (this.state.selectedOptions.filter(obj => obj.value == option.value).length == 0) {
                    this.state.selectedOptions.push(option)
                }
            })
            this.state.selectedOptions.filter((option: any) => {
                if (options.filter((obj: any) => obj.value == option.value).length == 0) {
                    const index = this.state.selectedOptions.findIndex((obj: any) => obj.value == option.value)
                    this.state.selectedOptions.splice(index, 1)
                }
            })
        }
        else{
            this.setState({
                selectedOptions:[]
            })
        }       
    }

    handleSubmit(event: any) {
        event.preventDefault();
        this.setState({
            submitted: true
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <MultiSelect options={this.state.options} selectedOptions={this.getSelectedOptions} ></MultiSelect>
                    <button className="mb-3" type="submit" onClick={this.handleSubmit}>
                        Submit
                    </button>
                </form>
                {this.state.submitted ?
                    <div>
                        {this.state.selectedOptions.map((option: any) => {
                            return <div key={option.value}>{option.label}</div>
                        })}
                    </div>
                    : null
                }
            </div>

        )
    }
}

export default Login;
