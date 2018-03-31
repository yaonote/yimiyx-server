import BaseController from '../core/base-controller';

export default class GoodsController extends BaseController {

  async index() {
    const { service, ctx } = this;
    try {
      let { list, total } = await service.goods.query(ctx.query);
      this.success({ list, total });
    } catch (error) {
      this.fail(error);
    }
  }

  async save() {
    const { service, ctx } = this;
    const rowData = ctx.request.body;
    // 以数组中的第一个类目作为序号前缀
    rowData.goodsNo = rowData.categorys[0].no
    // 获取Goods表中的categorys[]
    rowData.categorys = rowData.categorys.map(item => item.categoryIds)
    try {
      await service.goods.save(rowData);
      this.success();
    } catch (error) {
      this.fail(error);
    }
  }

  async delete() {
    const { service, ctx } = this;
    const rowData: any = ctx.request.body
    try {
      await service.goods.delete(rowData.id);
      this.success();
    } catch (error) {
      this.fail(error);
    }
  }
}
