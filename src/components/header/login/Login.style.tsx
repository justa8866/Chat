import styled from "styled-components";

export const LoginPage = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(#40a9ff, #096dd9);
`;

export const LoginCard = styled.div`
  position: relative;
  padding: 0 40px 0 70px;
  width: 400px;
  text-align: center;
  justify-content: center;
  background-color: white;
  border-radius: 30px;
  top: 40vh;
  left: calc(50vh  + 200px);
`;

export const Text = styled.h2`
  color: black;
`;


const Button = styled.button`
cursor: pointer;
color: white;
padding: 15px;
border-radius: 10px;
display: inline-block;
`;

export const LoginButtonGoogle = styled(Button)`
background-color: #FA1212;
margin: 5px;
`;

export const LoginButtonFacebook = styled(Button)`
background-color: #4285f4;
margin: 5px;
`;
