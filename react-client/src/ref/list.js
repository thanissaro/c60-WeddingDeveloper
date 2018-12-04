import React, { Component } from 'react'
import Swal from 'sweetalert2';
import * as resourceService from "../../../services/resourceService";

const img = {
    width: "25px",
    height: "25px",
}

const overflowSettings = {
    whiteSpace: 'nowrap',
    maxWidth: '120px',
    overflow: 'hidden',
    textOverflow: 'ellipsis'
}

class ResourcesList extends Component {
    constructor(props) {
        super(props);
  
        this.state = {
            list: [],
            selectedItem: null,
            show: false
        };
        
        this.addAccount = this.addAccount.bind(this);
        this.deleteProfile = this.deleteProfile.bind(this);
        this.getList = this.getList.bind(this);
        this.onClick = this.onClick.bind(this);
        this.onItemClick = this.onItemClick.bind(this); 
    };  
  
    imgNullCheck(item) {
        return item.imageUrl === null ? "http://www.bsmc.net.au/wp-content/uploads/No-image-available.jpg" : item.imageUrl;
    }

    onItemClick(id, e) {
        this.setState({ selectedItem: id});
        console.log(id)
        this.onClick(id)
    }
    
    onClick(id, e) {
        this.props.history.push('/data-management/resources/form/' + id)
    }

    addAccount() {
        this.props.history.push('/data-management/resources/form')
    }

    getList(){
        resourceService.getAll()
            .then(data => {
                this.setState({
                    list: data.items
                })
            })
    }

    deleteProfile(id) {
        const swalWithBootstrapButtons = Swal.mixin({
            confirmButtonClass: 'btn btn-success',
            cancelButtonClass: 'btn btn-danger',
            buttonsStyling: false,
        })
        swalWithBootstrapButtons({
            title: 'Are you sure?',
            text: 'You will not be able to recover your profile!',
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, keep it'
        }).then((result) => {
            if (result.value) {
                resourceService.del(id)
                    .then(() => { 
                        Swal(
                            'Deleted!',
                            'Your profile has been deleted.',
                            'success'
                        )
                    })
                    .then(() => { this.getList() })
                    .catch(console.log('error'));
            } else if (result.dismiss === Swal.DismissReason.cancel) {
                Swal(
                    'Cancelled',
                    'Your profile is safe :)',
                    'error'
                )
            }
        })
    }

    editButton(item) {
        return <span>
            <i name="edit" key={item.id} className="actions__item zmdi zmdi-edit zmdi-hc-fw" onClick={e => this.onItemClick(item.id, e)}>
            </i>
        </span>;
    }

    deleteButton(item) {
        return <span>
            <i
                name="delete"
                key={item.id}
                className="actions__item zmdi zmdi-delete zmdi-hc-fw"
                onClick={(e) => this.deleteProfile(item.id)}>
            </i>
        </span>;
    }

    componentDidMount() {
        resourceService.getAll()
            .then(data => {
                this.setState({
                    list: data.items
                })
            })
    }

    render() {
        const list = this.state.list ?
            this.state.list.map(item => {
                return (
                    <tr style={overflowSettings} key={item.id}>
                        <th style={overflowSettings} scope="row">{item.id}</th>
                        <td style={overflowSettings}>{item.companyName}</td>
                        <td style={overflowSettings}>{item.description}</td>
                        <td style={overflowSettings}>{item.contactName}</td>
                        <td style={overflowSettings}>{item.contactEmail}</td>
                        <td style={overflowSettings}>{item.businessTypeId}</td>
                        <td style={overflowSettings}><img style={img} className="mr-3 pull-left" src={this.imgNullCheck(item)} alt="" /></td>
                        <td style={overflowSettings}><a href={item.siteUrl}>{item.siteUrl}</a></td>
                        <td style={overflowSettings}>{item.phone}</td>
                        <td style={overflowSettings}>{this.editButton(item)}{this.deleteButton(item)}</td>
                    </tr>
                );
            })
            : "is loading";
        return (
            <React.Fragment>
                <header className="content__title">
                    <h1>Resources</h1>
                    <div className="actions">
                    <i 
                        className="actions__item zmdi zmdi-account-add zmdi-hc-fw"
                        onClick={this.addAccount}>
                        </i>
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
                <div className="card">
                    <div className="card-body">
                        <h4>List</h4>
                        
                        <table className="table table-inverse mb-0">
                            <thead>
                                <tr>
                                    <th>Id#</th>
                                    <th>CompanyName</th>
                                    <th>Description</th>
                                    <th>Contact Name</th>
                                    <th>Contact Email</th>
                                    <th>Business Type</th>
                                    <th>Image</th>
                                    <th>Website</th>
                                    <th>Phone</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {list}
                            </tbody>
                        </table>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default ResourcesList;
