import BaseController from '../../core/base-controller';
import { CouponQuery, CouponResult, CouponPartial } from '../../common/QueryInterface';

export default class CouponController extends BaseController {

  async getCouponList(): Promise<void> {
    const query: CouponQuery = this.ctx.query;
    let result: CouponResult = await this.service.admin.coupon.query(query);
    this.success(result);
  }

  async saveCoupon(): Promise<void> {
    const couponData: CouponPartial = this.ctx.request.body;
    await this.service.admin.coupon.save(couponData);
    this.success();
  }

  async deleteCoupon(): Promise<void> {
    const params: CouponPartial = this.ctx.request.body;
    if (params.couponId) {
      await this.service.admin.coupon.remove(params.couponId);
      this.success();
    } else {
      this.fail({}, 50001, '缺少参数');
    }
  }
}
