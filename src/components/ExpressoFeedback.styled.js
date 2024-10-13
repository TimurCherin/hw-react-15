import styled from 'styled-components';

export const Wrap = styled.div`
    padding: 20px;
`
export const List = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 5px;
    padding: 10px;
    list-style: none;

    li{
        gap: 5px;
    }

    p{
        display: flex;
        flex-direction: column;
        gap: 5px;
    }

    button{
        padding: 3px 15px;
        border: 1px solid purple;
        border-radius: 25px;
        margin-left: 10px;
    }
`