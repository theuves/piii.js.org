import styled from 'styled-components'

// Design
import { smMarginY } from '../../design/margins'

export const Section = styled.section`
  position: relative;
  display: flex;
  padding: ${smMarginY}px 0;
  justify-content: center;
  box-shadow: 0 2px 1px 0 rgba(0, 0, 0, .15);
  background-color: #ddd;

  iframe {
    margin-left: 10px;
  }
`