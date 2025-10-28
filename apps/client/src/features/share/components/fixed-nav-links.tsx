import { Box, UnstyledButton, useMantineColorScheme } from "@mantine/core";
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
  const { colorScheme } = useMantineColorScheme();
  const isLight = colorScheme === 'light';

  return (
    <Box
      style={{
        paddingBottom: '16px',
        marginBottom: '16px',
        borderBottom: `1px solid ${isLight ? '#e5e5e5' : 'var(--SWISSER-border-color)'}`,
      }}
    >
      {fixedLinks.map((link) => (
        <UnstyledButton
          key={link.url}
          component="a"
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="fixed-nav-link"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            padding: '10px 16px',
            width: '100%',
            color: isLight ? '#262626' : 'var(--SWISSER-text-secondary)',
            borderRadius: 'var(--SWISSER-radius-md)',
            transition: 'var(--SWISSER-transition-fast)',
            textDecoration: 'none',
            backgroundColor: 'transparent',
          }}
          styles={{
            root: {
              '&:hover': {
                backgroundColor: `${isLight ? '#e5e5e5' : 'var(--SWISSER-bg-tertiary)'} !important`,
                color: `${isLight ? '#000000' : 'var(--SWISSER-text-primary)'} !important`,
                transform: 'translateY(-1px) !important',
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
