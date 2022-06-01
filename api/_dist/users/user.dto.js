"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OnlineLocationDto = exports.DeleteUserDto = exports.GetUserDto = exports.UserDto = void 0;
const class_validator_1 = require("class-validator");
const mapped_types_1 = require("@nestjs/mapped-types");
const match_dto_1 = require("../match/match.dto");
class UserDto {
}
__decorate([
    (0, class_validator_1.IsMongoId)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UserDto.prototype, "_id", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], UserDto.prototype, "age", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], UserDto.prototype, "gender", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", match_dto_1.GenderObj)
], UserDto.prototype, "interest_gender", void 0);
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Array)
], UserDto.prototype, "passions", void 0);
__decorate([
    (0, class_validator_1.IsUrl)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UserDto.prototype, "user_img_url", void 0);
__decorate([
    (0, class_validator_1.NotContains)("-"),
    (0, class_validator_1.IsPhoneNumber)("TH"),
    (0, class_validator_1.Length)(10, 10),
    (0, class_validator_1.IsNumberString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UserDto.prototype, "phone_number", void 0);
__decorate([
    (0, class_validator_1.IsLatitude)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UserDto.prototype, "latitude", void 0);
__decorate([
    (0, class_validator_1.IsLongitude)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UserDto.prototype, "longitude", void 0);
exports.UserDto = UserDto;
class GetUserDto extends (UserDto) {
    constructor() {
        super(...arguments);
        this.skip = 0;
        this.limit = null;
        this.search = null;
    }
}
exports.GetUserDto = GetUserDto;
class DeleteUserDto extends (0, mapped_types_1.PartialType)(UserDto) {
}
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsMongoId)(),
    __metadata("design:type", String)
], DeleteUserDto.prototype, "_id", void 0);
exports.DeleteUserDto = DeleteUserDto;
class OnlineLocationDto extends (0, mapped_types_1.PartialType)(UserDto) {
    constructor() {
        super(...arguments);
        this.online_status = true;
    }
}
__decorate([
    (0, class_validator_1.IsMongoId)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], OnlineLocationDto.prototype, "_id", void 0);
__decorate([
    (0, class_validator_1.IsLatitude)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], OnlineLocationDto.prototype, "latitude", void 0);
__decorate([
    (0, class_validator_1.IsLongitude)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], OnlineLocationDto.prototype, "longitude", void 0);
exports.OnlineLocationDto = OnlineLocationDto;
//# sourceMappingURL=user.dto.js.map