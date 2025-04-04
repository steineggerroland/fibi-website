import { ref, onMounted } from 'vue'

export const useWebAssemblySupport = () => {
  const isWebAssemblySupported = ref(false)

  onMounted(() => {
    try {
      if (typeof WebAssembly === 'object' && 
          typeof WebAssembly.instantiate === 'function') {
        const module = new WebAssembly.Module(
          new Uint8Array([0x0, 0x61, 0x73, 0x6d, 0x01, 0x00, 0x00, 0x00])
        )
        if (module instanceof WebAssembly.Module) {
          isWebAssemblySupported.value = true
        }
      }
    } catch (e) {
      console.warn('WebAssembly is not supported in this browser')
      isWebAssemblySupported.value = false
    }
  })

  return {
    isWebAssemblySupported
  }
} 