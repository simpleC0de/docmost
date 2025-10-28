import { Box, UnstyledButton } from "@mantine/core";
import {
  IconBrandDiscord,
  IconBriefcase,
  IconWorld,
  IconShoppingCart
} from "@tabler/icons-react";

const fixedLinks = [
  {
    label: "Discord",
    url: "https://swisser.dev/discord",
    icon: IconBrandDiscord,
  },
  {
    label: "Portfolio",
    url: "https://swisser.dev/portfolio",
    icon: IconBriefcase,
  },
  {
    label: "Website",
    url: "https://swisser.dev",
    icon: IconWorld,
  },
  {
    label: "Tebex",
    url: "https://swisser.dev/fivem/store/products",
    icon: IconShoppingCart,
  },
];

export default function FixedNavLinks() {
  return (
    <Box
      style={{
        paddingBottom: '16px',
        marginBottom: '16px',
        borderBottom: '1px solid var(--SWISSER-border-color)',
      }}
    >
      {fixedLinks.map((link) => (
        <UnstyledButton
          key={link.url}
          component="a"
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            padding: '10px 16px',
            width: '100%',
            color: 'var(--SWISSER-text-secondary)',
            borderRadius: 'var(--SWISSER-radius-md)',
            transition: 'var(--SWISSER-transition-fast)',
            textDecoration: 'none',
          }}
          styles={{
            root: {
              '&:hover': {
                backgroundColor: 'var(--SWISSER-bg-tertiary)',
                color: 'var(--SWISSER-text-primary)',
                transform: 'translateY(-1px)',
              },
            },
          }}
        >
          <link.icon size={18} stroke={2} />
          <span style={{ fontSize: '14px', fontWeight: 500 }}>
            {link.label}
          </span>
        </UnstyledButton>
      ))}
    </Box>
  );
}
