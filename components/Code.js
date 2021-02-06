import Highlight, { defaultProps } from 'prism-react-renderer';
import dracula from 'prism-react-renderer/themes/dracula';
import styled from '@emotion/styled';
import { useRef } from 'react';

const Wrapper = styled.div`
  position: relative;
  margin: 40px 0;
`;

const Pre = styled.pre`
  border-radius: 4px 0 4px 4px;
  padding: 20px;
  position: relative;
  overflow-x: auto;
  cursor: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAAaCAMAAABigZc2AAAACVBMVEX///8AAAD///9+749PAAAAAXRSTlMAQObYZgAAAFpJREFUeNp9jUEOwEAIAhn+/+imjbs1bC0XzQioSUAAYZs0mcVY051RbGXfFsyxibTVHXhuhXYlbuRGPbe7kz3g0wf679OuizDBdCaberLE4AsjGliD02eNugA+MQFAPqynHQAAAABJRU5ErkJggg==),
    auto;
`;

const Language = styled.span`
  border-radius: 4px 4px 0 0;
  font-family: SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono',
    'Courier New', monospace;
  font-size: 14px;
  font-weight: 600;
  padding: 4px 12px;
  position: absolute;
  text-transform: uppercase;
  top: 0;
  transform: translateY(-100%);
  right: 0;
`;

const Textarea = styled.textarea`
  bottom: 10px;
  height: 1px;
  left: 10px;
  position: absolute;
  width: 1px;
  z-index: -1;
`;

const Code = ({ children, className }) => {
  const textareaRef = useRef(null);
  const language = className.replace(/language-/, '');

  const onClick = () => {
    textareaRef.current.select();
    document.execCommand('copy');
  };

  return (
    <Highlight
      {...defaultProps}
      code={children.trim()}
      language={language}
      theme={dracula}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <Wrapper>
          <Language style={{ ...style }}>{language}</Language>
          <Pre className={className} style={{ ...style }} onClick={onClick}>
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line, key: i })}>
                {line.map((token, key) => {
                  return <span key={key} {...getTokenProps({ token, key })} />;
                })}
              </div>
            ))}
          </Pre>
          {/* Hidden text area containing snippet, used for copy to clipboard */}
          <Textarea value={children} ref={textareaRef} readOnly />
        </Wrapper>
      )}
    </Highlight>
  );
};

export default Code;
