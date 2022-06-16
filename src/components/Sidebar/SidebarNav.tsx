import { Stack } from "@chakra-ui/react";
import { RiContactsLine, RiDashboardLine, RiGitMergeLine, RiInputMethodLine } from "react-icons/ri";

import { NavLinkProps } from "./NavLink";
import { NavSection } from "./NavSection";

export function SidebarNav() {
  return (
    <Stack
      spacing="12"
      align="flex-start"
    >
      <NavSection title="Geral">
        <NavLinkProps icon={RiDashboardLine}>Dashboard</NavLinkProps>
        <NavLinkProps icon={RiContactsLine}>Usuários</NavLinkProps>
      </NavSection>
      <NavSection title="AUTOMAÇÃO">
        <NavLinkProps icon={RiInputMethodLine}>Formulários</NavLinkProps>
        <NavLinkProps icon={RiGitMergeLine}>Automação</NavLinkProps>
      </NavSection>

    </Stack>
  );
}