<template>
    <div>
		<div class="container">
			<div class="row">
				<div class="col-12 px-0">
					<nav class="navbar navbar-light bg-white d-lg-none d-md-none d-block">
						<div class="container-fluid">
							<div class="col-12 text-center py-2">
								<img src="/img/logo.svg" class="logo-w-20" alt="">
							</div>
						</div>
					</nav>
				</div>
				<div class="col-12">
					<div class="d-lg-none d-md-none d-block">
						<div class="row bg-white">
							<div class="col-6 text-center px-0">
								<h5 class="mb-0 py-2 text-dark active"><strong>เข้าสู่ระบบ</strong></h5>
							</div>
							<div class="col-6 text-center px-0">
								<nuxt-link to="/register">
									<h5 class="mb-0 py-2 text-dark"><strong>สมัครสมาชิก</strong></h5>
								</nuxt-link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
    </div>
</template>

<style scoped>
	.active{
        color: var(--iq-main) !important;
        border-bottom: 3px solid var(--iq-main);
    }
</style>