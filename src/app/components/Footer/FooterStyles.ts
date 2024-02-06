import styles from 'styled-components';

export const FooterContainer = styles.footer`
    height: 55px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 16px;
    background-color: #318CE7;
    gap: 15px;

    p{
        text-align: center;
        font-size: 12px;
        color: white;
        text-align: center;
    }
`

export const LogosContainer = styles.div`
    display: flex;
    gap: 20px;
    text-align: center;
    cursor: pointer;
    color: white;

    .patito3{
        font-size: 30px;
    }

    .patito2{
        font-size: 25px;
    }

    .patito1{
        font-size: 20px;
    }
`