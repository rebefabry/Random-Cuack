import styles from 'styled-components';

export const FooterContainer = styles.footer`
    height: 55px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 16px;
    background-color: #318CE7;

    p{
        text-align: center;
        font-size: 18px;
        color: white;
    }
`

export const LogosContainer = styles.div`
    display: flex;
    gap: 20px;
    font-size: 22px;
    text-align: center;
    cursor: pointer;
    color: white;
`