export default defineNuxtRouteMiddleware((to) => {
  if (process.client) {
    try {
      if (typeof WebAssembly === 'object' && 
          typeof WebAssembly.instantiate === 'function') {
        const module = new WebAssembly.Module(
          new Uint8Array([0x0, 0x61, 0x73, 0x6d, 0x01, 0x00, 0x00, 0x00])
        )
        if (!(module instanceof WebAssembly.Module)) {
          throw new Error('WebAssembly is not properly supported')
        }
      } else {
        throw new Error('WebAssembly is not available')
      }
    } catch (e) {
      console.warn('WebAssembly is not supported in this browser')
      // You could redirect to a fallback page or show a warning
      // return navigateTo('/unsupported-browser')
    }
  }
}) 