import styled from '@emotion/styled';

export const ContactsList = styled.ul`
    list-style-type: none;
    padding: 0;
    margin: 0 auto;
    max-width: 800px;
    border: 1px solid #fff;
`;

export const ContactItem = styled.li`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    border-bottom: 1px solid #fff;
    &:last-child {
        border-bottom: none;
    }
`

export const RemoveBtn = styled.button`
    background-color: #fff;
    color: #879cb7;
    border: 1px solid #879cb7;
    border-radius: 5px;
    padding: 5px 6px;
    cursor: pointer;
    &:hover, &:focus {
        background-color: #879cb7;
        color: #edf3fb;
    }
    margin-left: 10px;
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1), color 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;