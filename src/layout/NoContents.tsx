import styled from "styled-components";

interface NoContentsProps {
  title: string;
  text: string;
  handleClick: () => void;
}

const NoContents = ({ title, text, handleClick }: NoContentsProps) => {
  return (
    <NoContentsWrapper>
      <Text>{text}</Text>
      <Button onClick={handleClick}>{title}</Button>
    </NoContentsWrapper>
  );
};

const NoContentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const Text = styled.p`
  margin: 12px 0;
  color: var(--color-gray);
`;

const Button = styled.button`
  color: var(--color-blue);
`;

export default NoContents;
