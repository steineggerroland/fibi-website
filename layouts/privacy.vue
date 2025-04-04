<template>
    <Navbar expand="md" background-color="light" background-opacity="25" sticky="top">
        <Container>
            <NavbarBrand :to="localePath('/')" class="navbar-brand">
                <b-img src="/logo.png" alt="Logo" height="40px" />
            </NavbarBrand>
            <NavbarToggler />
            <NavbarCollapse>
                <NavbarNavList margin="s-auto" toggle="tooltip" placement="bottom"
                    :title="$t('navbar.toggle-color-mode')">
                    <NavItem>
                        <NavLink :to="localePath('/')">{{ $t('navbar.home') }}</NavLink>
                    </NavItem>
                    <ColorModeNavItemDropdown style="cursor: pointer;" />
                    <NavItemDropdown>
                        <NavItemDropdownToggle style="cursor: pointer;"><span toggle="tooltip" :title="$t('navbar.language')">🌐</span></NavItemDropdownToggle>
                        <DropdownMenu>
                            <DropdownItem>
                                <NuxtLink :to="switchLocalePath('de')">Deutsch 🇩🇪</NuxtLink>
                            </DropdownItem>
                            <DropdownItem>
                                <NuxtLink :to="switchLocalePath('en')">English 🇺🇸</NuxtLink>
                            </DropdownItem>
                        </DropdownMenu>
                    </NavItemDropdown>
                </NavbarNavList>
            </NavbarCollapse>
        </Container>
    </Navbar>

    <Container class="py-4">
        <slot />
    </Container>
</template>

<script lang="ts" setup>
import { NavItem } from '#components'

const { t } = useI18n()
const switchLocalePath = useSwitchLocalePath()
const localePath = useLocalePath()
</script>

<style scoped>
.navbar-brand img {
    text-decoration: none;
    transition: opacity 0.2s;
}

.navbar-brand img:hover {
    opacity: 0.8;
}
</style>