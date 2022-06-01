<template>
  <div class="mt-3">
    <div class="row">
      <div class="col-12">
        <div class="row mx-0 px-3 pt-0 pb-0 bg-white rounded8px-top mb-2px">
          <div class="col-12">
            <ul class="nav nav-pills mb-0 flex-custom" id="pills-tab" role="tablist">
              <li class="nav-item py-2 nowrap-custom" role="presentation">
                <button class="nav-link active" id="pills-all-tab" data-bs-toggle="pill" data-bs-target="#pills-all" type="button" role="tab" aria-controls="pills-all" aria-selected="true"><h5 class="mb-0"><strong>ภาพรวม</strong></h5></button>
              </li>
              <li class="nav-item py-2 nowrap-custom" role="presentation">
                <button class="nav-link" id="pills-content-tab" data-bs-toggle="pill" data-bs-target="#pills-content" type="button" role="tab" aria-controls="pills-content" aria-selected="false"><h5 class="mb-0"><strong>คอนเทนต์กิจกรรม</strong></h5></button>
              </li>
              <li class="nav-item py-2 nowrap-custom" role="presentation">
                <button class="nav-link" id="pills-upload-tab" data-bs-toggle="pill" data-bs-target="#pills-upload" type="button" role="tab" aria-controls="pills-upload" aria-selected="false"><h5 class="mb-0"><strong>อัพโหลดรูปภาพ</strong></h5></button>
              </li>
            </ul>
          </div>
        </div>
        <div class="row mx-0 p-3 bg-white mb-xl-0 mb-lg-2 mb-md-2 mb-2">
            <div class="col-12">
              <div class="tab-content" id="pills-tabContent">
                <div class="tab-pane fade show active" id="pills-all" role="tabpanel" aria-labelledby="pills-all-tab">
                  <div class="col-12">
                    <div class="row">
                      <div class="col-12">
                        <div class="mb-3">
                          <label for="activity" class="form-label"><h5 class="mb-0"><strong>หัวข้อกิจกรรม</strong></h5></label>
                          <input type="text" class="form-control" id="activity" placeholder="หัวข้อกิจกรรม">
                        </div>
                      </div>
                      <div class="col-12">
                        <div class="mb-3 d-flex flex-column">
                          <div>
                            <label for="activity" class="form-label"><h5 class="mb-0"><strong>สถานะกิจกรรม</strong></h5></label>
                          </div>
                          <div>
                            <div class="form-check form-check-inline">
                              <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1">
                              <label class="form-check-label" for="inlineRadio1"><h5 class="mb-0"><strong>Active</strong></h5></label>
                            </div>
                            <div class="form-check form-check-inline">
                              <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2">
                              <label class="form-check-label" for="inlineRadio2"><h5 class="mb-0"><strong>Inactive</strong></h5></label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-12">
                        <div class="row">
                          <div class="col-xxl-2 col-xl-4 col-lg-4 col-md-4 col-12">
                            <div class="mb-3">
                              <label for="dateStart" class="form-label"><h5 class="mb-0"><strong>วันเริ่ม<span class="text-main">*</span></strong></h5></label>
                              <input type="date" class="form-control" id="dateStart" placeholder="หัวข้อกิจกรรม">
                            </div>
                          </div>
                          <div class="col-xl-1 col-xl-2 col-lg-2 col-md-2 col-12">
                            <label for="time" class="form-label"><h5 class="mb-0"><strong>เวลาที่เริ่ม</strong></h5></label>
                            <div class="mb-3">
                              <input type="time" class="form-control" id="time">
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-12">
                        <div class="row justify-content-end">
                          <div class="col-lg-3 col-md-3 col-12">
                            <div class="row g-2">
                              <div class="col-6">
                                <button class="btn btn-main form-control"><h5 class="mb-0">บันทึก</h5></button>
                              </div>
                              <div class="col-6">
                                <button class="btn btn-secondary form-control"><h5 class="mb-0">ยกเลิก</h5></button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="tab-pane fade" id="pills-content" role="tabpanel" aria-labelledby="pills-content-tab">
                  <div class="col-12">
                    <div class="row">
                      <div class="col-12 mb-3">
                        <VueTrix v-model="editorContent"/>
                      </div>
                      <div class="col-12">
                        <div class="row justify-content-end">
                          <div class="col-lg-3 col-md-3 col-12">
                            <div class="row g-2">
                              <div class="col-6">
                                <button class="btn btn-main form-control"><h5 class="mb-0">บันทึก</h5></button>
                              </div>
                              <div class="col-6">
                                <button class="btn btn-secondary form-control"><h5 class="mb-0">ยกเลิก</h5></button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="tab-pane fade" id="pills-upload" role="tabpanel" aria-labelledby="pills-upload-tab">
                  <div class="col-12">
                    <div class="row">
                      <div class="col-12 mb-3 upload">
                        <UploadImages />
                      </div>
                      <div class="col-12">
                        <div class="row justify-content-end">
                          <div class="col-lg-3 col-md-3 col-12">
                            <div class="row g-2">
                              <div class="col-6">
                                <button class="btn btn-main form-control"><h5 class="mb-0">บันทึก</h5></button>
                              </div>
                              <div class="col-6">
                                <button class="btn btn-secondary form-control"><h5 class="mb-0">ยกเลิก</h5></button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
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

<script>
import VueTrix from 'vue-trix'
import UploadImages from "vue-upload-drop-images"
export default {
    components: {
      VueTrix,
      UploadImages,
    },
  }
</script>

<style scoped>
  .nav-pills .nav-link.active, .nav-pills .show>.nav-link{
    color: var(--iq-main);
    background-color: unset;
  }
  .nav-link{
    color: var(--iq-dark-more-text);
  }
  .progress.attachment__progress{
    display: none !important;
  }
  .upload .container{
    max-width: 1920px !important;
  }
</style>