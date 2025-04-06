<template>
    <Navbar expand="md" background-color="light" background-opacity="25" sticky="top">
        <Container>
            <NavbarBrand :to="localePath('/')" class="navbar-brand">
                <b-img src="/logo.png" alt="Logo" height="40px" />
            </NavbarBrand>
            <NavbarToggler />
            <NavbarCollapse>
                <NavbarNavList margin="s-auto">
                    <NavItem>
                        <NavLink :to="localePath('/#features')">
                            {{ $t('navbar.link.features') }}
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink :to="localePath('/#earlyAccess')">
                            {{ $t('navbar.link.early-access') }}
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink :to="localePath('/blog')">
                            {{ $t('navbar.link.blog') }}
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink :to="localePath('/#contactForm')">
                            {{ $t('navbar.link.contact') }}
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink :to="localePath('/#about')">
                            {{ $t('navbar.link.about') }}
                        </NavLink>
                    </NavItem>
                    <ColorModeNavItemDropdown style="cursor: pointer;" toggle="tooltip" placement="bottom"
                    :title="$t('navbar.toggle-color-mode')" />
                    <NavItemDropdown>
                        <NavItemDropdownToggle style="cursor: pointer;"><span toggle="tooltip"
                                :title="$t('navbar.language')">🌐</span></NavItemDropdownToggle>
                        <DropdownMenu>
                            <DropdownItem>
                                <NuxtLink :to="switchLocalePath('de')">Deutsch 🇩🇪</NuxtLink>
                            </DropdownItem>
                            <DropdownItem>
                                <NuxtLink :to="switchLocalePath('en')">English 🇺🇸</NuxtLink>
                            </DropdownItem>
                        </DropdownMenu>
                    </NavItemDropdown>
          <NavItem>
            <NavLink margin="x-1" color="light" size="sm" href="#privacy-acceptance-settings">
              🔐
            </NavLink>
          </NavItem>
                </NavbarNavList>
            </NavbarCollapse>
        </Container>
    </Navbar>

    <Container class="py-4">
        <slot />
    </Container>
    <Footer />
</template>

<script lang="ts" setup>
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