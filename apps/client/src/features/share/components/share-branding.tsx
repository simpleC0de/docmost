import { Affix } from "@mantine/core";
import { IconHeart } from "@tabler/icons-react";

export default function ShareBranding() {
  return (
    <Affix position={{ bottom: 20, right: 20 }}>
      <a
        href="https://docmost.com?ref=public-share"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '6px',
          padding: '8px 12px',
          fontSize: '13px',
          color: 'var(--SWISSER-text-tertiary)',
          textDecoration: 'none',
          borderRadius: 'var(--SWISSER-radius-sm)',
          transition: 'var(--SWISSER-transition-fast)',
          backgroundColor: 'transparent',
        }}
        className="share-branding-link"
      >
        <span>Powered by</span>
        <IconHeart size={14} style={{ color: '#EF4444' }} fill="#EF4444" />
        <span style={{ fontWeight: 600 }}>Docmost</span>
      </a>
    </Affix>
  );
}
