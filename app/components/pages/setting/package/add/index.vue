<template>
  <div class="mt-3">
    <div class="row">
      <div class="col-12">
        <div class="row mx-0 p-3 bg-white rounded8px mb-2px">
          <div class="col-12 d-flex justify-content-between mb-2">
            <div class="form-check ps-0 d-flex flex-row d-flex align-items-center">
              <input class="form-check-input cursor-pointer mx-0 mt-0" type="checkbox" value="" id="defaultCheck1">
              <label class="form-check-label" for="defaultCheck1"></label>
              <h5 class="mb-0 ms-2"><strong>Feature Deal Club</strong></h5>
            </div>
            <div class="form-check form-switch">
              <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked>
              <label class="form-check-label" for="flexSwitchCheckChecked"></label>
            </div>
          </div>
          <div class="col-12">
            <div class="row p-3 border-custom-package mx-0">
              <div class="col-12 mb-3">
                <h5 class="mb-0 text-secondary"><strong>Function</strong></h5>
              </div>
              <div class="col-12 mb-3 d-flex justify-content-between">
                <div>
                  <h5 class="mb-0"><strong>เงื่อนไขการสร้างห้อง Deal Club</strong></h5>
                  <small class="text-secondary">(คุณต้องการกำหนดเงื่อนไขการสร้างห้อง Deal Club หรือไม่)</small>
                </div>
                <div>
                  <button class="btn btn-main">test</button>
                </div>
              </div>
              <div class="col-6">
                <div class="row">
                  <div class="col-6">
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped>
.form-check-input:checked {
  background-color: #5AA567;
  border-color: #5AA567;
}
.border-custom-package{
  border: 2px solid #ddd;
  border-radius: 8px;
}
</style>