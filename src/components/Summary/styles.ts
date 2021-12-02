import styled from "styled-components"

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: -10rem;
`

export const Wrapper = styled.div`
  background-color: var(--shape);
  padding: 1.5rem 2rem;
  border-radius: 0.25rem;
  color: var(--text-title);

  &.highlight-background {
    background-color: var(--green);
    color: #ffffff;
  }
`

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Title = styled.h2``

export const IconImage = styled.img``

export const ValueIncome = styled.strong`
  display: inline-block;
  margin-top: 1rem;
  font-size: 2rem;
  font-weight: 500;
  line-height: 3rem;
`

export const ValueOutcome = styled.strong`
  display: inline-block;
  margin-top: 1rem;
  font-size: 2rem;
  font-weight: 500;
  line-height: 3rem;
`

export const ValueTotal = styled.strong`
  display: inline-block;
  margin-top: 1rem;
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 3rem;
`
