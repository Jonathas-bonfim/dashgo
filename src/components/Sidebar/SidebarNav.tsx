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
        <NavLinkProps icon={RiDashboardLine} href="/dashboard">Dashboard</NavLinkProps>
        <NavLinkProps icon={RiContactsLine} href="/users">Usuários</NavLinkProps>
      </NavSection>
      <NavSection title="AUTOMAÇÃO">
        <NavLinkProps icon={RiInputMethodLine} href="/forms">Formulários</NavLinkProps>
        <NavLinkProps icon={RiGitMergeLine} href="/automation">Automação</NavLinkProps>
      </NavSection>

    </Stack>
  );
}