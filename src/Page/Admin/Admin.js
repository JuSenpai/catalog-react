import React from "react";
import AbstractPage from "../AbstractPage";
import Root from "../../Component/Root";
import Body from "../../Component/Body";
import Header from "../../Component/Header";
import Modal from "../../Component/Modal";
import Sidebar from "../../Component/Sidebar";
import Menu from "../../Component/Menu";
import MenuItem from "../../Component/MenuItem";
import Row from "../../Component/Table/Row";
import Table from "../../Component/Table/Table";
import { withCookies } from "react-cookie";
import API from "../../API";

class Admin extends AbstractPage {
    tableRows = [];
    constructor () {
        super();

        this.state.showModal = false;
        this.state.form = null;
        this.state.entities = [];
        this.hideModal = this.hideModal.bind(this);
        this.showModal = this.showModal.bind(this);
        this.entityAdded = this.entityAdded.bind(this);
        this.entityEdited = this.entityEdited.bind(this);
        this.entityDeleted = this.entityDeleted.bind(this);
        this.state.loading = true;
    }

    componentDidMount () {
        super.componentDidMount();
        API.fetch(this.props.entity.route, function (data) {
            let entities = data.map(object => new this.props.entity.class(object));
            this.setState({
                entities: entities,
                loading: false,
            });
        }.bind(this));
    }

    showModal (e, form) {
        e.preventDefault();
        this.setState({
            showModal: true,
            form: form
        });
    }

    hideModal (e) {
        if (e.target.getAttribute("class") === "app-modals") {
            this.setState({
                showModal: false,
                form: null,
            });
        }
    }

    header() {
        return (
            <Menu className={`header-menu`}>
                <MenuItem url={`/admin/dashboard`} label={`Panoul administratorului`} icon={`fa fa-wrench`} references={{user: this.state.user}}/>
                <MenuItem url={`/`} label={`Acasă`} icon={`fa fa-home`} references={{user: this.state.user}}/>
                <MenuItem url={`/logout`}
                          label={this.state.user.username ? `Delogare (` + this.state.user.username + `)` : `Delogare`}
                          icon={`fa fa-sign-out-alt`}/>
            </Menu>
        );
    }

    sidebar () {
        return (
            <Menu title={this.props.entity.name}>
                <MenuItem url={this.props.entity.route + '/add'} label={`Adaugă`} icon={`fa fa-plus`} className={`menu-item v-menu-item`}
                    onClick={e => this.showModal(e, this.props.entity.class.getForm(this.entityAdded))} />
            </Menu>
        );
    }

    entityAdded(entity) {
        let entities = this.state.entities;
        entity = new this.props.entity.class(entity);
        entities.push(entity);

        this.setState({
            showModal: false,
            entities: entities,
        });
    }

    entityEdited(entity) {
        let entities = this.state.entities;
        let index = entities.findIndex(e => e.id === entity.id);
        entities[index] = new this.props.entity.class(entity);
        this.setState({
            showModal: false,
            entities: entities,
        });
    }

    entityDeleted(entity) {
        let entities = this.state.entities;
        let index = entities.findIndex(e => e.id === entity.id);
        entities.splice(index, 1);
        this.setState({
            showModal: false,
            entities: entities
        });
    }

    body() {
        let entities = this.state.entities || [];
        let population = [];
        population = entities.map(e => <Row key={e.id} entity={e} click={event => this.showModal(event, e.getForm(this.entityEdited, this.entityDeleted))}
                                            ref={row => this.tableRows[e.id] = row} className={`table-row`} />);

        return (
            <Table mapping={this.props.entity.mapping}>
                {population}
            </Table>
        );
    }

    loadingCondition() {
        return this.state.loading;
    }

    render () {
        return (
            <Root>
                { this.loadingCondition() && <div className={`loading`}><h1><i className="fa fa-spinner rotating"/>&nbsp;&nbsp;&nbsp;Încărcare...</h1></div> }
                <Modal visible={this.state.showModal} onClick={this.hideModal}>
                    <div className={`form-container form-modal`}>
                        {this.state.form}
                    </div>
                </Modal>
                <Header>
                    {this.header()}
                </Header>
                <Body className={`app-body admin-body`}>
                <Sidebar align={`left`}>
                    {this.sidebar()}
                </Sidebar>
                <div className={`admin-view-right`}>
                    {this.body()}
                </div>
                </Body>
            </Root>
        );
    }
}

export default withCookies(Admin);