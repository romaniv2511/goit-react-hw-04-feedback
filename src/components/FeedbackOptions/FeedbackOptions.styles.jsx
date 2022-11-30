import styled from 'styled-components';

export const FeedbackBox = styled.div`
  display: flex;
  gap: 12px;
  margin-bottom: 12px;
`;
export const Button = styled.button`
  border: none;
  padding: 4px 8px;
  border-radius: 8px;
  width: 80px;
  background-color: white;
  cursor: pointer;
  box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0.25);

  &:hover,
  &:focus {
    color: white;
    background-color: orange;
  }
`;
