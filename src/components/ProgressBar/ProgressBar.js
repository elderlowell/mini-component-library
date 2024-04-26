/* eslint-disable no-unused-vars */
import React from 'react'
import styled from 'styled-components'

import { COLORS } from '../../constants'

const SIZES = {
  small: {
    '--height': 8 + 'px',
    '--borderRadius': 4 + 'px',
  },
  medium: {
    '--height': 12 + 'px',
    '--borderRadius': 4 + 'px',
  },
  large: {
    '--height': 24 + 'px',
    '--borderRadius': 8 + 'px',
    '--padding': 4 + 'px',
  },
}

const ProgressBar = ({ value, size }) => {
  const styles = SIZES[size]
  const valueLimited = value < 0 ? 0 : value > 100 ? 100 : value

  const rightBorderRadius =
    size === 'large' && valueLimited >= 99 ? (1 - (100 - valueLimited)) * 4 : 0

  const Wrapper = styled.div`
    width: 370px;
    height: var(--height);
    padding: var(--padding);
    border-radius: var(--borderRadius);
    background-color: ${COLORS.transparentGray15};
    overflow: hidden;
    box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  `
  const ProgressBar = styled.div`
    background-color: ${COLORS.primary};
    height: 100%;
    width: ${valueLimited}%;
    border-radius: 4px ${rightBorderRadius}px ${rightBorderRadius}px 4px;
  `
  return (
    <Wrapper style={styles}>
      <ProgressBar></ProgressBar>
    </Wrapper>
  )
}

export default ProgressBar
