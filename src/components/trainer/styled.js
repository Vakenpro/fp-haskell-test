import styled from 'styled-components';

export const Wrapper = styled.div`
    min-width: 100%
    background: #E0FFFF;
    background: linear-gradient(to bottom, #E0FFFF, #AFEEEE);
`;

export const Button = styled.button`
    width:11%;
    margin-top: 20px;
    margin-left: 40px;
    outline: none;
    text-decoration: none;
    display: inline-block;
    line-height: 45px;
    border-radius: 45px;
    font-family: 'Montserrat', sans-serif;
    font-size: 11px;
    text-transform: uppercase;
    text-align: center;
    letter-spacing: 3px;
    font-weight: 600;
    color: #524f4e;
    background: white;
    box-shadow: 0 8px 15px rgba(0, 0, 0, .1);
    transition: .3s;
        &:hover {
        background: #2EE59D;
        box-shadow: 0 15px 20px rgba(46, 229, 157, .4);
        color: white;
        transform: translateY(-7px);
        border:none;
        }
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    margin-bottom: 9px;
`;

export const Trainer = styled.div`
    margin-left: 40px;
`;

export const Trainerquest = styled.div`
    display: flex;
    width: 20%;
    margin: auto;
`;

export const Li = styled.li`
    &:not(:last-of-type){
        margin-bottom: 10px;
    }
    display: flex;
    justify-content: space-between;
    margin-right: 10px;
`;

export const Input = styled.input`
    margin-left: 20px;       
`;

export const Ul = styled.ul`
    list-style-type: none;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 0px;
`;

export const Ol = styled.ol`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const H2 = styled.h2`
    font-size: 50px;
    color: #ADFF2F;
    margin: 0;
`;

export const H3 = styled.h3`
    margin: auto;
    text-align: center;
    font-size: 20px;
`;

export const Hr = styled.hr`
    border: none;
    margin-right: 40px;
    background-color: #ADFF2F;
    color: #ADFF2F;
    height 2px;
`;