<template>
  <scoped-login />
</template>

<script>
export default {
components: {
   scopedLogin: () => import("@/components/scoped/login/TheLogin")
  }
}
</script>
