import styled from 'styled-components';

const StyledUserTwoots = styled.section`
  article {
    border: 2px solid black;
    padding: 0px 20px;
    margin: 32px;
  }

  .twoot-user {
    display: flex;
    padding: 10px 10px;
    
    img {
      width: 60px;
      height: 50px;
    }

    .user-address {
      text-align: right;
      flex-grow: 1;
    }
  }

  .twoot {
      border-bottom: 2px solid black;
    }

  .twoot-timeframe {
    color: gray;
    display: flex;

    p, .twoot-button {
      width: 50%;
    }

    .twoot-button {
      text-align: right;
    }

  }

`;

export default StyledUserTwoots;