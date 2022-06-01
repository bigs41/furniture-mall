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
exports.MatchDto = exports.GenderObj = exports.Range = void 0;
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
class Range {
}
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], Range.prototype, "upperLimit", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], Range.prototype, "lowerLimit", void 0);
exports.Range = Range;
class UserObj {
}
__decorate([
    (0, class_validator_1.IsMongoId)(),
    __metadata("design:type", String)
], UserObj.prototype, "_id", void 0);
class GenderObj {
}
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], GenderObj.prototype, "id", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], GenderObj.prototype, "label", void 0);
exports.GenderObj = GenderObj;
class MatchDto {
}
__decorate([
    (0, class_validator_1.IsLatitude)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_transformer_1.Type)(() => Number),
    __metadata("design:type", Number)
], MatchDto.prototype, "latitude", void 0);
__decorate([
    (0, class_validator_1.IsLongitude)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_transformer_1.Type)(() => Number),
    __metadata("design:type", Number)
], MatchDto.prototype, "longitude", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => Range),
    __metadata("design:type", Range)
], MatchDto.prototype, "radius_distance", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => Range),
    __metadata("design:type", Range)
], MatchDto.prototype, "age", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ArrayMaxSize)(3),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => GenderObj),
    __metadata("design:type", Array)
], MatchDto.prototype, "gender", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => UserObj),
    __metadata("design:type", Array)
], MatchDto.prototype, "exclude", void 0);
exports.MatchDto = MatchDto;
//# sourceMappingURL=match.dto.js.map