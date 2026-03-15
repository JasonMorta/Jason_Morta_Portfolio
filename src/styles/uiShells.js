import styled from 'styled-components';

export const GlassPanel = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #000000b3;
  border: 1px solid rgba(194, 41, 72, 0.22);
  box-shadow: 0 18px 48px rgba(0, 0, 0, 0.28), inset 0 1px 0 rgba(255,255,255,0.04);
  border-radius: 18px;
  text-align: center;
  align-items: center;
  max-width: 59.375rem;
  width: 90%;
  color: #cfcfcf;
  transition: transform 220ms ease, box-shadow 220ms ease, border-color 220ms ease;
  margin: auto;
  overflow: hidden;
  position: relative;
  backdrop-filter: blur(8px);

  &:hover {
    border-color: rgba(194, 41, 72, 0.38);
    box-shadow: 0 22px 52px rgba(0, 0, 0, 0.34), 0 0 0 1px rgba(194, 41, 72, 0.08);
  }
`;

export const PanelHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const AccentKicker = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  color: #e8dec5;
  font-size: 0.78rem;
  text-transform: uppercase;
  letter-spacing: 0.16em;
  opacity: 0.88;

  &::before {
    content: '';
    width: 1.35rem;
    height: 1px;
    background: linear-gradient(90deg, #c22948 0%, transparent 100%);
  }
`;

export const SectionTitle = styled.h1`
  margin: 0.35rem 0 0;
  color: #f0ece4;
  line-height: 1;
  font-size: clamp(1.8rem, 3vw, 3rem);
`;

export const MetaPill = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 2rem;
  padding: 0.4rem 0.75rem;
  border-radius: 999px;
  border: 1px solid rgba(194, 41, 72, 0.32);
  background: rgba(194, 41, 72, 0.12);
  color: #e8dec5;
  font-size: 0.8rem;
  white-space: nowrap;
`;

export const ActionChip = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  text-decoration: none;
  color: #f4f0ea;
  border-radius: 12px;
  padding: 0.72rem 0.95rem;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(194, 41, 72, 0.2);
  transition: transform 180ms ease, background 180ms ease, border-color 180ms ease;

  &:hover {
    transform: translateY(-2px);
    background: rgba(194, 41, 72, 0.16);
    border-color: rgba(194, 41, 72, 0.45);
  }
`;
