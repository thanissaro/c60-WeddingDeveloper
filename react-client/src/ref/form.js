import React from "react";
import * as resourceService from "../../../services/resourceService";
import * as validation from '../../../utils/validation';
import { FormGroup, ControlLabel, FormControl, HelpBlock, Button } from 'react-bootstrap';

class ResourcesForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            companyName: {
                value: '',
                input: false
            },
            description: {
                value: '',
                input: false
            },
            contactName: {
                value: '',
                input: false
            },
            contactEmail: {
                value: '',
                input: false
            },
            businessTypeId: {
                value: '',
                input: false
            },
            imageUrl: {
                value: '',
                input: false
            },
            siteUrl: {
                value: '',
                input: false
            },
            phone: {
                value: '',
                input: false
            },
            id: '',
            list: [],
            updateProfile: false
        };
    
     this.onChange = this.onChange.bind(this)
     this.onClear = this.onClear.bind(this)
     this.onEdit = this.onEdit.bind(this)
     this.onSubmit = this.onSubmit.bind(this)
    };

    onChange(event) {
        console.log(event.target.name)
        console.log(event.target.value)
        const value = {value: event.target.value, input: true};
        this.setState({
            [event.target.name]: value
        })
    }

    onClear(event) {
        this.setState(
            {
                companyName: '',
                description: '',
                contactName: '',
                contactEmail: '',
                businessTypeId: '',
                imageUrl: '',
                siteUrl: '',
                phone: ''
            }
        )
    }

    onEdit() { 
        const editProfile = {
            companyName: this.state.companyName.value,
            description: this.state.description.value,
            contactName: this.state.contactName.value,
            contactEmail: this.state.contactEmail.value,
            businessTypeId: this.state.businessTypeId.value,
            imageUrl: this.state.imageUrl.value,
            siteUrl: this.state.siteUrl.value,
            phone: this.state.phone.value,
            id: this.state.id
        };
        if(this.checkValidation()){
            let promise = {}
            if(this.state.updateProfile){
                promise = resourceService.put(this.props.match.params.id, editProfile)
            }
            promise
            .then(() => {this.props.history.push('/data-management/resources/list')})
            .catch(console.error)
        } else {
            console.log("Invalid Information")
        }
    } 
    
    checkValidation(){
        return  validation.companyName(this.state.companyName.value) &&
                validation.name(this.state.contactName.value) &&
                validation.email(this.state.contactEmail.value) &&
                validation.urlImageCheck(this.state.imageUrl.value) &&
                validation.urlCheck(this.state.siteUrl.value) &&
                validation.phone(this.state.phone.value) 
    }
    
    onSubmit() {
        const data = {
            companyName: this.state.companyName.value,
            description: this.state.description.value,
            contactName: this.state.contactName.value,
            contactEmail: this.state.contactEmail.value,
            businessTypeId: this.state.businessTypeId.value,
            imageUrl: this.state.imageUrl.value,
            siteUrl: this.state.siteUrl.value,
            phone: this.state.phone.value
        }
        if(this.checkValidation()){
            let promise = {}
            if(this.state.updateProfile){
                data.id = this.state.id
                promise = resourceService.put(data)
            } else {
                promise = resourceService.post(data)
            }
            promise
            .then(() => {this.props.history.push('/data-management/resources/list')})
            .catch(console.error)
        } else {
            console.log("Invalid Information")
        }
    }
    
    componentDidMount() {
        if (this.props.match.params.id) {
            resourceService.getById(this.props.match.params.id)   
            .then(response => {
                let editData = response.items[0]
                    this.setState(
                        {
                            id: editData.id,
                            companyName: this.makeObj(editData.companyName),
                            description: this.makeObj(editData.description),
                            contactName:  this.makeObj(editData.contactName),
                            contactEmail:  this.makeObj(editData.contactEmail),
                            businessTypeId:  this.makeObj(editData.businessTypeId),
                            imageUrl:  this.makeObj(editData.imageUrl),
                            siteUrl: this.makeObj(editData.siteUrl),
                            phone:  this.makeObj(editData.phone),
                            updateProfile: true
                        }
                    )
                    console.log(response)
                })
                .catch(console.error);
        }
        else {
            return null
        }
    }

    makeObj(val){
        const obj = {
            input: true,
            value: val
        }
        return obj
    }

    render() {
        return (
            <React.Fragment>
                <header className="content__title">
                    <h1>Resources Form</h1>

                    <div className="actions">
                        <a href="" className="actions__item zmdi zmdi-trending-up"></a>
                        <a href="" className="actions__item zmdi zmdi-check-all"></a>

                        <div className="dropdown actions__item">
                            <i data-toggle="dropdown" className="zmdi zmdi-more-vert"></i>
                            <div className="dropdown-menu dropdown-menu-right">
                                <a href="" className="dropdown-item">Refresh</a>
                                <a href="" className="dropdown-item">Manage Widgets</a>
                                <a href="" className="dropdown-item">Settings</a>
                            </div>
                        </div>
                    </div>
                </header>
                <div className="card col-sm-12">
                    <div className="card-body">
                        <div className="col-sm-12">
                            <form>
                                <div className="row">
                                <div className="col-sm-6">
                                        <FormGroup
                                            controlId="formBasicText"
                                        >
                                        <ControlLabel>Company Name</ControlLabel>
                                            <FormControl
                                                className={this.state.companyName.input && (validation.companyName(this.state.companyName.value) ? 'is-valid' : 'is-invalid')}
                                                type="text"
                                                name="companyName"
                                                value={this.state.companyName.value}
                                                onChange={this.onChange}
                                            />
                                            <i className="form-group__bar"></i>
                                            <FormControl.Feedback />
                                            {this.state.companyName.input && !validation.companyName(this.state.companyName.value) ? <HelpBlock style={{ position: "absolute" }}>Company name is required</HelpBlock> : null}
                                        </FormGroup>
                                    </div>
                                    <div className="col-sm-6">
                                        <FormGroup
                                            controlId="formBasicText"
                                        >
                                        <ControlLabel>Description</ControlLabel>
                                            <FormControl
                                                className={this.state.description.input}
                                                type="text"
                                                name="description"
                                                value={this.state.description.value}
                                                onChange={this.onChange}
                                            />
                                            <i className="form-group__bar"></i>

                                        </FormGroup>
                                    </div>
                                    <div className="col-sm-6">
                                        <FormGroup
                                            controlId="formBasicText"
                                        >
                                        <ControlLabel>Contact Name</ControlLabel>
                                            <FormControl
                                                className={this.state.contactName.input && (validation.name(this.state.contactName.value) ? 'is-valid' : 'is-invalid')}
                                                type="text"
                                                name="contactName"
                                                value={this.state.contactName.value}
                                                onChange={this.onChange}
                                            />
                                            <i className="form-group__bar"></i>
                                            <FormControl.Feedback />
                                            {this.state.contactName.input && !validation.name(this.state.contactName.value) ? <HelpBlock style={{ position: "absolute" }}>Contact name is required</HelpBlock> : null}
                                        </FormGroup>
                                    </div>
                                    <div className="col-sm-6">
                                        <FormGroup
                                            controlId="formBasicText"
                                        >
                                        <ControlLabel>Email</ControlLabel>
                                            <FormControl
                                                className={this.state.contactEmail.input && (validation.email(this.state.contactEmail.value) ? 'is-valid' : 'is-invalid')}
                                                type="text"
                                                name="contactEmail"
                                                value={this.state.contactEmail.value}
                                                onChange={this.onChange}
                                            />
                                            <i className="form-group__bar"></i>
                                            <FormControl.Feedback />
                                            {this.state.contactEmail.input && !validation.email(this.state.contactEmail.value) ? <HelpBlock style={{ position: "absolute" }}>Email is required</HelpBlock> : null}
                                        </FormGroup>
                                    </div>
                                    <div className="col-sm-6">
                                        <FormGroup
                                            controlId="formBasicText"
                                        > 
                                        <ControlLabel>Business Type</ControlLabel>
                                            <FormControl
                                                className={this.state.businessTypeId.input && (validation.name(this.state.businessTypeId.value) ? 'is-valid' : 'is-invalid')}
                                                type="text"
                                                name="businessTypeId"
                                                value={this.state.businessTypeId.value}
                                                onChange={this.onChange}
                                            />
                                            <i className="form-group__bar"></i>
                                            <FormControl.Feedback />
                                            {this.state.businessTypeId.input && !validation.name(this.state.businessTypeId.value) ? <HelpBlock style={{ position: "absolute" }}>Business Type is required</HelpBlock> : null}
                                        </FormGroup>
                                    </div>
                                    <div className="col-sm-6">
                                        <FormGroup
                                            controlId="formBasicText"
                                        >
                                        <ControlLabel>Image</ControlLabel>
                                            <FormControl
                                                className={this.state.imageUrl.input && (validation.urlImageCheck(this.state.imageUrl.value) ? 'is-valid' : 'is-invalid')}
                                                type="text"
                                                name="imageUrl"
                                                value={this.state.imageUrl.value}
                                                onChange={this.onChange}
                                            />
                                            <i className="form-group__bar"></i>
                                            <FormControl.Feedback />
                                            {this.state.imageUrl.input && !validation.urlImageCheck(this.state.imageUrl.value) ? <HelpBlock style={{ position: "absolute" }}>Image Url is required</HelpBlock> : null}
                                        </FormGroup>
                                    </div>
                                    <div className="col-sm-6">
                                        <FormGroup
                                            controlId="formBasicText"
                                        >
                                        <ControlLabel>Website</ControlLabel>
                                            <FormControl
                                                className={this.state.siteUrl.input && (validation.urlCheck(this.state.siteUrl.value) ? 'is-valid' : 'is-invalid')}
                                                type="text"
                                                name="siteUrl"
                                                value={this.state.siteUrl.value}
                                                onChange={this.onChange}
                                            />
                                            <i className="form-group__bar"></i>
                                            <FormControl.Feedback />
                                            {this.state.siteUrl.input && !validation.urlCheck(this.state.siteUrl.value) ? <HelpBlock style={{ position: "absolute" }}>Company name is required</HelpBlock> : null}
                                        </FormGroup>
                                    </div>
                                    <div className="col-sm-6">
                                        <FormGroup
                                            controlId="formBasicText"
                                        >
                                        <ControlLabel>Phone</ControlLabel>
                                            <FormControl
                                                className={this.state.phone.input && (validation.phone(this.state.phone.value) ? 'is-valid' : 'is-invalid')}
                                                type="phone"
                                                name="phone"
                                                value={this.state.phone.value}
                                                onChange={this.onChange}
                                            />
                                            <i className="form-group__bar"></i>
                                            <FormControl.Feedback />
                                            {this.state.phone.input && !validation.phone(this.state.phone.value) ? <HelpBlock style={{ position: "absolute" }}>Phone is required</HelpBlock> : null}
                                        </FormGroup>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    {this.state.updateProfile ?
                        <Button
                            type="button"
                            className='btn btn-light'
                            onClick={this.onEdit}>
                            UPDATE
                            </Button>
                        :
                        <Button
                            type="button"
                            className='btn btn-light'
                            onClick={this.onSubmit}>
                            SUBMIT
                        </Button>}
                </div>
            </React.Fragment>
        )
    }
}
export default ResourcesForm;