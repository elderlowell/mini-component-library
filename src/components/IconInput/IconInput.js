import React from 'react'
import styled from 'styled-components'

import { COLORS } from '../../constants'

import Icon from '../Icon'
import VisuallyHidden from '../VisuallyHidden'

const STYLES = {
  small: {
    fontSize: 14 / 16,
    iconSize: 16 / 16,
    borderThickness: 1,
    height: 24 / 16,
  },
  large: {
    fontSize: 18 / 16,
    iconSize: 24 / 16,
    borderThickness: 2,
    height: 36 / 16,
  },
}

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  const styles = STYLES[size]

  const Wrapper = styled.label`
    display: block;
    position: relative;
    color: ${COLORS.gray700};

    &:hover {
      color: ${COLORS.black};
    }
  `
  const TextInput = styled.input`
    width: var(--width);
    height: var(--height);
    font-size: var(--font-size);
    border: none;
    border-bottom: var(--border-thickness) solid ${COLORS.black};
    padding-left: var(--height);
    color: inherit;
    font-weight: 700;
    outline-offset: 2px;

    &::placeholder {
      color: ${COLORS.gray500};
      font-weight: 400;
    }
  `
  const IconWrapper = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto 0;
    height: var(--size);
  `

  return (
    <Wrapper>
      <VisuallyHidden>{label}</VisuallyHidden>
      <IconWrapper style={{ '--size': styles.iconSize + 'rem' }}>
        <Icon id={icon} size={styles.iconSize + 'rem'} />
      </IconWrapper>
      <TextInput
        placeholder={placeholder}
        style={{
          '--width': width + 'px',
          '--height': styles.height + 'rem',
          '--border-thickness': styles.borderThickness + 'px',
        }}
      />
    </Wrapper>
  )
}

export default IconInput
