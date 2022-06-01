<template>
  <div class="px-0">
    <div class="col-11">
      <nuxt-link
        to="/"
        class="p-0"
        data-dismiss="modal"
        aria-label="Close"
      >
        <div class="row bg-main-active rounded-custom-active mx-0 p-3">
          <div class="col-12 px-0">
            <div class="d-flex align-items-center">
              <div class="flex-shrink-0">
                <img
                  class="menu-icon"
                  src="/img/menu/manage-user/icon-manage-user-dashboard.svg"
                  alt="..."
                />
              </div>
              <div class="flex-grow-1 ms-3 text-main-active">
                <h4 class="mb-0">Dashboard</h4>
              </div>
            </div>
          </div>
        </div>
      </nuxt-link>
    </div>
    <div class="col-11">
      <div class="accordion" id="accordionModeling">
        <div class="accordion-item border-unset">
          <nuxt-link to="#" class="p-0">
            <h2 class="accordion-header bg-main-active rounded-custom-active px-3" id="headingOne">
              <button class="accordion-button px-0 bg-unset border-unset box-shadow-unset" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                <div class="d-flex align-items-center">
                  <div class="flex-shrink-0">
                    <img
                      class="menu-icon"
                      src="/img/menu/manage-user/icon-manage-user-data.svg"
                      alt="..."
                    />
                  </div>
                  <div
                    class="
                      flex-grow-1
                      ms-3
                      text-main-active
                      d-flex
                      flex-row
                      justify-content-between
                    "
                  >
                    <div>
                      <h4 class="mb-0">การจัดการข้อมูล</h4>
                    </div>
                  </div>
                </div>
              </button>
            </h2>
          </nuxt-link>
          <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionModeling">
            <div class="accordion-body ps-0 pe-3 pb-0">
              <div
                class="col-9 offset-3 mb-4 d-flex flex-row justify-content-between"
              >
                <nuxt-link to="/data-user" class="p-0" data-dismiss="modal" aria-label="Close">
                  <h4 class="mb-0 text-main-active">ข้อมูลผู้ใช้งาน</h4>
                </nuxt-link>
                <div class="pe-2">
                  <span class="badge rounded-pill bg-danger">5</span>
                </div>
              </div>
              <div
                class="col-9 offset-3 d-flex flex-row justify-content-between mb-4"
              >
                <nuxt-link to="/data-report" class="p-0" data-dismiss="modal" aria-label="Close">
                  <h4 class="mb-0 text-main-active">ข้อมูลรายงาน</h4>
                </nuxt-link>
              </div>
              <div
                class="col-9 offset-3 d-flex flex-row justify-content-between mb-4"
              >
                <nuxt-link to="/data-block" class="p-0" data-dismiss="modal" aria-label="Close">
                  <h4 class="mb-0 text-main-active">ข้อมูลการบล็อก</h4>
                </nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-11">
      <nuxt-link
        to="/vip"
        class="p-0"
        data-dismiss="modal"
        aria-label="Close"
      >
        <div class="row bg-main-active rounded-custom-active mx-0 p-3">
          <div class="col-12 px-0">
            <div class="d-flex align-items-center">
              <div class="flex-shrink-0">
                <img
                  class="menu-icon"
                  src="/img/menu/manage-user/icon-manage-user-vip.png"
                  alt="..."
                />
              </div>
              <div
                class="
                  flex-grow-1
                  ms-3
                  text-main-active
                  d-flex
                  flex-row
                  justify-content-between
                "
              >
                <div>
                  <h4 class="mb-0">Member VIP</h4>
                </div>
                <div class="pe-2">
                  <span class="badge rounded-pill bg-danger">2</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nuxt-link>
    </div>
    <div class="col-11">
      <nuxt-link
        to="/coin"
        class="p-0"
        data-dismiss="modal"
        aria-label="Close"
      >
        <div class="row bg-main-active rounded-custom-active mx-0 p-3">
          <div class="col-12 px-0">
            <div class="d-flex align-items-center">
              <div class="flex-shrink-0">
                <img
                  class="menu-icon"
                  src="/img/menu/manage-user/icon-manage-user-addcoin.svg"
                  alt="..."
                />
              </div>
              <div
                class="
                  flex-grow-1
                  ms-3
                  text-main-active
                  d-flex
                  flex-row
                  justify-content-between
                "
              >
                <div>
                  <h4 class="mb-0">แจ้งการเติมเหรียญ</h4>
                </div>
                <div class="pe-2">
                  <span class="badge rounded-pill bg-danger">1</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nuxt-link>
    </div>
    <div class="col-11">
      <nuxt-link
        to="/withdraw"
        class="p-0"
        data-dismiss="modal"
        aria-label="Close"
      >
        <div class="row bg-main-active rounded-custom-active mx-0 p-3">
          <div class="col-12 px-0">
            <div class="d-flex align-items-center">
              <div class="flex-shrink-0">
                <img
                  class="menu-icon"
                  src="/img/menu/manage-user/icon-manage-user-withdraw.png"
                  alt="..."
                />
              </div>
              <div
                class="
                  flex-grow-1
                  ms-3
                  text-main-active
                  d-flex
                  flex-row
                  justify-content-between
                "
              >
                <div>
                  <h4 class="mb-0">แจ้งการถอนเงิน</h4>
                </div>
                <div class="pe-2">
                  <span class="badge rounded-pill bg-danger">1</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {}
</script>

