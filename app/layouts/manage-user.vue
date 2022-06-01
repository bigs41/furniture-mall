<template>
  <div class="user-layout">
    <div class="container-fluid">
      <div class="row">
        <IncludesMenunavbar target="#navbar-user" />
        <IncludesSidebaruser />
        <div class="main pt-custom-main px-3">
          <nuxt />
        </div>
      </div>
    </div>
  </div>
</template>