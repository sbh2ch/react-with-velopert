/**
 * Created by sonbyeonghwa on 2017. 9. 2..
 */
import React, {Component} from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ContactItem from './ContactItem';


const Wrapper = styled.div`
    margin-top: 1rem;
`;

class ContactList extends Component {
    static propTypes = {
        contacts: PropTypes.arrayOf(PropTypes.object),
        search: PropTypes.string, // 검색 키워드
        onToggleFavorite: PropTypes.func, // 즐겨찾기 토글
        onOpenModify: PropTypes.func // 수정 모달 띄우기
    };

    render() {
        const {contacts, onOpenModify, onToggleFavorite, search} = this.props;
        const contactList = contacts
            .filter(
                c => c.name.indexOf(search) !== -1 // 키워드가 있으면 0보다 같거나 크다 없으면 -1을 리턴함. 즉 -1 아닌걸 필터링하면 원하는 결과가 필터링 되서 나옴.
            ).sort((a, b) => {
                if (a.name > b.name) return 1;
                if (a.name < b.name) return -1;
                return 0;
            }).map(
                contact => <ContactItem key={contact.id} contact={contact} onOpenModify={onOpenModify}/>
            );
        return (
            <Wrapper>
                {contactList}
            </Wrapper>
        );
    }
}

export default ContactList;