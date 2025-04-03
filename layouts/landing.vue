<template>
  <Navbar expand="md" background-color="white" background-opacity="25" sticky="top" class="flex-wrap">
    <Container>
      <NavbarToggler target="#navbar-collapse" margin="s-auto" />
      <NavbarCollapse id="navbar-collapse">
        <NavbarBrand to="/" class="navbar-brand">
          <b-img src="/logo.png" alt="Logo" height="40px" />
        </NavbarBrand>
        <NavbarNavList margin="s-auto" toggle="tooltip" placement="bottom" :title="$t('navbar.toggle-color-mode')">
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
          <NavItem toggle="tooltip" placement="bottom" :title="$t('navbar.toggle-privacy-settings')">
            <NavLink margin="x-1" color="light" size="sm" toggle="collapse" href="#privacy-acceptance"
              :aria-label="$t('navbar.toggle-privacy-settings')" aria-controls="privacy-acceptance">
              🔐
            </NavLink>
          </NavItem>
        </NavbarNavList>
      </NavbarCollapse>
      <Collapse id="privacy-acceptance" ref="privacyAcceptance" margin="x-auto y-2" class="clear-float">
        <Container background-color="body" padding="2">
          <PrivacyAcceptance @privacy-accepted="handlePrivacyAccepted" />
        </Container>
      </Collapse>
    </Container>
  </Navbar>

  <slot />
</template>
<script lang="ts" setup>
import { NavItem } from '#components';

const switchLocalePath = useSwitchLocalePath()
const privacyAcceptance = ref(null)
const { updatePrivacySettings } = usePrivacy()

const handlePrivacyAccepted = (settings: { analytics: boolean; tracking: boolean }) => {
  privacyAcceptance.value?.hide()
  updatePrivacySettings(settings)
}
onMounted(() => {
  if (localStorage.getItem('privacyAccepted') !== 'true') {
    privacyAcceptance.value?.show()
  }
})
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