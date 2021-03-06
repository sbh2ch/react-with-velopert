import React, {Component} from 'react';
import Header from './components/Header';
import Container from './components/Container';
import oc from 'open-color';
import ViewSelector from './components/ViewSelector';
import FloatingButton from './components/FloatingButton';
import ContactModal from './components/ContactModal';
import Dimmed from './components/Dimmed';
import ContactList from './components/ContactList';
import shortId from 'shortid';
import Input from './components/Input';
import Perp from 'react-addons-perf';

function generateColor() {
    const colors = [
        'gray',
        'red',
        'pink',
        'grape',
        'violet',
        'indigo',
        'blue',
        'cyan',
        'teal',
        'green',
        'lime',
        'yellow',
        'orange'
    ];
    const random = Math.floor(Math.random() * 13);

    return oc[colors[random]][6];
}

class App extends Component {
    state = {
        view: 'favorite',
        modal: {
            visible: false,
            mode: null  // create 혹은 modify
        },
        contacts: [
            {
                "id": "SyKw5cyAl",
                "name": "kar98",
                "phone": "010-0000-0000",
                "color": "#40c057",
                "favorite": true
            },
            {
                "id": "r1s_9c10l",
                "name": "m416",
                "phone": "010-0000-0001",
                "color": "#12b886",
                "favorite": true
            },
            {
                "id": "BJcFqc10l",
                "name": "scal",
                "phone": "010-0000-0002",
                "color": "#fd7e14",
                "favorite": false
            },
            {
                "id": "BJUcqqk0l",
                "name": "sks",
                "phone": "010-0000-0003",
                "color": "#15aabf",
                "favorite": false
            },
            {
                "id": "rJHoq91Cl",
                "name": "awm",
                "phone": "010-0000-0004",
                "color": "#e64980",
                "favorite": false
            }
        ],
        search: ''
    };

    handleSelectView = (view) => this.setState({view});

    componentDidUpdate(prevProps, prevState) {
        if (Perp.isRunning()) {
            Perp.stop();
            Perp.printInclusive(); // 과정에서 어떤 일이 일어났는지 다 보여줌
            Perp.printWasted();  // 낭비 렌더링이 된 것을 보여줌. (내용이 안바뀌었는데 리렌더링된것들)
        }
    }

    modalHandler = {
        show: (mode, payload) => { // payload 안에 모달의 기초 상태를 넣을것임. 예를들어 썸네일 색
            Perp.start();
            this.setState({
                modal: {
                    mode,
                    visible: true,
                    ...payload
                }
            });
        },
        hide: () => {
            this.setState({
                modal: {
                    ...this.state.modal, //기존의 값을 유지하는 이유는? 닫을때 애니메이션에서 기존 값이 안사라지게 하려고, 시각적인 이유땜시 ㅋ!
                    visible: false
                }
            })
        },
        change: ({name, value}) => {
            this.setState({
                modal: {
                    ...this.state.modal,
                    [name]: value
                }
            });
        },
        actions: {
            create: () => {
                const id = shortId.generate();

                const {contacts, modal: {name, phone, color}} = this.state;

                const contact = {
                    id,
                    name,
                    phone,
                    color,
                    favorite: false
                };

                this.setState({contacts: [...contacts, contact]});
                this.modalHandler.hide();
            },
            modify: () => {
                const {modal: {name, phone, index}, contacts} = this.state;
                const item = contacts[index];
                this.setState({
                    contacts: [
                        ...contacts.slice(0, index),
                        {
                            ...item,
                            name: name,
                            phone: phone
                        },
                        ...contacts.slice(index + 1, contacts.length)
                    ]
                });
                this.modalHandler.hide();
            },
            remove: () => {
                const {modal: {index}, contacts} = this.state;

                this.setState({
                    contacts: [
                        ...contacts.slice(0, index),
                        ...contacts.slice(index + 1, contacts.length)
                    ]
                });
                this.modalHandler.hide();
            }
        }
    };

    handleFloatingButton = () => {
        const {view} = this.state;
        if (view !== 'list') this.setState({view: 'list'});

        this.modalHandler.show('create', {
            color: generateColor(),
            name: '',
            phone: ''
        });
    };

    itemHandler = {
        toggleFavorite: null,
        openModify: (id) => {
            const {contacts} = this.state;
            // id 로 index 조회
            const index = contacts.findIndex(contact => contact.id === id);
            const item = this.state.contacts[index];

            this.modalHandler.show(
                'modify',
                {
                    ...item,
                    index
                }
            );
        }
    };

    handleSearchChange = (e) => {
        this.setState({
            search: e.target.value
        });
    };

    render() {
        const {
            handleSearchChange,
            handleSelectView,
            handleFloatingButton,
            modalHandler,
            itemHandler
        } = this;

        const {
            view,
            search,
            modal,
            contacts
        } = this.state;

        return (
            <div className="App">
                <Header/>
                <ViewSelector onSelect={handleSelectView} selected={view}/>
                <Container visible={view === 'favorite'}>즐겨찾기</Container>
                <Container visible={view === 'list'}>
                    <Input
                        onChange={handleSearchChange}
                        value={search}
                        placeholder='Search'
                    />
                    <ContactList contacts={contacts} onOpenModify={itemHandler.openModify} search={search}/>
                </Container>
                <ContactModal {...modal} onHide={modalHandler.hide} onChange={modalHandler.change}
                              onAction={modalHandler.actions[modal.mode]} onRemove={modalHandler.actions.remove}/>
                <Dimmed visible={modal.visible}/>
                <FloatingButton onClick={handleFloatingButton}/>
            </div>
        );
    }
}

export default App;