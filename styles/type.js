import styled from '@emotion/styled';

export const P = styled.p`
  font-size: 18px;
  line-height: 1.7;
  margin-bottom: 32px;

  code {
    background: var(--teal-400);
    color: var(--teal-800);
    padding: 0 6px;
    white-space: nowrap;
  }
`;

export const A = styled.a`
  color: var(--teal-400);

  &:hover {
    text-decoration: underline;
  }
`;

export const H1 = styled.h1`
  color: var(--teal-400);
  font-family: Roboto, Inter,-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol';
  font-size: 36px;
  font-weight: 700;
  line-height: 1;
  margin-bottom: 40px;
  text-align: center;
`;

export const H2 = styled.h2`
  color: var(--gray-50);
  font-family: Roboto, Inter,-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol';
  font-size: 26px;
  font-weight: 700;
  line-height: 1.2;
  margin: 48px 0 16px;
`;

export const H3 = styled.h3`
  color: var(--gray-50);
  font-family: Roboto, Inter,-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol';
  font-size: 20px;
  font-weight: 700;
  line-height: 1.2;
  margin: 48px 0 16px;
`;
