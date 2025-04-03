<template>
  <Navbar background-color="white" background-opacity="25" sticky="top">
    <Container justify-content="end">
      <NavbarNavList>
        <ColorModeNavItemDropdown style="cursor: pointer;" />
      </NavbarNavList>

      <Dropdown>
        <DropdownToggle color="light">Language 🌐</DropdownToggle>
        <DropdownMenu>
          <DropdownItem>
            <NuxtLink :to="switchLocalePath('de')">Deutsch 🇩🇪</NuxtLink>
          </DropdownItem>
          <DropdownItem>
            <NuxtLink :to="switchLocalePath('en')">English 🇺🇸</NuxtLink>
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
      <b-span toggle="tooltip" 
  placement="bottom" :title="$t('privacy.toggle-privacy-settings')">
      <b-button margin="x-1" color="light" size="sm" 
   toggle="collapse"
   href="#privacy-acceptance" :aria-label="$t('privacy.toggle-privacy-settings')" aria-controls="privacy-acceptance">
        🔐
      </b-button>
    </b-span>
    </Container>
    <Collapse id="privacy-acceptance" ref="privacyAcceptance" margin="x-auto y-2">
      <Container background-color="white" padding="2">
        <PrivacyAcceptance @privacy-accepted="handlePrivacyAccepted" />
      </Container>
    </Collapse>
  </Navbar>

  <slot />
</template>
<script lang="ts" setup>
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

<style></style>