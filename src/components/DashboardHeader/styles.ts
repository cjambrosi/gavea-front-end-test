import styled from 'styled-components'

export const Header = styled.header`
  background: var(--navy-blue-700);
  height: 9.375rem;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 0 1.313rem;

  .logo {
    margin-top: 1.875rem;
  }
`

export const Card = styled.div`
  height: 80px;
  background: var(--white);
  box-shadow: 0px 12px 35px rgba(1, 66, 106, 0.2);
  border-radius: 0.438rem;
  margin: 0 1.313rem;
  padding: 0 1rem;
  display: flex;
  align-items: center;
  transform: translateY(-40px);
`

export const Avatar = styled.div`
  background: var(--blue-300);
  box-shadow: 0px 3.6px 8.1px rgba(45, 56, 83, 0.2);
  width: 50px;
  height: 50px;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  .text {
    color: var(--white);
    font-family: var(--main-font-family);
    font-style: normal;
    font-weight: 400;
    font-size: 1.375rem;
    letter-spacing: 0.063rem;
  }
`

export const UserInfo = styled.div`
  margin-left: 13px;

  .text-name {
    color: var(--navy-blue-800);
    font-family: var(--second-font-family);
    font-style: normal;
    font-weight: 600;
    font-size: 1.25rem;
    line-height: 100%;
  }

  .text-info {
    color: var(--gray-600);
    font-family: var(--second-font-family);
    font-style: normal;
    font-weight: 400;
    font-size: 0.875rem;
    margin-top: 5px;
    opacity: 0.8;
  }
`
